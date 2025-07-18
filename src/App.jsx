import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Home from "./component/Home";
import Empdetails from "./component/Empdetails";
import Addemp from "./component/Addemp";
import Login from "./component/Login";
import Signup from "./component/Signup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/employee" element={<Empdetails />} />
        <Route path="/addemp" element={<Addemp />} />
      </Routes>
    </Router>
  );
}

export default App;