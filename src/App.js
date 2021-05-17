import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
// import Potfolio from "./pages/Portfolio";
// import Contact from "./pages/Contact";
// import Nav from "./components/Nav";

function App() {
  return (
    <Router>
      <div>
          {/* <Nav /> */}
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/home" component={Home} />
            {/* <Route exact path="/potfolio" component={Potfolio} />
            <Route exact path="/contact" component={Contact} />
            // <Route component={Home} /> */}
          </Switch>
      </div>
    </Router>
  );
}

export default App;
