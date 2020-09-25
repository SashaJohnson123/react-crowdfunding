import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import LoginPage from "./pages/Login";

export default function App() {
  return (
    <Router>
      <div>
        <Nav image={require("./Pics/13.png")} />

        <Switch>
          <Route path="/project/:id">
            <ProjectPage />
          </Route>
          <Route path="login">
            <LoginPage />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
