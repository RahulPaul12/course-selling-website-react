import React, { useEffect, useState } from 'react';
import Course from '../Course/Course';

import './Courses.css';

const Courses = () => {
    const [courses, setcourses] = useState([]);
    useEffect(() => {
        fetch('./fakedb.JSON')
            .then(res => res.json())
            .then(data => setcourses(data));
    }, [])
    return (
        <div>
            <h1 className="courses">Our Courses</h1>
            <div className="courses">
                {
                    courses.map(course => <Course
                        key={course.key}
                        course={course}
                        >
                    </Course>)
                }
            </div>

        </div>
    );
};

export default Courses;