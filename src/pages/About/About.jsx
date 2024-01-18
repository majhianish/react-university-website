import React,{useEffect,Suspense} from 'react';
import './About.css';
import { Link } from 'react-router-dom';
import AboutUsSectionImg from '../../utils/images/about-us-section-img.jpg';
import founderImg from '../../utils/images/founder.jpg';
import Lab1 from '../../utils/images/Lab1.jpg';
import Lab2 from '../../utils/images/Lab2.jpg';
import Lab3 from '../../utils/images/Lab3.jpg';

function About() {
    useEffect(()=>{
        document.title="About Us | IIEST ETC DEPT";
    },[]);
    return (
        <Suspense fallback={<div>Loading...</div>}>
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
                            <h2 className='mb-4 mb-lg-5'>Founder of Electronics & Telecommunication department</h2>
                            <p>  
                                In 1956, <b>Professor Sankar Sebak Baral</b> joined Bengal Engineering College, Shibpur in he Physics department. There he founded the Electronics and Tele-Communication Department. The first batch of ETC students were admitted in 1966. Prof. Baral continued as the Head of ETC Department till 1978. He was a member of the UPSC selection board. Publications from his work were acclaimed internationally. In recognition to his dedicated services, the Calcutta University honoured him with “Eminent Professor for Creating Eminent Students”. During 1979-81, he became a member of the West Bengal Public Service Commission.
                                <br />
                                He stayed in BE college campus for over 25 years and after retirement from active service went back to his home town Chandannagore and continued teaching Electronics, Computer and Physics to local enthusiasts.
                                Besides writing scientific research papers, Prof. Baral used to write popular articles in English and Bengali. He made regular contribution to the annual numbers of <b>BECA, the Bengal Engineering College magazine.</b>

                                Till the last day of his life, Dr. Baral offered free education for his students of different streams at various levels. His death came untimely on the afternoon of 19th August 1991 while delivering a speech at Kanailal Vidyamandir, Chandannagore, during the inauguration of a computer center at the school. He breathed last at the school’s Physics laboratory bench. He left behind a large number of his students to continue with his legacy.</p>
                
                        </div>
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={founderImg} className='img-fluid w-75' alt="" />
                        </div>
                    </div>

                </div>

                <div className='container my-5'>
                    <div className="row">
                        <div className='col-lg-6 d-flex justify-content-center'>
                            <img src={AboutUsSectionImg} className='img-fluid w-75' alt="" />
                        </div>
                        <div className='col-lg-6 d-flex flex-column justify-content-center mb-4 mb-lg-0'>
                            <h2 className='mb-4 mb-lg-5'>Study with us</h2>
                            <p>The Department of Electronics and Telecommunication Engineering started its journey in July 1965 after its nucleation from the Department of Physics & Telecommunication from the erstwhile Bengal Engineering College. The first batch of Electronics and Telecommunication engineers graduated from the department in 1971. The Master’s program was launched in 1972 and the first batch of Post Graduates passed out in 1974. The Department so far offered a Bachelor of Engineering (B.E.) course in Electronics & Telecommunication Engineering for 4 years (8 Semesters). From the year 2014 onward the Department has started offering 5 years (10 Semesters) Integrated Master of Technology (Dual B. Tech. + M. Tech.) program under the umbrella of the Indian Institute of Engineering Science and Technology. Parallel Master of Engineering (M.E.) programs of 4-semester duration (2 years) are also offered for three specializations, viz. Digital Systems & Instrumentation, Microwave Communication, and Communication & Signal Processing. Department also offers the Ph.D. program in Electronics and Telecommunication Engineering in various fields, like Microwaves and Antennas; Microelectronics, Devices, and VLSI; Communication and Signal processing.</p>
                            <Link to="/contact">
                                <button type='button' className='btn btn-primary btn-lg mx-0 mx-sm-2 my-2 my-sm-0'>Contact Us</button>
                            </Link>
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
        </Suspense>

    )
}

export default About;