import React, { useContext } from "react"
import { NavItem } from "react-bootstrap"

import Mycard from "./Mycard"



export default function Body(prop) {


    const cardwithdata = prop.data.map((item) => {
        return (


            <Mycard product={item.product} price={item.price} id={item.id} quantity={item.quantity} />

        )
    })
    return (

        <>
            { cardwithdata}
        </>

    )

}