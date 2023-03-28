import { useState } from "react";

 function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [ConfirmPassword, setConfirmPassword] = useState('')

    function handleNameChange(e){
        setName(e.target.value)
    }
    function handleEmailChange(e){
        setEmail(e.target.value)
    }
    function handlePhoneChange(e){
        setPhone(e.target.value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }
    function handleConfirmPasswordChange(e){
        setConfirmPassword(e.target.value)
    }
    
    return (
        <div>
            <h1>The Details in the Register form are as follows:</h1>
            <div className="register">
                    <label >Name:{''}</label><br></br>
                    <input  value={name} onChange ={handleNameChange}/><br></br>
                    <label >Email:{''}</label><br></br>
                    <input  value={email} onChange ={handleEmailChange}/><br></br>
                    <label >Phone Number:{''}</label><br></br>
                    <input  value={phone} onChange = {handlePhoneChange}/><br></br>
                    <label >password:{''}</label><br></br>
                    <input  value={password} onChange = {handlePasswordChange}/><br></br>
                    <label >Confirm password:{''}</label><br></br>
                    <input value={ConfirmPassword} onChange = {handleConfirmPasswordChange}/><br></br>
                    <div>
                        {name}
                        {email}
                        {phone}
                        {password}
                        {ConfirmPassword}
                    </div>
                   {/*  <button onClick={handleSubmit}>Submit</button> */}
            </div>
        </div>
    );
}

export  {Register}