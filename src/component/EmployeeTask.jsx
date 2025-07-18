import React from "react";
import { useNavigate } from "react-router-dom";

const EmployeeTaskActions = ({ selectedEmployee, onClose }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  const handleAddTask = () => {
    if (!isLoggedIn) {
      alert("Please login to add tasks");
      navigate("/login");
      return;
    }
    navigate(`/employee/${selectedEmployee.empId}/add-task`);
  };

  const handleListTasks = () => {
    navigate(`/employee/${selectedEmployee.empId}/tasks`);
  };

  return (
    <div className="modal-backdrop d-flex align-items-center justify-content-center"
      style={{
        background: "rgba(0,0,0,0.5)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 1000
      }}
    >
      <div className="bg-white border rounded p-4 shadow" style={{ minWidth: "300px" }}>
        <h5 className="mb-3">For {selectedEmployee.name}</h5>
        {isLoggedIn && (
          <button className="btn btn-primary w-100 mb-2" onClick={handleAddTask}>
            Add Task
          </button>
        )}
        <button className="btn btn-secondary w-100 mb-2" onClick={handleListTasks}>
          List Tasks
        </button>
        <button className="btn btn-danger w-100" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  );
};

export default EmployeeTaskActions;