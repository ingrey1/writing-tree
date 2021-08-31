import { Header } from "semantic-ui-react";
import "./App.css";
import LogoStack from "../components/LogoStack/LogoStack";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <LogoStack />
        <Header as="h1">Writing Tree</Header>
      </header>
    </div>
  );
}

export default App;
