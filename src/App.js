import logo from "./logo.svg";
import "./styles/main.scss";
import { Helmet } from "react-helmet";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// local components
import Chart from "./pages/Chart";

function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>SortPath</title>
        <link rel="canonical" href="http://mysite.com/example" />
      </Helmet>
      <div className="app-body">
        <Router>
          <Switch>
            <Route exact path="/">
              <Chart />
            </Route>
            {/* <Route path="/">
            <Home />
          </Route> */}
          </Switch>
        </Router>
      </div>
    </div>
  );
}

export default App;
