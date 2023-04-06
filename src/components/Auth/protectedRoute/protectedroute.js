import { Navigate } from "react-router-dom";
import { UserAuth } from "../../Context/AuthContext";


function ProtectedRoute(){
const {user} = UserAuth();

if(!user){
    return(
        <Navigate to = '/'/>
    );
}

}
export {ProtectedRoute};