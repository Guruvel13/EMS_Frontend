import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./component/Navbar";
import Loginform from "./component/Login";
import Signupform from "./component/Signup";
import Empdetails from "./component/Empdetails";
import Addemp from "./component/Empdetails";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/login" element={<Loginform />} />
        <Route path="/signup" element={<Signupform />} />
        <Route path= "/Employee" element={<Empdetails/>}/>
        <Route path= "/Addemp" element={<Addemp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
