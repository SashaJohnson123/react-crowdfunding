import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/Login";
import About from "./pages/About";
import Subscribe from "./pages/Subscribe";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Router>
      <div>
        <Nav image={require("./Pics/13.png")} />

        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/Home">
            <Home />
          </Route>

          <Route path="/About">
            <About />
          </Route>
          <Route path="/Subscribe">
            <Subscribe />
          </Route>
          <Route path="/Contact">
            <Contact />
          </Route>
          <Route path="/CreateProject">
            <CreateProject />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
