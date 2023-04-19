import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./post.css";
import "../App.css";

function Post() {
  let { id } = useParams();
  const [postObject, setPostObject] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");

  useEffect(() => {
    axios.get(`http://localhost:3001/posts/byId/${id}`).then((response) => {
      setPostObject(response.data);
    });
    axios.get(`http://localhost:3001/comments/${id}`).then((response) => {
      setComments(response.data);
    });
  }, []);

  const addComments = () => {
    axios.post("http://localhost:3001/comments", {
      commentBody: newComment,
      PostId: id,
    }).then(()=> {
      const commentToAdd = {commentBody : newComment}
      setComments([...comments,commentToAdd ])
      setNewComment("")
    });
  };

  return (
    <div className="postPage">
      <div className="leftSide" id="individual">
        <div className="title">{postObject.title}</div>
        <div className="body">{postObject.postText}</div>
        <div className="footer">{postObject.userName}</div>
      </div>
      <div className="rightSide">
        <div className="addCommentContainer">
          <input
            type="text"
            placeholder="Comment..."
            autoComplete="off"
            value={newComment}
            onChange={(e)=> { setNewComment(e.target.value)}}
          />
          <button onClick={addComments}>Add comments</button>
        </div>
        <div className="listOfComments">
          {comments.map((comment, key) => {
            return (
              <div key={key} className="comment">
                {comment.commentBody}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Post;
