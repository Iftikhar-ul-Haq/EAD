import logo from './logo.svg';
import './App.css';
import 'semantic-ui-css/semantic.min.css'
import ShoppingCart from "./components/ShoppingCart"
import Products from "./components/Products"
import { Button } from 'react-bootstrap';
import React, { useReducer } from "react";
import { Container } from "semantic-ui-react"
import { Formik } from 'formik';

// const ACTIONS = { INC: "inc", DEC: "dec" }


// function reducer(state, action) {
//   switch (action.type) {
//     case ACTIONS.INC:

//       return { val: state.val + 1 }

//     case ACTIONS.DEC:
//       return { val: state.val - 1 }

//     default:
//       console.log("Not working: " + action.type)

//   }

// }


function App() {


  // const [state, dispatch] = useReducer(reducer, { val: 0 })


  return (
    <Container>
      <Formik>
        <form class="ui form">

          <div class="field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div class="field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
          <div class="field">
            <div class="ui checkbox">
              <input type="checkbox" tabindex="0" class="hidden" />
              <label>I agree to the Terms and Conditions</label>
            </div>
          </div>
          <button class="ui button" type="submit">Submit</button>
        </form>
      </Formik>
    </Container>









  );
}

export default App;
