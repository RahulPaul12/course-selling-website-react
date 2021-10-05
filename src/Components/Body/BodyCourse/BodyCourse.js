import React from 'react';
import { Button, Card } from 'react-bootstrap';

const BodyCourse = (props) => {
    const { name, descript, img } = props.course;
    return (
    
        <div>
            
            <Card style={{ width: '18rem'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title><h1>{name}</h1></Card.Title>
                    <Card.Text>
                        {descript}
                    </Card.Text>
                    <Button variant="primary">Details</Button>
                </Card.Body>
            </Card>
            
        </div>
    );
};

export default BodyCourse;