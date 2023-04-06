import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";


function Account() {
    const { user, logout } = UserAuth();
    const navigate = useNavigate();
    
    const handleLogout = async () => {
        try {
            await logout();
            navigate('/')
        } catch (e) {
            console.log(e.message)
        }
    }
    return (
        <div>
            <p>user email: {user && user.email}</p>
            <button onClick={handleLogout}>Logout</button>
        </div>
    );
}

export { Account }