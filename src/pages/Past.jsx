import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Post = () => {
  const params = useParams();
  const [post, setPost] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${params.id}`)
      .then((response) => response.json())
      .then((json) => setPost(json));
  }, [params.id]);

  function goToHome() {
    navigate("/", { viewTransition: true });
  }

  function goToPosts() {
    navigate("/posts", { viewTransition: true });
  }

  return (
    <div>
      <button onClick={goToHome}>go to home</button>
      <button onClick={goToPosts}>go to posts</button>
      <p>{post.title ? post.title : "Loading..."}</p>
    </div>
  );
};

export default Post;
