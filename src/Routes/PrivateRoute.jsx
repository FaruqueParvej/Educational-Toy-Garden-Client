import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";



const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation()
    
if (loading){
   return <>hi</>
}

if(user){
    return children;
}
else{
    alert('You have to log in first')
}

return <Navigate to="/login" state={{from: location}} replace>
    
</Navigate>
};

export default PrivateRoute;