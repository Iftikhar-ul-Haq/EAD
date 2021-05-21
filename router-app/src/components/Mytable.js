import React, { useEffect, useState } from "react"
import { Button } from "react-bootstrap"

export default function Mytable(prop) {



    //console.log(prop.add[0]);

    const myRows = prop.add.map((item) => {

        return <tr>

            <td>{item[1]}</td>
            <td>{item[2]}</td>
            <td>{item[3]}</td>

        </tr>

    })


    return (
        <>
            {myRows}

        </>
    )
}