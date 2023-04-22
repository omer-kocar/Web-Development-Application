import "./App.css";
import Home from "./components/Home";
import {Route, Routes, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";
import Login from "./components/Login";
import Register from "./components/Register";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
  
        <div className="navbar">
          <Link to="/createpost">Create A Post</Link>
          <Link to="/">Home page</Link>
          <Link to="/login">Login</Link>
          <Link to="/register">Register</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/post/:id" element={<Post />} />
        </Routes>
     
    </div>
  );
}

export default App;
