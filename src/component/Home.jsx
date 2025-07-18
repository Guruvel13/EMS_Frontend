import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const Home = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100 text-white"
      style={{
        background: "linear-gradient(90deg, #74c0fc, #b197fc)",
        flexDirection: "column",
      }}>
      <h1 className="display-4 mb-3">Employee Management System</h1>
      <p className="lead">Welcome! Manage your employees efficiently.</p>
      <div className="mt-4">
        <Link to="/Employee" className="btn btn-light me-2">View Employees</Link>
        <Link to="/Addemp" className="btn btn-outline-light">Add Employee</Link>
      </div>
    </div>
  );
};

export default Home;