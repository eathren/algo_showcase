import logo from "./logo.svg";
import "./App.css";
import "./styles/main.scss";
import { Helmet } from "react-helmet";
// local components
import Chart from "./components/chart";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Algo Showcase</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <header className="App-header">
        <Chart />
      </header>
    </div>
  );
}

export default App;
