import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./post.css"

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
  }, []);

  return (
    <div className="postPage">
      <div className="leftSide" id="individual">
        <div className="title">
            {postObject.title}
        </div>
        <div className="body2">
            {postObject.postText}
        </div>
        <div className="footer">
            {postObject.userName}
        </div>
      </div>
      <div className="rightSide">Comment Section</div>
    </div>
  );
}

export default Post;
