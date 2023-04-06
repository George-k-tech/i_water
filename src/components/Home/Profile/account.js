import { UserAuth } from "../../Context/AuthContext";
import { useNavigate } from "react-router-dom";
import './profile.css'


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
        <div className="profile">
            <div className="account">
                <div className="profile-img">
                    <img className="avatar" src="https://imgv3.fotor.com/images/blog-richtext-image/10-profile-picture-ideas-to-make-you-stand-out.jpg">
                    </img>

                </div>
            <p className="user-email">user email:<span className="email">{user && user.email}</span> </p>
            <button  className="user-btn"onClick={handleLogout}>Logout</button>
        </div>
            
        </div>
    );
}

export { Account }