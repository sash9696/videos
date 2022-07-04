import React from "react";
import "./Users.css";

class Users extends React.Component {
  //constructor
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      isLoaded: false,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((json) =>
        this.setState({
          items: json,
          DataIsLoaded: true,
        })
      );
  }

  render() {
    const { DataIsLoaded, items } = this.state;

    if (!DataIsLoaded)
      return (
        <div>
          <h1>Please wait some time ...</h1>
        </div>
      );

    return (
      <div className="app">
        <h1>Fetch data from an api in react</h1>
        {items.map((item) => (
          <div key={item.id} className="col-6">
            <div className="card">
              <div className="container">
                <h4>
                  <b>User Name: {item.username}</b>
                </h4>
                <p>Full Name: {item.name} </p>
                <p>User_email: {item.email}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default Users;
