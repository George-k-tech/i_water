const PasswordReset = () =>{

    const [email,setEmail] = useState('');

    return(
    <div>
        <form>
            <h1>reset password</h1>
            <input type="email" placeholder="input email" onChange={e => setEmail(e.target.value)} value={email}></input>
        </form>
    </div>
    );
}

export {PasswordReset}