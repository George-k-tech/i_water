import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";
import './login.css'

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
            navigate('/home')
        } catch (e) {
            setError(e.message);
        }

    }

    return (
        <div className="login-page">
           


          <div className="login">
            <div className="login-content">
            <div className="login-header">
            <h1>Login to i_water</h1>
            </div>
            <div className="login-form">
            {error && <div className='auth__error'>{error}</div>}
            <div register-form>
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input name="email" onChange={e => setEmail(e.target.value)} value={email} placeholder="Input your email" required />
                <label>Password</label>
                <input name="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Input password" required />
                <div className="form-footer">
                <button className="submit-btn"  type="submit"> submit</button>
                <p className="register-link">Don't have an account? <Link to="/register">Register</Link></p>
                </div>
            </form>
            </div>
                
            </div>

            </div>
      
          
            

          </div>
          <div className="logimage">
                

          </div>
          
          

           
        </div>
    );

}
export { Login }