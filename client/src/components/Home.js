import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";

function Home() {
  const [listOfposts, setListOfPosts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3001/posts").then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfposts.map((val, key) => {
        return (
          <div className="post" key={key}>
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
