import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
    
      <li>
        <Link to="/">Home</Link>
      </li>
      <li tabIndex={0}>
        <a className="justify-between">
          All Toys
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path d="M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z" />
          </svg>
        </a>
        <ul className="p-2">
          <li>
            <a>Submenu 1</a>
          </li>
          <li>
            <a>Submenu 2</a>
          </li>
        </ul>
      </li>
      <li>
        <Link to='blogs'>Blogs</Link>
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
          >{navItems}
           <Link to="login" className="btn">
          Login
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
        <ul className="menu menu-horizontal px-1">
          {navItems}
        </ul>
      </div>
      <div className="navbar-end hidden lg:flex">
        <Link to="login" className="btn">
          Login
        </Link>
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src={
                  "https://wpjournalist.nl/wp-content/uploads/2021/09/myAvatar.png"
                }
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
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
