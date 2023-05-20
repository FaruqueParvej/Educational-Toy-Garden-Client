import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";

const Register = () => {
    const {createUser,UpdateUser}=useContext(AuthContext);
const handleSignUp=(event)=>{
    event.preventDefault();
    const name=event.target.name.value;
    const email=event.target.email.value;
    const password = event.target.password.value;
    const photo = event.target.photoUrl.value;
    console.log(name,email,password,photo);
    
    createUser(email,password)
    .then((result) => {
      if(result.user){
        UpdateUser(photo,name);
        // console.log(photo,name);
        event.target.reset()

      }      
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    }

    return (
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Sign up now!</h1>
              <img
                src={"https://theuniqueacademy.co.in/assets/images/test.png"}
                alt=""
              />
            </div>
            <form onSubmit={handleSignUp}>
              <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                <div className="card-body">
                  <p>
                    Do you have account?
                    <Link to="/login" className="text-blue-600">
                      Login
                    </Link>
                  </p>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Name</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Email</span>
                    </label>
                    <input
                      type="text"
                      name="email"
                      placeholder="email"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Password</span>
                    </label>
                    <input
                      type="text"
                      name="password"
                      placeholder="password"
                      className="input input-bordered"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">Photo Url</span>
                    </label>
                    <input
                      type="text"
                      name="photoUrl"
                      placeholder="photo url"
                      className="input input-bordered"
                    />
                    <label className="label"></label>
                  </div>
                  <div className="form-control mt-6">
                    <input className="btn btn-primary" name="login" type="submit" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      );
}

 

export default Register;
