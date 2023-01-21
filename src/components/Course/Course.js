import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { Button } from 'react-bootstrap';
import './Course.css'
const Course = (props) => {
    const {id, coursename, image, price, Focus, total, running, duration, upcomming} = props.course;

    return (
        <div className='course-body container'>
            <div className="course-header">
                <img src={image} alt="img"/>
                <h4>{coursename}</h4>
                <h4>Price: {price}</h4>
            </div>

            <div className="course-details">
                <h4>Total Trained Student: {total} </h4>
                <h5>Running Batch: {running}</h5>
                <h6>Duration: {duration}</h6>
                <h6>Upcomming: {upcomming}</h6>
                <h6><span>Key of Success:</span> {Focus}</h6>
                <Button style={{marginRight:"10px"}}>View Details</Button>
                <Button><FontAwesomeIcon icon={faShoppingCart}/>  Enroll The Course</Button>
            </div>
            
                
        </div>
    );
};

export default Course;