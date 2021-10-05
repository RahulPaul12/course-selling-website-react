import React from 'react';

import './Footer.css';
import { Col, Row} from 'react-bootstrap';

const Footer = () => {
    return (
        <div className="footer">
             
                
                <Row>
                    <Col><h2>Learn Programming</h2></Col>
                    <Col>All rights Reserved</Col>
                    <Col>Stay Connected</Col>
                </Row>
          
        </div>
    );
};

export default Footer;