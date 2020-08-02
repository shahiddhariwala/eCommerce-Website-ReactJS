import React, { Component } from 'react';
import Card from "../components/Card/index";
import { Paper } from "@material-ui/core";
import { readString, readRemoteFile } from 'react-papaparse'
class Main extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            pageNumber: 1,
            pageCount: 21,
            lastIndex: 2,
            maxPages: 0,
            newData:[],
        }
    }
    componentDidMount() {
        readRemoteFile('/Assets/data.csv', {
            download: true,
            delimiter: ",",
            complete: (results) => {
                console.log(results);
                this.setState({ data: results.data });
                let pages = Math.floor(results.data.length/this.state.pageCount);
                this.setState({maxPages:pages});
            }
        });
    }
    getData = () => {
        let count = this.state.lastIndex;
        let data = this.state.data.map((item,index) => {
            if (index > this.state.lastIndex && index < (this.state.pageNumber * this.state.pageCount)) {
                return (
                    <Card key={item[0]} brand={item[48]} price={item[46]} category={item[36]} collection={item[8]}></Card>
                )
            }
            else{
                return null;
            }
        }
        )
        return data;
    }
    nextHandler = () => {
        let pageNumber = this.state.pageNumber;
        if (pageNumber != this.state.maxPages) {
            pageNumber += 1;
            if ((this.state.lastIndex-this.state.pageCount) != this.state.data.length)
            {
                this.setState({ pageNumber: pageNumber, lastIndex: this.state.lastIndex+this.state.pageCount});
            }
        }
        this.forceUpdate();
    }

    prevHandler = () => {
        let pageNumber = this.state.pageNumber;
        if (pageNumber > 1) {
            pageNumber -= 1;
            this.setState({ pageNumber: pageNumber });
            if ((this.state.lastIndex-this.state.pageCount) > 0)
            {
                this.setState({ pageNumber: pageNumber, lastIndex: this.state.lastIndex-this.state.pageCount});
            }
            
        }
        this.forceUpdate();
    }

    render() {
        let data = this.getData();
        return (
            <React.Fragment>
                <header>
                    <Paper elevation={12}><img src="https://miro.medium.com/max/600/1*jQW88p6H4G1Djbnx4wiuwQ.jpeg" width="99%" padding="1%"></img></Paper>
                </header>
                <main>
                    {data}
                </main>
                <footer>
                    <Paper onClick={this.prevHandler} style={{ display: "inline-block", width: "10%", margin: "0.5rem", padding: "0.5rem", background: 'linear-gradient(to right, #a6ffcb, #12d8fa, #1fa2ff)', marginTop: "2%" }}>Prev</Paper>
                    {this.state.pageNumber}
                    <Paper onClick={this.nextHandler} style={{ display: "inline-block", width: "10%", margin: "0.5rem", padding: "0.5rem", background: 'linear-gradient(to right, #1fa2ff, #12d8fa, #a6ffcb)', marginTop: "2%" }}>Next</Paper>

                    <Paper elevation={12} style={{ background: 'linear-gradient(to right, #00b4db, #0083b0)', marginTop: "5%" }}>Designed by Shahid Dhariwala</Paper>
                </footer>
            </React.Fragment >
        );
    }
}

export default Main;