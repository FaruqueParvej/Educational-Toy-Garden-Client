import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(AuthContext);
  console.log(user?.displayName);
  console.log(user?.photoURL);
  const handleLogOut = () => {
    logout();
  };

  // console.log(user?.displayName);
  const [showName, setShowName] = useState(false);
  const handleMouseOver = () => {
    setShowName(true);
  };

  const handleMouseOut = () => {
    setShowName(false);
  };

  const navItems = (
    <>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <Link to="/alltoys" className="justify-between">
          All Toys
        </Link>
      </li>

      {user && (
        <li>
          <Link to="addtoys">Add a Toy</Link>
        </li>
      )}
      {user && (
        <li>
          <Link to="mytoys">My Toys</Link>
        </li>
      )}
      <li>
        <Link to="blogs">Blogs</Link>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
            <Link to="login" className="btn">
              Login
            </Link>
            <Link to="register" className="btn">
              Register
            </Link>
          </ul>
        </div>
        <label tabIndex={0}>
          <div className="w-20 rounded-full">
            <img
              className="w-full"
              src={
                "https://cdn.dribbble.com/users/1700393/screenshots/14456757/media/13060d4fcb0014c716b78743d405c04d.png?compress=1&resize=400x300"
              }
            />
          </div>
        </label>
        <div>
          <a className="btn btn-ghost normal-case text-xl">
            Educational Toy Garden
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end lg:flex">
        <div className="dropdown dropdown-end">
          {user && (
            <>
              <label tabIndex={0} className="flex justify-between">
                <div>{showName && <p>{user?.displayName}</p>}</div>
                <div className="w-10 rounded-full  avatar">
                  <img
                    onMouseOver={handleMouseOver}
                    onMouseOut={handleMouseOut}
                    className="rounded-full"
                    src={user?.photoURL}
                  />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">Profile</a>
                </li>
                <li>
                  <button onClick={handleLogOut} className="btn text-white">
                    Logout
                  </button>
                </li>
              </ul>
            </>
          )}
        </div>
        {!user && (
          <>
            <Link to="login" className="btn mx-2">
              Login
            </Link>
            <Link to="register" className="btn">
              Register
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
