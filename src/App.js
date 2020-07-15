import React from "react";
import "./styles.css";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <h1>NAIMITSU</h1>
        <h2>privacy matters</h2>

        <Switch>
          <Route path="/discord">
            <Discord />
          </Route>
          <Route path="/">
            <App />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function Discord() {
  return (
    <div className="App">
      <Link to="/">
        <h1>NAIMITSU</h1>
      </Link>

      <br />
      <br />

      <iframe
        title="discord-widget"
        src="https://discord.com/widget?id=733030444962021417&theme=dark"
        width="350"
        height="500"
        allowtransparency="true"
        frameborder="0"
      />
    </div>
  );
}
