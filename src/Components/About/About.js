import React from 'react';
import './About.css';

import { Col, Row } from 'react-bootstrap';

const About = () => {
    return (
        <div>
            
            <div>
               <h1 className="aboutH1">About Us</h1>
            <Row className="about">
                    <Col><h5>Our mission is provide you with knowledge and skills you need.</h5></Col>
                    <Col><h5>To give everyone the ability to give hard work for their dream.</h5></Col>
                   
                </Row> 
            </div>
            
            
        </div>
    );
};

export default About;