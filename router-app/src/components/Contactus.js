import { Field, Formik } from 'formik'
import React from 'react'
import { Container, Form } from "react-bootstrap"


export default function () {
    return (
        <Container>
            <Formik initialValues={{ name: '', email: '', message: '' }}>
                {<Form>
                    <div>
                        <Field type="text" name='name' placeholder="Please enter the name"></Field>
                    </div>
                    <div>
                        <Field type="text" name='name' placeholder="Please enter the name"></Field>
                    </div>
                    <div>
                        <Field type="text" name='name' placeholder="Please enter the name"></Field>
                    </div>
                    <button type="submit">Submit</button>



                </Form>
                }
            </Formik>

        </Container>

    )
}
