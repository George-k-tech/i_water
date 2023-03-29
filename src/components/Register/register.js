
 function Register() {
    
    return (
        <div>
           Register
            <div className="register">
                    <label >Name</label><br></br>
                    <input placeholder="input full name" /><br></br>
                    <label >Email:</label><br></br>
                    <input  placeholder="input email"/><br></br>
                    <label >Phone Number:</label><br></br>
                    <input  placeholder="input your phone number"/><br></br>
                    <label >password:</label><br></br>
                    <input  placeholder="input password"/><br></br>
                    <label >Confirm password:</label><br></br>
                    <input placeholder="confirm password"/><br></br>
                    <button type="submit">Submit</button>
            </div>
        </div>
    );
}

export  {Register}