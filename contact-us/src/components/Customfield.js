import React from 'react'
import { Button } from "react-bootstrap"

export default function ({
    field,
    form: { touched, errors },
    ...props
}) {

    function add() {
        field.value = (Number(field.value) + 1).toString();
        alert(field.value)

    }
    function sub() {

    }

    return (
        <div>
            <Button onClick={sub} className="mx-3"> -</Button >
            <input type="text" {...field} {...props}></input>
            <Button onClick={add} className="mx-3" >+</Button>
        </div>
    )
}
