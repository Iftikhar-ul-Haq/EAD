import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import Options from "./Options.js"
import MainPage from "./components/Main_page"
import { Form, Col, Button, Container, Row } from "react-bootstrap"
import { BrowserRouter, Switch, Route, Link } from "react-router-dom"
import { createContext, useState } from "react"
import Question from "./components/Question"
import Choice from "./components/Choice"


function App() {

  return (
    <Container>
      <h1 className="text-center">Create a Quiz</h1>


      <Choice />

    </Container >
    // <BrowserRouter>
    //   <Switch>
    //    <Route exact path="/">
    //         <Link to="/" >Options</Link>
    //         <h1>i am home page</h1>
    //     </Route>
    //     <Route path="/Options">
    //      <Options />
    //     </Route>
    //   </Switch>
    // </BrowserRouter>
  );
}

export default App;
