import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GoogleButton } from "react-google-button";
import { UserAuth } from "../../Context/AuthContext";
import './register.css'


function Register() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const { createUser, googleSignIn } = UserAuth();
    const navigate = useNavigate();

    const handleGoogleSignIn = async () => {
        try {
            await googleSignIn();
            navigate('/home');
        } catch (e) {
            setError(e.message);
        }
    }

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
        <div className="register">
            <div className="register-content">
                <h1>Register Here!</h1>
                {error && <div className='auth__error'>{error}</div>}
                <div className="register-form">
                    <form onSubmit={handleSubmit}>
                        <label>email</label>
                        <input placeholder="email" type="email " value={email} onChange={e => setEmail(e.target.value)}></input><br></br>
                        <label>password</label>
                        <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
                        <label>confirm password</label>
                        <input placeholder="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input><br></br>

                        <div className="form-bottom">
                            <button className="register-btn" type="submit" >register</button>
                            <p>Already have an account? <Link to="/">Login</Link> </p>
                        </div>
                        <GoogleButton onClick={handleGoogleSignIn} />
                    </form>

                </div>

            </div>
        </div>
    );
}

export { Register }