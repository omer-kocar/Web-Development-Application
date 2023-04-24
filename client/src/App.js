import "./App.css";
import Home from "./components/Home";
import { Route, Routes, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Register from "./components/Register";
import Post from "./components/Post";
import { AuthContext } from "./helpers/AuthContenxt";
import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [authState, setAuthState] = useState({
    username: "",
    id: 0,
    status:false,
  });

  useEffect(() => {
    axios
      .get("http://localhost:3001/auth/authval", {
        headers: {
          accessToken: localStorage.getItem("accessToken"),
        },
      })
      .then((response) => {
        if (response.data.error) {
          setAuthState({...authState, status: false});
        } else {
          setAuthState({
            username: response.data.userName,
            id: response.data.id,
            status:true
          });
        }
      });
  }, []);

  const logout= () => {
    localStorage.removeItem("accessToken");
    setAuthState({username: "", id: 0 , status: false})
  }

  return (
    <div className="App">
      <AuthContext.Provider value={{ authState, setAuthState }}>
        <div className="navbar">
          <Link to="/">Home Page</Link>
          <Link to="/createpost">Create A Post</Link>
          {!authState.status ? (
            <>
              <Link to="/login">Login</Link>
              <Link to="/register">Register</Link>
            </>
          ) : (
            <button onClick={logout}>Logout </button>
          )}
          <h1>{authState.username}</h1>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
