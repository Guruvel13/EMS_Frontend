import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Empdetails = () => {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user is logged in
    const isLoggedIn = localStorage.getItem("isLoggedIn");
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }

    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:8080/employee");
        setEmployees(response.data);
      } catch (err) {
        console.error("Error fetching employees", err);
      }
    };
    fetchEmployees();
  }, [navigate]);

  const handleDelete = async (empId) => {
    try {
      await axios.delete(`http://localhost:8080/employee/${empId}`);
      setEmployees(prev => prev.filter(emp => emp.empId !== empId));
      alert("Employee deleted successfully");
    } catch (err) {
      console.error("Error deleting employee", err);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Employee List</h2>
      <table className="table table-bordered">
        <thead className="table-dark">
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {employees.map(emp => (
            <tr key={emp.empId}>
              <td>{emp.empId}</td>
              <td>{emp.name}</td>
              <td>{emp.email}</td>
              <td>
                <button
                  onClick={() => handleDelete(emp.empId)}
                  className="btn btn-danger btn-sm me-2">
                  Delete
                </button>
                <button className="btn btn-primary btn-sm">Edit</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Empdetails;