import React from 'react';
import clasess from './index.module.css';
import { Card, Button } from "react-bootstrap";
import { Paper } from "@material-ui/core"
const items = (props) => {
    return (

        <Card border="secondary" style={{ width: '18rem' }} >
            <Paper  style={{  padding: '10px' }} elevation={3}>
                <Card.Img variant="top" src="https://staticimg.titan.co.in/Tanishq/Catalog/502998SBHAAA04_2.jpg" style={{ width: '180px' }} />
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text>
                       <Paper>
                           
                       </Paper>
                    </Card.Text>
                    <Button variant="primary" style={{  backgroundColor: 'blue' , color: 'white'}}>Buy Now</Button>
                </Card.Body>
            </Paper>
        </Card>

    );
}

export default items;