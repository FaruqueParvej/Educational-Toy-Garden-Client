import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import Swal from 'sweetalert2'


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location =useLocation()
    
if (loading){
   return <button className="btn loading">loading</button>
}

if(user){
    return children;
}
else{
    Swal.fire({
        title: 'error!',
        text: 'Please Log in to see the details',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
}

return <Navigate to="/login" state={{from: location}} replace>
    
</Navigate>
};

export default PrivateRoute;