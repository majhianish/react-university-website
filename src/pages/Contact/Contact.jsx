import React, {Suspense,useEffect,useRef} from 'react';
import './Contact.css';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function Contact() {
    useEffect(()=>{
        document.title="Contact Us | IIEST ETC DEPT";
    },[]);
    const form = useRef();
    function notify(msg)
    {
        toast(msg)
    }
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_85jmr1t', 'template_bdqe7i9', form.current, 'dsnkp_kZNwC_T6RTG')
          .then((result) => {
              notify("We have received your message !✌️")
              form.current.reset();
          }, (error) => {
            notify("Oops !!! some error occured while sending your message 😔")
          });
        };
      
  return (
    <Suspense fallback={<div>Loading...</div>}>
        <div className='contact-page'>
            <header className='height-75'>
                <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
                    <h1 className='text-center fw-semibold'>Get In Touch</h1>
                    {/* <p className='text-center w-75 mb-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae pariatur qui quos aspernatur, voluptatem autem possimus esse quo consequatur omnis, soluta consectetur ullam ipsum cum!</p> */}
                </div>
            </header>

            <div className='container my-5 d-flex justify-content-center'>
                <Form id='contact-form' ref={form} onSubmit={sendEmail}>
                    <Row className='mb-3'>
                        <Col sm={12} md={6} className='mb-3 mb-md-0'>
                            <Form.Label>First Name</Form.Label>
                            <Form.Control placeholder='First name' name='first_name' />
                        </Col>
                        <Col sm={12} md={6}>
                            <Form.Label>Last Name</Form.Label>
                            <Form.Control placeholder='Last name' name='last_name'/>
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Email</Form.Label>
                        <Form.Control type='email' placeholder='Enter email' name='email_id' />
                        <Form.Text className='text-muted'>
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label>Address</Form.Label>
                        <Form.Control placeholder='Your address' name='address' />
                    </Form.Group>

                    <Row className='mb-3'>
                        <Col sm={12} md={6}>
                            <Form.Label>Postcode</Form.Label>
                            <Form.Control placeholder='Postcode' name='p_code' />
                        </Col>
                    </Row>

                    <Form.Group className='mb-3'>
                        <Form.Label>Your Message</Form.Label>
                        <Form.Control as="textarea" rows={3} name='message'/>
                    </Form.Group>

                    <Button variant="primary btn-lg" type='submit'>Submit</Button>
                </Form>
            </div>
            <ToastContainer />
        </div>
    </Suspense>
  )
}

export default Contact;
