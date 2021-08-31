import "./App.css";


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <img src={process.env.PUBLIC_URL + 'images/logos/cherry-blossom-tree.svg'} alt="logo" />
        <p>Writing Tree</p>
      </header>
    </div>
  );
}

export default App;
