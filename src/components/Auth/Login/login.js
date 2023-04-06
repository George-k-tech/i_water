import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const {loginUser} = UserAuth();

    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await loginUser(email, password)
            navigate('/account')
        } catch (e) {
            setError(e.message);
            console.log(e.message)
        }

    }

    return (
        <div>
            <h1>Login page</h1>
            {error && <div className='auth__error'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input name="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Input your email" required />
                <label>Password</label>
                <input name="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Input password" required />
                <button type="submit"> submit</button>
                <p>Don't have an account? <Link to="/register">Register</Link></p>
            </form>
        </div>
    );

}
export { Login }