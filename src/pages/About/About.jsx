import React from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import Lab1 from '../../utils/images/Lab1.jpg';
import Lab2 from '../../utils/images/Lab2.jpg';
import Lab3 from '../../utils/images/Lab3.jpg';

function About() {
  return (
    <div className='about-page'>
        <header className='height-75'>
            <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                <h1 className='text-center fw-semibold'>About Us</h1>
                {/* <p className='text-center w-75 mb-5'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error recusandae harum ullam repellat cum? Nisi unde, incidunt natus ut ratione dolore quasi at dolores molestias.</p> */}
            </div>
        </header>

        <div className='container my-5'>
            <div className="row">
                <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                    <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                    <p>The Department of Electronics and Telecommunication Engineering started its journey in July 1965 after its nucleation from the Department of Physics & Telecommunication from the erstwhile Bengal Engineering College. The first batch of Electronics and Telecommunication engineers graduated from the department in 1971. The Master’s program was launched in 1972 and the first batch of Post Graduates passed out in 1974. The Department so far offered a Bachelor of Engineering (B.E.) course in Electronics & Telecommunication Engineering for 4 years (8 Semesters). From the year 2014 onward the Department has started offering 5 years (10 Semesters) Integrated Master of Technology (Dual B. Tech. + M. Tech.) program under the umbrella of the Indian Institute of Engineering Science and Technology. Parallel Master of Engineering (M.E.) programs of 4-semester duration (2 years) are also offered for three specializations, viz. Digital Systems & Instrumentation, Microwave Communication, and Communication & Signal Processing. Department also offers the Ph.D. program in Electronics and Telecommunication Engineering in various fields, like Microwaves and Antennas; Microelectronics, Devices, and VLSI; Communication and Signal processing.</p>
                    <p className='mb-4 mb-lg-5'>Considerable effort has been put forward during the last couple of years towards setting up new undergraduate and postgraduate laboratories and augmenting the facilities in the existing laboratories. The department does a commendable performance in research and development works. A good number of research projects worth a high value are being carried out with the assistance of various funding agencies leading to a high volume of quality publications in international and national journals and conferences.</p>
                    <Link to="/contact">
                        <button type='button' className='btn btn-danger btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                    </Link>
                </div>
                <div className='col-lg-6 d-flex justify-content-center'>
                    <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                </div>
            </div>
            
        </div>

        <div className='bg-dark text-light p-5'>
            <div className='container'>
                <h2 className='text-center mb-5'>Our Labs</h2>
                <div className='row g-4'>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={Lab1} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Applied Electromagnetics lab</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={Lab2} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Communication Lab</h3>
                    </div>
                    <div className='col-lg-4 d-flex flex-column align-items-center'>
                        <img src={Lab3} className='img-fluid' alt="" />
                        <h3 className='text-center mt-3'>Microelectronics Lab</h3>
                    </div>
                </div>
            </div>
        </div>
    </div>

  )
}

export default About;