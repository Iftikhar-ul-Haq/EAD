import logo from './logo.svg';
import './App.css';
import { Container, Form, Col, Button } from 'react-bootstrap';
import { Formik, Field } from 'formik';
import 'bootstrap/dist/css/bootstrap.min.css';
import Customfields from "./components/Customfield"

function App() {


  return (
    <Container className="text-center">
      <h1>Search Flights</h1>
      <Formik initialValues={{ to: '', from: '', departure: '', return: '', adults: '', children: '' }} onSubmit={values => console.log(JSON.stringify(values))}>
        {(values) => (
          <Form className="border my-3">
            <Form.Row >
              <Form.Group as={Col} >
                <Form.Label>From</Form.Label>
                <div> <Field type="text" name='from'></Field></div>

              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>To</Form.Label>
                <div> <Field type="text" name="to"></Field></div>

              </Form.Group>
            </Form.Row>
            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>Departure</Form.Label>
                <div> <Field type="text" name="departure"></Field></div>

              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Return</Form.Label>
                <div> <Field type="text" name="return"></Field></div>

              </Form.Group>
            </Form.Row>

            <Form.Row>
              <Form.Group as={Col} >
                <Form.Label>Adults</Form.Label>
                <div> <Field name="adults" component={Customfields}></Field></div>

              </Form.Group>

              <Form.Group as={Col} >
                <Form.Label>Children</Form.Label>
                <div> <Field name="children" component={Customfields}></Field></div>

              </Form.Group>
            </Form.Row>
            <Button type="submit" style={{ width: "60%" }} className="my-3"> SEARCH</Button>

            <div>{JSON.stringify(values)}</div>



          </Form>
        )}







      </Formik>
    </Container >

  );
}

export default App;
