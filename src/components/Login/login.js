import { useState } from "react";
import { Form } from "react-router-dom";

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    function handleSubmit(e){
        e.preventDefault();
        console.log(email);
        console.log(password);

    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input value={email} onChange={e => setEmail(e.target.value)} placeholder="Input your email" required />
            <label>Password</label>
            <input value={password} onChange={e => setPassword(e.target.value)} placeholder="Input password" required />
            <button type = "submit"> submit</button>
        </form>
    );

}
export {Login}