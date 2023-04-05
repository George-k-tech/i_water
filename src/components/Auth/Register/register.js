import { useState } from "react";
import { auth } from "../../../Database/firebase";
import { createUserWithEmailAndPassword } from "firebase/auth";


function Register() {

    const [email, setEmail] = useState('');
    const [fname, setFname] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');


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

    function handleSubmit(e) {
        e.preventDefault();
        if(validatePassword()){
            createUserWithEmailAndPassword(auth, email, password)
            .then((res) =>{
                console.log(res.user)
            })
            .catch(err => setError(err.message))
        }
        setFname('')
        setPhone('')
        setEmail('')
        setPassword('')
        setConfirmPassword('')

    }

    return (
        <div>
              {error && <div className='auth__error'>{error}</div>}
            <form onSubmit={handleSubmit}>
                <label>Name</label>
                <input placeholder="Name" type="text" value={fname} onChange={e => setFname(e.target.value)}></input><br></br>
                <label>phone</label>
                <input placeholder="phone" type="phone" value={phone} onChange={e => setPhone(e.target.value)}></input><br></br>
                <label>email</label>
                <input placeholder="email" type="email " value={email} onChange={e => setEmail(e.target.value)}></input><br></br>
                <label>password</label>
                <input placeholder="password" type="password" value={password} onChange={e => setPassword(e.target.value)}></input><br></br>
                <label>confirm password</label>
                <input placeholder="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)}></input><br></br>

                <button type="submit" onClick={() => navigate('/login')}>register</button>
            </form>
        </div>
    );
}

export { Register }