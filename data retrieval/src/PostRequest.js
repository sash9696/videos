import React from "react";

class PostRequest extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      postId: null,
    };
  }

  componentDidMount() {
    //simple POST request with a JSON body using fetch method
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        title: "React POST Request Example",
      }),
    };

    fetch("https://reqres.in/api/posts", requestOptions)
      .then((response) => response.json())
      .then((data) =>
        this.setState({
          postId: data.id,
        })
      );
  }

  render() {
    const { postId } = this.state;
    return (
      <div>
        <h5>Simple POST Request</h5>
        <div>Returned Id: {postId}</div>
      </div>
    );
  }
}
export default PostRequest;
