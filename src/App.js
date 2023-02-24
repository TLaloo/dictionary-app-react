import logo from "./logo.png";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <h1>Dictionary</h1>
        <main>
          <Dictionary defaultKeyword="sunset" />
        </main>
        <footer className="App-footer">
          <small>
            Coded by Tricia Laloo,{" "}
            <a href="https://github.com/TLaloo/dictionary-app-react">
              open-sourced on GitHub
            </a>{" "}
            and
            <a href="https://peppy-mousse-8b0bab.netlify.app/">
              {" "}
              hosted on Netlify
            </a>
          </small>
        </footer>
      </div>
    </div>
  );
}
