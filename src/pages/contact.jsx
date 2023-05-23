import React, { Component } from 'react';
import { Container, Row, Col } from "reactstrap";
import "../styles/api-style.css";
//const Contact = () => {
//	return (
//		<div>
//			<h1>Hej med dig</h1>
//        </div>
//	);


class APIapp extends Component {

    constructor(props) {
            super(props);
            this.state = {
                items: [],
                isLoaded: false
            }
    }

    componentDidMount ()
    {
        fetch('https://pixelford.com/api2/images')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                })
            });
    }

    render() {
        var { isLoaded, items } = this.state;

        var url;

        if (!isLoaded) {
            return <div> Loading ...</div>
        }

        else {
            return (
               
                <div className="api-style">
                    <div className="image-row">
                    {items.map(item => (
                           
                            <div key={item.id} className="image-container">
                                <p>Name: {item.title}</p>
                                <img src={item.url_small_size} alt="Item" />
                                <p> {item.description}</p>
                                
                            </div>
                        ))}
                    </div>
                    Data has been loaded
                </div>
            );
        }
    }

}


export default APIapp;
