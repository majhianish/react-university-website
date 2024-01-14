import React from 'react';
import './Event.css';
import { Link } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import Event1Img from '../../utils/images/past-event1-img.jpeg';

const events = [
    {
        id: 1,
        img: [Event1Img],
        title: 'Learning Based Intelligent Imaging and Beyond',
        description: 'An enthralling discourse on Learning Based Intelligent Imaging and Beyond by Dr. Srutarshi Banerjee, Postdoctoral Researcher at Argonne National Laboratory.'
    },
    // {
    //     id: 2,
    //     img: [Event2Img],
    //     title: 'Semiconductors: A Brief History',
    //     description: 'A reflection on the past and the development of semiconductors by Professor S. Ashok, Pennsylvania State University on the occasion of Golden Jubilee Celebration of our Department.'
    // },
    
];

function Event() {
  return (
    <div className='blog-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>Past Events</h1>
                {/* <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptas suscipit ratione quod culpa, eius ad consequatur, dolor quasi nulla optio quo error tempora temporibus distinctio quidem asperiores dolore ex amet nam. Consequatur, odit corporis.</p> */}
            </div>
        </header>

        <div className='bg-body-tertiary py-5'>
            <div className="container">
                <div className="row g-4">
                    {events.map((event) => (
                        <div key={event.id} className='col-md-6 col-lg-4'>
                            <Link to="/event" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                    <Card.Img variant="top" src={event.img} />
                                    <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                        <Card.Title className='fs-2 mb-4'>{event.title}</Card.Title>
                                        <Card.Text className='text-center'>{event.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Event;