import "./App.css";

// function Greeting(props) {
//   return (
//     <h1>
//       Hello {props.name}. I am {props.age} years old
//     </h1>
//   );
// }
function Greeting({ name, age }) {
  return (
    <h1>
      Hello {name}. I am {age} years old
    </h1>
  );
}

function App() {
  return (
    <div className="App">
      <Greeting name="John" age="45" />
      <Greeting name="Marsh" age="30" />
    </div>
  );
}

export default App;
