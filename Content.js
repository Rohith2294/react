import React, { useState } from 'react'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import { Card } from 'react-bootstrap';
import { Col } from 'react-bootstrap';
// import telephone from "./telephone.png"
import activa from "./activa-6g-right-front-three-quarter.webp"
// import { Grid } from '@mui/material';

const names = [
    { name1: "New Bike", price: "20,000", Available: "Out Of Stock" },
    { name1: "Old Bike", price: "20,000", Available: "Out Of Stock" },
    { name1: "Repair", price: "20,000", Available: "Out Of Stock" },
    { name1: "new", price: "20,000", Available: "Out Of Stock" },
    { name1: "Repair2", price: "20,000", Available: "Available" },
    { name1: "New3", price: "20,000", Available: "Out Of Stock" },
]

function Content() {
    const [search, setSearch] = useState('');
    const [data, setData] = useState('')
    let varsfsgd

    function newss(x) {
        varsfsgd = x
        setData(varsfsgd)
        console.log(data, "varsfsgd")
    }

    return (
        <Container>

            <p>Search Filters</p><br />
            <input type="text" placeholder='Search For Cards' value={search} onChange={(e) => setSearch(e.target.value)} /><br />
            <>
                <col-md-12>
                    <Row>
                        {names.filter(x => x.name1.includes(search)).map(x =>
                            <Col md={4} >

                                <Card onClick={() => newss(x)} style={{ padding: "50px", marginTop: "20px", marginBottom: "90px", backgroundColor: "whiteSmoke" }}>
                                    {x.name1}
                                    <img src={activa} className="App-logo" alt="logo" />
                                    <p>{x.price} rs</p>
                                    {/* <h3 style={{color:"red"}}>{x.Available}</h3> */}
                                    {x.Available === "Available" ? <p style={{ color: "green", fontSize: "20px" }}>Available</p> : <p style={{ color: "Red" }}>Out Of Stock</p>}

                                </Card>
                            </Col>
                        )
                        }
                    </Row>
                </col-md-12>
                <col-md-12>
                <hr />
                <p style={{color:"blue"}}>Clicked Response</p>
                    <Row>
                        <Col md={3}>
                            
                            <Card style={{ padding: "50px", marginTop: "20px", marginBottom: "90px", backgroundColor: "whiteSmoke" }}>
                                <p>{data.name1}</p>
                                <p>{data.price}</p>
                                {data.Available === "Available" ? <p style={{ color: "green", fontSize: "20px" }}>Available</p> : <p style={{ color: "Red" }}>Out Of Stock</p>}
                            </Card>
                        </Col>
                    </Row>
                </col-md-12>

            </>
        </Container>
    );
}

export default Content
