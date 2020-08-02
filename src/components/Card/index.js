import React from 'react';
import clasess from './index.module.css';
import { Card, Button } from "react-bootstrap";
import { Paper } from "@material-ui/core";
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';


const items = (props) => {
    return (

        <Paper elevation={12} style={{ display: 'inline-block', margin: '1rem', cursor: "default" }}>
            <Card border="secondary" style={{ width: '12rem', margin: '10px' }} >
                <Paper style={{ padding: '10px' }} elevation={3}>
                    <Card.Img variant="top" src="https://staticimg.titan.co.in/Tanishq/Catalog/502998SBHAAA04_2.jpg" style={{ width: '180px' }} />
                </Paper>
                <Card.Body>
                    <Card.Title>{props.title}</Card.Title>
                    <Card.Text >
                        <Paper elevation={5} style={{ padding: '5px', margin: '1rem' }}>{props.brand}</Paper>
                        <Paper elevation={5} style={{ padding: '5px', textAlign: 'left' }}>
                            <div style={{ fontSize: "10px" }}>
                                Price: {'\u20B9'} {props.price ? props.price : "NA"}<br />
                                Category: {props.category ? props.category : "NA"}<br />
                                Collection: {props.collection ? props.collection : "NA"}<br />
                            </div>
                        </Paper>
                    </Card.Text>
                    <Paper onClick={props.clicked}elevation={5} style={{ background: 'linear-gradient(to right, #2193b0, #6dd5ed)', color: 'white', width: "40%", display: "inline-block", padding: "2px", cursor: "pointer" }}>Buy Now</Paper>
                </Card.Body>
            </Card>
        </Paper>

    );
}

export default items;