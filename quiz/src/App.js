import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mycard from "./components/Mycard"
import { Container } from "react-bootstrap"
import questions from "./questions.json"
import React, { useContext, useState } from "react"



export const dataProvider = React.createContext();
export const currIndexProvider = React.createContext();
const resultArr = [];

function App() {
  const [currQues, setCurrQues] = useState(0)


  return (

    <Container>

      <dataProvider.Provider value={questions}>
        <currIndexProvider.Provider value={[currQues, setCurrQues, resultArr]}>

          <Mycard />

        </currIndexProvider.Provider>

        
       

      </dataProvider.Provider>



      
    </Container>



  );
}

export default App;
