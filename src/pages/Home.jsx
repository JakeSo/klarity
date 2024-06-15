import PhotoCard from "../components/PhotoCard.jsx";
import Collapsible from "../components/Collapsible.jsx";
import Button from "../components/Button.jsx";
import logo from '../assets/1.svg'
import banner from '../assets/banner.mp4';
import { useState } from "react";
import { ContactForm } from "../components/ContactForm.jsx";

const whyUsSections = [
    {
      id: 1,
      title: 'Industry Expertise',
      img: 'https://placehold.co/300x400?text=3:4',
      description: 'We have extensive knowledge and experience in the industry.'
    },
    {
      id: 2,
      title: 'Customized Approach',
      img: 'https://placehold.co/300x400?text=3:4',
      description: 'Our solutions are tailored to meet your specific needs.'
    },
    {
      id: 3,
      title: 'Commitment to Excellence',
      img: 'https://placehold.co/300x400?text=3:4',
      description: 'We strive for excellence in everything we do.'
    }
  ];

const Home = () => {

    const [openModal, setOpenModal] = useState(false);

    const openContactForm = () => {
      setOpenModal(true);
    }

    return (
    <div className='mt-16 md:mt-0'>
        <div className='section'>
          <video autoPlay muted loop disablePictureInPicture>
            <source src={banner}></source>
          </video>
        </div>
        <div className='section flex flex-wrap min-h-full w-full'>
          <div className='w-full h-full px-4 py-10 md:px-10 mb-28 md:w-1/2 text-center'>
            <img src={logo} alt="Klarity logo" className='mx-auto w-24 py-10'></img>
            <h1 className='pb-10'>HELPING RESTAURANTS THRIVE IN AN EVER-EVOLVING INDUSTRY</h1>
            <h3>Our mission is to elevate dining experiences by providing expert guidance, fostering culinary innovation, optimizing sustainable practices, and delighting food enthusiasts with exceptional quality and service.</h3>
          </div>
          <div className='w-full h-full md:w-1/2 bg-[#7e6b73] '>
            <img className='mx-auto my-10' src='https://placehold.co/400x600?text=2:3'></img>
          </div>
        </div>
        <div id='Services' className='section flex flex-wrap scroll-pt-8'>
          <div className='w-full h-full md:w-2/3 md:h-2/3 my-28 text-left p-8'>
            <h1 className='uppercase'>Our Services</h1>
            <h3 className='text-gray-400'>Klarity is dedicated to providing top-notch service.</h3>
            <div className='w-full mt-10 pr-5'>
              <Collapsible title="CONSULTING">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer vitae justo. Nunc sed augue lacus viverra.</p>
              <a className="float-end py-2 text-gold" href="/Services/Service1">Learn More...</a>
              </Collapsible>
              <hr color='#736b73' />
              <Collapsible title={"TRAINING AND DEVELOPMENT"}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer vitae justo. Nunc sed augue lacus viverra.</p>
              <a className="float-end py-2 text-gold" href="/Services/Service2">Learn More...</a>
              </Collapsible>
              <hr />
              <Collapsible title={"QUALITY ASSURANCE"}>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed velit dignissim sodales ut eu sem integer vitae justo. Nunc sed augue lacus viverra.</p>
              <a className="float-end py-2 text-gold" href="/Services/Service3">Learn More...</a>
              </Collapsible>
            </div>
          </div>
          <div className='w-full md:w-1/3 slide-in md:p-10'>
            <img className='mx-auto my-10' src='https://placehold.co/400x600?text=2:3'></img>
          </div>
        </div>
        <div id='Why' className='section flex flex-wrap text-center'>
          <h1 className="mb-8 py-10 px-4 mx-auto">WHY CHOOSE US?</h1>
          <div className="flex justify-center flex-col md:flex-row w-full h-full">
            {whyUsSections.map(section => (
              <PhotoCard key={section.id} {...section} />
            ))}
          </div>
        </div>
        <div id='Contact' className='section flex flex-wrap'>
          <div className='w-full h-full p-10 md:w-1/2 md:h-2/3 my-28 text-center'>
            {/* <img src={logo} alt="Klarity logo" className='mx-auto w-24 py-10'></img> */}
            <h1 className='uppercase pb-10'>ready to take your restaurant to the <span className='text-gold'>next level</span>?</h1>
            <h3 className='text-xl mb-12'>Contact us today to schedule a consultation. Let&apos;s work together to unlock the full potential of your business and create unforgettable experiences for your guests.</h3>
            <Button id='contact-btn' className="p-3" size={"2xl"} onClick={openContactForm}>Contact Us</Button>
            <ContactForm openModal={openModal} setOpenModal={setOpenModal} />
          </div>
          <div className='w-full h-full md:w-1/2 bg-gray-400 '>
            <img className='' src='https://placehold.co/1000x1000?text=1:1'></img>
          </div>
        </div>
      </div>
    )
}

export default Home;