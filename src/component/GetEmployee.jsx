import { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import EmployeeTaskActions from "./EmployeeTaskActions";
import { useNavigate } from "react-router-dom";

const GetEmployee = () => {
  const [employees, setEmployees] = useState([]);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const response = await axios.get("http://localhost:10000/employee");
        setEmployees(response.data);
      } catch (error) {
        console.error("Error fetching employees", error);
        alert("Could not fetch employee list.");
      }
    };

    fetchEmployees();
  }, []);

  const handleEdit = async (empId) => {
    const name = prompt("Enter updated name:");
    if (!name) return;

    const email = prompt("Enter updated email:");
    if (!email) return;

    try {
      if (!localStorage.getItem("isLoggedIn")) {
        alert("Please login to edit employees");
        navigate("/login");
        return;
      }

      await axios.put(
        `http://localhost:10000/employee/${empId}`,
        { name, email }
      );

      setEmployees((prev) =>
        prev.map((emp) =>
          emp.empId === empId ? { ...emp, name, email } : emp
        )
      );
      alert("Employee updated.");
    } catch (error) {
      console.error("Update error", error);
      alert("Failed to update employee.");
    }
  };

  const handleDelete = async (empId) => {
    const confirmed = window.confirm("Are you sure you want to delete?");
    if (!confirmed) return;

    try {
      if (!localStorage.getItem("isLoggedIn")) {
        alert("Please login to delete employees");
        navigate("/login");
        return;
      }

      await axios.delete(`http://localhost:10000/employee/${empId}`);
      setEmployees(employees.filter((emp) => emp.empId !== empId));
      alert("Employee deleted.");
    } catch (error) {
      console.error("Delete error", error);
      alert("Failed to delete employee.");
    }
  };

  return (
    <div
      className="d-flex flex-column justify-content-center align-items-center vh-100"
      style={{
        background: "linear-gradient(90deg, #74c0fc, #b197fc)",
        padding: "30px",
      }}
    >
      <div className="bg-white p-4 rounded shadow w-75">
        <h2 className="mb-4 text-center text-primary">Employee List</h2>
        <table className="table table-bordered table-striped">
          <thead className="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length === 0 ? (
              <tr>
                <td colSpan={3} className="text-center">
                  No employees found.
                </td>
              </tr>
            ) : (
              employees.map((employee) => (
                <tr key={employee.empId}>
                  <td>{employee.empId}</td>
                  <td
                    style={{ color: "#0d6efd", cursor: "pointer" }}
                    onClick={() => setSelectedEmployee(employee)}
                  >
                    {employee.name}
                  </td>
                  <td>
                    <button
                      className="btn btn-sm btn-warning me-2"
                      onClick={() => handleEdit(employee.empId)}
                    >
                      Edit
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleDelete(employee.empId)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {selectedEmployee && (
        <EmployeeTaskActions
          selectedEmployee={selectedEmployee}
          onClose={() => setSelectedEmployee(null)}
        />
      )}
    </div>
  );
};

export default GetEmployee;