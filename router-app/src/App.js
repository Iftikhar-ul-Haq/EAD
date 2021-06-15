import logo from './logo.svg';
import './App.css';
import React from "react"

import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Nav, Navbar } from 'react-bootstrap';

import mockData from "./components/MOCK_DATA.json"
import { useEffect, useState } from 'react';
import Body from './components/Body'
import Cart from './components/Cart'
import { Switch, Route } from "react-router-dom"

import { BrowserRouter, Link } from 'react-router-dom';
import Contactus from "./components/Contactus"


export const contextdata = React.createContext();



function App() {
  const [addToCart, setAddToCart] = useState([[]]);

  function addItem(id, product, price, quantity) {
    let temp = [id, product, price, quantity]
    setAddToCart((addToCart) => [...addToCart, temp])



  }

  const [data, setData] = useState([])

  useEffect(() => {
    const tempdata = mockData.slice(0, 12)

    setData(tempdata);



  }, [])


  return (
    <BrowserRouter>
      <Container>

        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#home">Shoping Website</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Link to="/" style={{ fontSize: "20px", textDecoration: "none", padding: "5px" }}>Body</Link>
              <Link to="/components/Cart" style={{ fontSize: "20px", textDecoration: "none", padding: "5px" }}>Cart</Link>
              <Link to="/components/Contactus" style={{ fontSize: "20px", textDecoration: "none", padding: "5px" }}>Contact Us</Link>
            </Nav>

          </Navbar.Collapse>
        </Navbar>

        <Switch>



          <Route path="/">
            <div className="row">
              <contextdata.Provider value={addItem}>
                <Body data={data} />
              </contextdata.Provider>

            </div>
          </Route>
          <Route path="/components/Cart">
            <Cart add={addToCart} />
          </Route>

          <Route path="/components/Contactus">
            <Contactus />
          </Route>

        </Switch>

      </Container>
    </BrowserRouter>


  );
}

export default App;
