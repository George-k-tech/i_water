import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";

function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser } = UserAuth();
    const navigate = useNavigate();

    function validatePassword() {
        let isValid = true
        if (password !== '' && confirmPassword !== '') {
            if (password !== confirmPassword) {
                isValid = false
                setError('passwords does not match');
            }
        }
        return isValid
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        if (validatePassword()) {
            try {
                await createUser(email, password);
                navigate('/home');
            } catch (e) {
                setError(e.message);
            }
        }
    }

    return (
        <div>
            <h1>Register page</h1>
            {error && <div className='auth__error'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>email</label>
                <input placeholder="email" type="email " value={email} onChange={e => setEmail(e.target.value)}></input><br></br>
                <label>password</label>
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
                <label>confirm password</label>
                <input placeholder="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input><br></br>

                <button type="submit" >register</button>
                <p>Already have an account? <Link to="/">Login</Link> </p>
            </form>
        </div>
    );
}

export { Register }