import React, {Suspense,useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';
import UpcomingEventImg from '../../utils/images/upcoming-event-img.jpeg';
import { Card } from 'react-bootstrap';
import Event1Img from '../../utils/images/past-event1-img.jpeg';
import Event2Img from '../../utils/images/past-event2-img.jpeg';


const events = [
    {
        id: 1,
        img: [Event1Img],
        title: 'Learning Based Intelligent Imaging and Beyond',
        description: 'An enthralling discourse on Learning Based Intelligent Imaging and Beyond by Dr. Srutarshi Banerjee, Postdoctoral Researcher at Argonne National Laboratory.'
    },
    {
        id: 2,
        img: [Event2Img],
        title: 'Electronics in the age of Data Science',
        description: 'A reflection on the latest developments in Machine Learning and AI along with advancement in Computing by Professor Ajoy Kumar Ray, Padma Shree, Former Director of IIEST.'
    },
];

function Home() {
    useEffect(()=>{
        document.title="Home | IIEST ETC DEPT";
    },[]);
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className='home-page'>
            <header className='h-100 min-vh-100 d-flex align-items-center text-light'>
                <div className='container d-flex flex-column align-items-center'>
                    <h2>Welcome To</h2>
                    <br></br>
                    <br></br>
                    <h1 className='text-center fw-semibold spldesign'>Department of Electronics and Telecommunication</h1>
                    <p className='text-center w-75 mb-5'>Aspire to become one of the Leading Departments of this Country with International Repute in the broad domain of Electrical Sciences and Technology through the development of Professional Attitude, Analytical and Innovative Mindsets, and Operational Expertise in the field of Electronics and Tele-Communication Engineering.</p>
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
                            <p>Topic : Electronics in the Age of Data Science</p>
                            <p>Time : 18th January, 4:15pm</p>
                            <p>Speaker : Prof. Ajoy Kumar Ray, Former Director of IIEST, Shibpur</p>
                            <Link to="https://forms.gle/EJhT4YeN8iyryXTk9" target="_blank">
                                <button type='button' className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Register here</button>
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
                        {events.reverse().map((event) => (
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
                        <button type='button' className='btn btn-primary btn-lg mt-5'>More Past Events</button>
                    </Link>
                </div>
            </div>
        </div>
    </Suspense>
  )
}

export default Home;