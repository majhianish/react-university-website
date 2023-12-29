import React from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import UpcomingEventImg from '../../utils/images/start-courses-img.jpg';
import { Card } from 'react-bootstrap';
import Event1Img from '../../utils/images/blog1-img.jpg';
import Event2Img from '../../utils/images/blog2-img.jpg';
import Event3Img from '../../utils/images/blog3-img.jpg';

const events = [
    {
        id: 1,
        img: [Event1Img],
        title: 'Event 1',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 2,
        img: [Event2Img],
        title: 'Event 2',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    },
    {
        id: 3,
        img: [Event3Img],
        title: 'Event 3',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.'
    }
];

function Home() {
  return (
    <div className='home-page'>
        <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
            <div className='container d-flex flex-column align-items-center'>
                <h2>Welcome To</h2>
                <h1 className='text-center fw-semibold'>Department of Electronics and Telecommunication</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque, fugit? Doloremque deserunt ipsum eaque, dolor tempore, minima nisi debitis, et quas voluptatibus nam ex. Necessitatibus eligendi ratione expedita! Porro, ut.</p>
                <div className='d-flex flex-column flex-sm-row align-items-center'>
                    <Link to="/contact">
                        <button type='button' className='btn btn-outline-light btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
            </div>
        </header>

        <div className='py-5 bg-light'>
            <div className="container">
                <div className='row d-flex align-items-center justify-content-around'>
                    <div className='col-lg-5'>
                        <h2 className='text-capitalize'>Upcoming Event</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus, placeat.</p>
                        <Link to="/event">
                            <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Learn More</button>
                        </Link>
                    </div>
                    <div className='col-lg-5 mt-5 mt-lg-0'>
                        <img src={UpcomingEventImg} className='img-fluid' alt="" />
                    </div>
                </div>
            </div>
        </div>

        <div className='blog-section text-light py-5'>
            <div className='container d-flex flex-column align-items-center'>
                <h2 className='text-center text-capitalize mb-5'>Past Events</h2>
                <div className='row g-4'>
                    {events.map((event) => (
                        <div key={event.id} className='col-md-6 col-lg-4'>
                            <Link to="/event" className='text-decoration-none'>
                                <Card className='h-100 shadow scale-hover-effect'>
                                    <Card.Img variant="top" src={event.img} />
                                    <Card.Body className='p-md-5'>
                                        <Card.Title>{event.title}</Card.Title>
                                        <Card.Text>{event.description}</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Link>
                        </div>
                    ))}
                </div>
                <Link to="/event">
                    <button type='button' className='btn btn-danger btn-lg mt-5'>More Past Events</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default Home;