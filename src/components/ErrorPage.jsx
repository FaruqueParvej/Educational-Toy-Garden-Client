
import { Link } from 'react-router-dom';

const ErrorPage = () => {
    return (
        <div className='md:flex md:items-center'>
            <div>
           <img src={"https://cdn.dribbble.com/users/1175431/screenshots/6188233/404-error-dribbble-800x600.gif"} alt="" /> 
            </div>
           <div className="text-3xl"><p >Go Back
            <span><Link to="/" className='btn btn-link text-3xl'>Home</Link></span> </p>
           </div>
        </div>
    );
};

export default ErrorPage;