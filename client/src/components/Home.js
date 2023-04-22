import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  // debugger
  const [listOfposts, setListOfPosts] = useState([]);
  const history = useNavigate();

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfposts.map((val, key) => {
        return (
          <div className="post" key={key} onClick={()=> {
            history(`/post/${val.id}`)
          }}>
            <div className="title">{val.title}</div>
            <div className="body">{val.postText}</div>
            <div className="footer">{val.userName}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
