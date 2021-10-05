import React, { useEffect, useState } from 'react';
import BodyCourse from './BodyCourse/BodyCourse';
import './Body.css';
import { Button, FormControl, InputGroup } from 'react-bootstrap';
const Body = () => {
    const [course, setcourse] = useState([]);
    useEffect(() => {
        fetch('./fakedb2.JSON')
            .then(res => res.json())
            .then(data => setcourse(data));
    }, [])
    return (

        <div>

            <div className="section">
                <InputGroup className="mb-3 button">
                    <FormControl
                        placeholder="search"
                        aria-label="Recipient's username"
                        aria-describedby="basic-addon2"
                    />
                    <Button variant="outline-secondary" id="button-addon2">
                        search
                    </Button>
                </InputGroup>
            </div>
            <h1 className="courses">Our Courses</h1>
            <div className="courses">
                {
                    course.map(course => <BodyCourse
                        key={course.key}
                        course={course}
                    >
                    </BodyCourse>)
                }
            </div>


        </div>
    );
};

export default Body;