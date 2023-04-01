import { useState } from "react";



function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    /* const [password, setPassword] = useState('');
 */
    function handleSubmit(e) {
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(phone);
    }

    return (
        <div>
            Register
            <form onSubmit={handleSubmit}>
                <label >Name:</label><br></br>
                <input placeholder="input full name" value={name} onChange={e => setName(e.target.value)} required /><br></br>
                <label >Email:</label><br></br>
                <input placeholder="input email" value={email} onChange={e => setEmail(e.target.value)} required /><br></br>
                <label >Phone Number:</label><br></br>
                <input placeholder="input your phone number" value={phone} onChange={e => setPhone(e.target.value)} required /><br></br>
               {/*  <label >password:</label><br></br>
                <input placeholder="input password" value={password} onChange={e => setPassword(e.target.value)} required /><br></br> */}
                <button type="submit">Submit</button>
            </form>
            <button></button>

        </div>
    );
}

export { Register }