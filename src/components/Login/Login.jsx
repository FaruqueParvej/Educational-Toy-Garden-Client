import { GoogleAuthProvider } from "firebase/auth";
import { useContext } from "react";
import { FaGoogle } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Login = () => {
  const { signIn, googleLogIn } = useContext(AuthContext);

  const googleProvider = new GoogleAuthProvider();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    googleLogIn(googleProvider)
      .then((result) => {
        const loggedUser = result.user;
        console.log(loggedUser);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorMessage = error.message;

        console.log(errorMessage);
        // setErrorMessage(errorMessage);
      });
  };

  const handleSignIn = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    // console.log(email, password);
    signIn(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorMessage);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <img
            src={"https://theuniqueacademy.co.in/assets/images/test.png"}
            alt=""
          />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div>
            <form onSubmit={handleSignIn}>
              <div className="card-body">
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
                  <div className="mt-2 flex p-2">
                    <h2>Don't have an account?</h2>
                    <Link
                      to="/register"
                      className="text-cyan-700 link link-hover"
                    >
                      Register
                    </Link>
                  </div>
                </div>
                <div className="form-control mt-6">
                  <input
                    className="btn btn-primary"
                    name="login"
                    type="submit"
                    value="login"
                  />
                </div>
              </div>
            </form>
          </div>
          <div className="mx-auto mb-4">
            <button
              onClick={handleGoogleLogIn}
              className="btn btn-outline flex btn-success 
            "
            >
              <span className="px-2">
                <FaGoogle />
              </span>
              Continue with Google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
