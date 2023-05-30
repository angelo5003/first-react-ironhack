import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Bazinga from "./Bazinga";
import SecondParagraph from "./SecondParagraph";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <img src="/images/crazy-monkey.jpeg" style={{ height: 500 }} />
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello Vite + React!</p>
        <p>
          <button type="button" onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <Bazinga />
        <SecondParagraph />
      </header>
    </div>
  );
}

export default App;
