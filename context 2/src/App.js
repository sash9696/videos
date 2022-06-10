import "./App.css";

function Child({ name }) {
  return <h1>Welcome to Relevel {name}</h1>;
}

function Parent({ name }) {
  return <Child name={name} />;
}
function Grandparent({ name }) {
  return <Parent name={name} />;
}

function App() {
  return (
    <div className="App">
      <h1>Context Api</h1>
      <Grandparent name="John" />
    </div>
  );
}

export default App;
