import React from "react";
import { useState } from "react";
import { useEffect } from "react";

function PostRequestHooks() {
  const [postId, setPostId] = useState(null);

  useEffect(() => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "React POST Request Example",
      }),
    };

    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) => setPostId(data.id))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div>
      <h5>POST Request with React Hooks</h5>
      <div>Returned Id: {postId}</div>
    </div>
  );
}

export default PostRequestHooks;
