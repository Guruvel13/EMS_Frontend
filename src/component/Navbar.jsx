import { Link } from "react-router-dom";

const Navbar = () => {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
      <div className="container-fluid d-flex align-items-center">
        <Link to="/" className="navbar-brand text-white">EMS</Link>
        <div className="navbar-nav ms-auto">
          <Link to="/employee" className="nav-link">Employees</Link>
          {isLoggedIn && <Link to="/addemp" className="nav-link">Add Employee</Link>}
          {isLoggedIn ? (
            <button 
              className="nav-link btn btn-link" 
              onClick={() => {
                localStorage.removeItem("isLoggedIn");
                window.location.href = "/login";
              }}
            >
              Logout
            </button>
          ) : (
            <Link to="/login" className="nav-link">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;