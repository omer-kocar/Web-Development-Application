import { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../helpers/AuthContenxt";

function Login() {
  const [userName, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthState } = useContext(AuthContext);
  
  
  const history = useNavigate();

  const login = () => {
    const data = { userName: userName, password: password };
    axios.post("http://localhost:3001/auth/login", data).then((response) => {
      if (response.data.error) {
        alert(response.data.error);
      } else {
        console.log("welcome");
        localStorage.setItem("accessToken", response.data);
        setAuthState(true);
        history("/");
      }
    });
  };

  return (
    <div className="login-container">
      <label>user name </label>
      <input
        className="text"
        type="text"
        onChange={(e) => {
          setUsername(e.target.value);
        }}
      />
      <label>password </label>
      <input
        className="password"
        type="password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />
      <button onClick={login}>Login</button>
    </div>
  );
}

export default Login;
