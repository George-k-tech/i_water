import { useState } from "react";


function Login() {
    const [inputs, setInputs] = useState({});
    
function handleChange(event){
    const name = event.target.name
    const value = event.target.value
    setInputs(values => ({...value, [name]: value }));

}

    function handleSubmit(e){
        e.preventDefault();
        console.log(inputs)
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>Email</label>
            <input name="email" onChange={handleChange} placeholder="Input your email" required />
            <label>Password</label>
            <input name="password" onChange={handleChange} placeholder="Input password" required />
            <button type = "submit"> submit</button>
        </form>
    );

}
export {Login}