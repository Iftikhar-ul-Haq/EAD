import React, { useEffect, useState } from "react"
import { Card, List, Table, } from "semantic-ui-react"
import mockData from "./MOCK_DATA.json"


export default function Products() {
    const [data, setData] = useState([]);

    useEffect(() => {
        var on
        var obj = [{}];
        for (var i = 0; i < 10; i++) {
            obj[i] = mockData[i];

        }
        setData(obj)




    }, [])


    const listarr = data.map((item) => {

        return (
            <Table.Row>
                <Table.Cell>
                    {item.product}
                </Table.Cell>
                <Table.Cell>  {item.price}</Table.Cell>
                <Table.Cell><img src='./logo192.png' width="25%" /></Table.Cell>

            </Table.Row>
        )
    })







    return (

        <div style={{ textAlign: "center", border: "3px solid green", margin: "auto" }}>
            <h1 style={{ border: "2px solid green" }}>Shopping website</h1>

            <Table >

                {listarr}
            </Table>
        </div>


    )

}