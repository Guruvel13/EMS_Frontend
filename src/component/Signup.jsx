import { useState } from "react";
import axios from "axios";

const Signup = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("");
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [roleName, setRole] = useState("")
    async function addEmployee(event) {
        event.preventDefault();
        try {
            const req = await axios.get("http://localhost:3001/api/auth/regsister", { name, email, userName, password, roleName })
            console.log(req);
            alert("Signup Successful")

        } catch (e) {
            console.log("Error in Signup", e)
            alert("Error in Signup")
        }
    }
    return (
        <div>
            <h2>Signup</h2>
            <div>
                <form onSubmit={addEmployee}>
                    <label htmlFor="Emp Name">Emp Name</label>
                    <input
                        id="Name"
                        name="Name"
                        value={name}
                        type="text"
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br /> <br />
                    <label htmlFor="Email">Email</label>
                    <input
                        id="email"
                        name="email"
                        value={email}
                        type="text"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br /> <br />
                    <label htmlFor="userName">User Name</label>
                    <input
                        id="userName"
                        name="userName"
                        value={userName}
                        type="text"
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <br /> <br />
                    <label htmlFor="Password">Password</label>
                    <input
                        id="pasword"
                        name="password"
                        value={password}
                        type="password"
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <br /> <br />
                    <label htmlFor="RoleName">Role Name</label>
                    <input
                        id="RoleName"
                        name="RoleName"
                        value={roleName}
                        type="text"
                        onChange={(e) => setRole(e.target.value)}
                    />
                    <br />
                    <br />
                    <button type="submit">Signup</button>
                </form>
            </div>
        </div>
    )
}
export default Signup;