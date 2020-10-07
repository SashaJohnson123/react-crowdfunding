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
import CreateProject from "./pages/CreateProject";
import Error404 from "./components/Error404/Error404";
import Socials from "./components/Socials/Socials";

export default function App() {
  return (
    <div>
      <Router>
        <div>
          <Nav image={require("./Pics/13.png")} />

          <Switch>
            <Route exact path="/project/:id">
              <ProjectPage />
            </Route>

            <Route path="/project/edit/:id">
              <Contact /> // Put new ProjectEditPage
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
            <Route>
              <Route path="*" exact={true} component={Error404} />
            </Route>
          </Switch>
        </div>
      </Router>
      <Socials />
    </div>
  );
}
