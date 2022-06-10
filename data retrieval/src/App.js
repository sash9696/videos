import React from "react";
import PostRequest from "./PostRequest";
import PostRequestHooks from "./PostRequestHooks";

function App() {
  return (
    <div>
      <h3>React HTTP POST Requests with Fetch</h3>
      <PostRequest />
      <PostRequestHooks />
    </div>
  );
}

export default App;
