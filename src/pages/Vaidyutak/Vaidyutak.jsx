import React,{useEffect,Suspense} from 'react';
import './Vaidyutak.css';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import E1Img from '../../utils/images/doped.jpg';
import E2Img from '../../utils/images/breadbyte.jpg';
import E3Img from '../../utils/images/robosoccer.jpg';
import E4Img from '../../utils/images/codetastic.jpg';
import E5Img from '../../utils/images/digicon.png';
import E6Img from '../../utils/images/crackthecryptic.jpg';
import E7Img from '../../utils/images/datathon.jpg';
import E8Img from '../../utils/images/headerimg.png';
import ReadMoreReact from 'read-more-react';
import { Link } from 'react-router-dom';
const events = [
    {
        id: 1,
        img: [E1Img],
        title: 'DOPED',
        description: 'Join us for "Doped 3.0", a quiz competition on Aptitude and Technical Questions of Basic Electrical and Electronics Engineering, as a part of Vaidyutak 3.0, the technical fest of the department of Electronics and Telecommunication Engineering, IIEST. This event will have 2 rounds, and each team should have a maximum of 2 members. The First round will have 25 questions, covering topics on basic RLC circuits, digital logic, network theory and a little bit of mathematical aptitude. There will be 20 questions from technical knowledge, and 5 questions from aptitude.  The information about Round 2 will be given prior to  the event. The level of questions in both rounds is similar to what is asked in placements and internships, and even first-year students can solve them by applying their intuitions. Participate in this event to demonstrate your abilities, put your knowledge to the test, and win fascinating prizes!',
        reg:'https://forms.gle/o1GXhXjijzg7jpDx6'
    },
    {
        id: 2,
        img: [E2Img],
        title: 'BREADBYTE',
        description: "Mundane breadboards can be playgrounds of technological artistry, where scores are kept in 0's and 1's. Vaidyutak 3.0 presents Breadbyte , the ultimate event to showcase your knowledge of digital logic. Boolean algebra will be your weapon while racing against time to make a digital marvel. Be ready to make the k-maps leap off the page and let the ICs do the talking! Register now, to be the 'one' and not the 'zero'",
        reg:'https://docs.google.com/forms/d/e/1FAIpQLSdnHKYaNvcAA57y-jKHzp9t4PvRn9FtGIOniK3Om00DUrOFdA/viewform'
    },
    {
        id: 3,
        img: [E3Img],
        title: 'ROBOSOCCER',
        description: 'Forget human legends! In RoboSoccer, robotic champions dominate the pitch. Craft your mechanical marvel, master its code, and outsmart your opponent in a thrilling one-on-one showdown. Algorithms clash, circuits sing, victory awaits: are you ready to unleash your inner soccer cyborg? RoboSoccer: Where robots rewrite the beautiful game, one gear at a time!',
        reg:'https://forms.gle/6K3UQrj9S4dkn3XH8'
    },
    {
        id: 4,
        img: [E4Img],
        title: 'CODETASTIC',
        description: 'Get ready to plug into the electrifying vibe of Vaidyutak 24 with Codestatic, the ultimate coding extravaganza where the brightest minds collide! Prepare to tackle mind-bending challenges that will put your coding skills to the test, all while racing against the clock for epic prizes and the opportunity to showcase your talents. With every keystroke, you will stretch your limits, crack puzzles, and prove your mettle in the digital arena. So gear up, fasten your coding harnesses, fine-tune your functions, and dive into the digital battleground where coding reigns supreme. Dont miss out on this exhilarating journey to coding excellence at Codestatic! 🚀🔥',
        reg:'https://forms.gle/RgEWj39YpK2YRCZPA'
    },
    {
        id: 5,
        img: [E5Img],
        title: 'DIGICON',
        description: "Get ready for Digicon brought by Vaidyutak 3.0! Dive into digital art and unleash your creativity. From stunning illustrations to mesmerizing animations, showcase your talent and wow the audience as well as judges with your masterpiece. Don't miss your chance to bring your vision to life at Digicon! This will be an online event. The artwork can be a painting, a sketch, or any sort of digital art. Submit your work via the google form.",
        reg:'https://forms.gle/Z6UhQb4rKhauHp6z8'
     },
    {
        id: 6,
        img: [E6Img],
        title: 'CRACK THE CRYPTIC',
        description: 'Prepare to immerse yourself in a world of mind-bending challenges and cryptic puzzles.Vaidyutak 3.0 presents Crack the Cryptic, a quiz for the students and alumni to flex their intellect and emerge victorious.Wits will be the only weaponry to win this wonderful quest, so put on your thinking caps and come aboard for this joyful ride! Team size: 1-3',
        reg:'https://forms.gle/autqQsdSjL4CFvkH9'
    },
    {
        id: 7,
        img: [E7Img],
        title: 'DATATHON',
        description: 'Get ready to tune your hyper-parameters for the first ever "DataThon", a Machine Learning hackathon as a part of "Vaidyutak 3.0", the annual technical fest of The Electronics and Telecommunication Engineering department of IIEST, Shibpur. Buckle up to brew-up some cool models as we bring some challenging real-world problems meant to engage the budding data-enthusiasts and the seasoned ones alike. Use your analytical abilities and develop solutions that go beyond the limits of what was earlier thought possible. The hackathon commences on 15th of March 9am and terminates on 17th March, 12pm, giving you a total of fifty-one hours to research and brainstorm ideas. Submit a report outlining your methodologies, algorithms, efficiency and results. Join us on this exciting event, solve some problems and win some exciting cash prizes. Team members: 1-4 members Submission Type: PowerPoint or PDF format',
        reg:'https://shorturl.at/ilsT1'
    },
    {
        id: 8,
        img: [E8Img],
        title: 'BUSINESS ALUMNI MEET',
        description: 'Event description here',
        reg:''
    },
    
];




function Vaidyutak() {
    useEffect(()=>{
        document.title="VAIDYUTAK 3.0 | IIEST ETC DEPT";
    },[]);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <div className='vaidyutak-pg'>
                <header className='height-75'>
                </header> 
            <div className='bg-body-tertiary py-5'>
                <div className="container">
                    <div className="row g-4">
                        {events.map((event) => (
                            <div key={event.id} className='col-md-6 col-lg-4'>
                                    <Card className='h-100 shadow scale-hover-effect bg-dark text-light border-0'>
                                        <Card.Img variant="top" src={event.img}/>
                                        <Card.Body className='p-md-5 d-flex flex-column align-items-center'>
                                            <Card.Title className='fs-2 mb-4'>{event.title}</Card.Title>
                                            <Card.Text className='text-center'><ReadMoreReact text={event.description} /></Card.Text>
                                            <Link to={event.reg} target="_blank">    
                                            <Button variant="primary" classname='float-right mx-0 mx-sm-2 my-2 my-sm-0'>Register here</Button>
                                            </Link>                                         
                                        </Card.Body>
                                    </Card>                           
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            



            </div>         
        </Suspense>

    )
}

export default Vaidyutak;