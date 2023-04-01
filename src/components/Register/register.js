import { useState } from "react";
import axios from "axios";


function Register() {
    const[inputs, setInputs] =useState({});
   
    function handleChange(event){
        const name = event.target.name;
        const value = event.target.value
        setInputs(values => ({...values, [name]: value}));
    }

    function handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:80/api/user/save', inputs);
        console.log(inputs);
    }

    return (
        <div>
            Register
            <form onSubmit={handleSubmit}>
                <label >Name:</label><br></br>
                <input placeholder="input full name" name="name" onChange={handleChange} required /><br></br>
                <label >Email:</label><br></br>
                <input placeholder="input email"  name="email" onChange={handleChange} required /><br></br>
                <label >Phone Number:</label><br></br>
                <input placeholder="input your phone number" name="phone" onChange={handleChange} required /><br></br>
               {/*  <label >password:</label><br></br>
                <input placeholder="input password" value={password} onChange={e => setPassword(e.target.value)} required /><br></br> */}
                <button type="submit">Submit</button>
            </form>

        </div>
    );
}

export { Register }