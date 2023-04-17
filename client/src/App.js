import "./App.css";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreatePost from "./components/CreatePost";


function App() {
  return (
    <div className="App">
      <Router>
        <Link to="createpost" >Create A Post</Link>
        <Link to="/" >Home page</Link>
        <Routes> 
          <Route path="/" element={<Home />} />
          <Route path="/createpost" element={<CreatePost />} />
        </Routes>
      </Router>
    </div>
  );
 }

export default App;
