import PhotoCard from "../components/PhotoCard.jsx";
import Service from "../components/Service.jsx";
import Button from "../components/Button.jsx";
import logo from '../assets/1.svg'
import banner from '../assets/banner.mp4';
import onions from '../assets/PIC 1.mp4';
import photoCard1 from '../assets/photoCard1.png';
import photoCard2 from '../assets/photoCard2.png';
import photoCard3 from '../assets/photoCard3.png';
import { useState } from "react";
import { ContactForm } from "../components/ContactForm.jsx";

const whyUsSections = [
    {
      id: 1,
      title: 'Industry Expertise',
      img: photoCard1,
      description: 'We have extensive knowledge and experience in the industry.'
    },
    {
      id: 2,
      title: 'Customized Approach',
      img: photoCard2,
      description: 'Our solutions are tailored to meet your specific needs.'
    },
    {
      id: 3,
      title: 'Commitment to Excellence',
      img: photoCard3,
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
        <div className='section banner flex justify-center'>
          <video className="absolute top-1/4 -translate-y-1/4 lg:top-1/3 lg:-translate-y-1/3" autoPlay muted loop disablePictureInPicture>
            <source src={banner}></source>
          </video>
        </div>
        <div className='section flex flex-wrap min-h-full w-full items-baseline'>
          <div className='w-full h-full pb-16 px-4 md:px-10 md:w-2/3 text-center my-auto'>
            <img src={logo} alt="Klarity logo" className='mx-auto w-24 py-10'></img>
            <h1 className='px-4 md:text-6xl'>HELPING RESTAURANTS THRIVE IN AN EVER-EVOLVING INDUSTRY</h1>
          </div>
          <div className='w-full h-full md:w-1/3'>
          <video className="w-full" autoPlay muted loop disablePictureInPicture>
            <source src={onions}></source>
          </video>
          </div>
        </div>
        <div className="section text-center py-10 px-4 md:px-28">
        <h2 className="italic">Our mission is to elevate dining experiences by providing expert guidance, fostering culinary innovation, optimizing sustainable practices, and delighting food enthusiasts with exceptional quality and service.</h2>
        </div>
        <div id='Services' className='section flex flex-wrap scroll-pt-8'>
          <div className='w-full h-full  my-10 text-left p-8'>
            <h1 className='uppercase text-center'>Our Services</h1>
            <div className='w-full mt-10 pr-5 flex flex-col md:flex-row justify-evenly h-4/5'>
              <Service title="CONSULTING">
              <p className="px-5 text-2xl"> We understand your passion for opening a restaurant and want to reduce daily pressures and worries. Klarity offers a thorough analysis of your business to address all concerns and underlying issues.</p>
              <a className="float-end py-2 text-gold" href="/Services/Service1">Learn More...</a>
              </Service>
              <Service title={"TRAINING & DEVELOPMENT"}>
              <p className="px-5 text-2xl"> Klarity seeks to provide restaurant owners with a sense of assurance and peace of mind by helping their team commit to success. The goal is to eliminate stress and ensure profitability, pride, passion, and confidence for restaurant owners.</p>
              <a className="float-end py-2 text-gold" href="/Services/Service2">Learn More...</a>
              </Service>
              <Service title={"QUALITY ASSURANCE"}>
              <p className="px-5 text-2xl">With our comprehensive approach, we address all aspects of your business, providing confidence and security by addressing both visible issues and underlying complexities.</p>
              <a className="float-end py-2 text-gold" href="/Services/Service3">Learn More...</a>
              </Service>
            </div>
          </div>
          {/* <div className='w-full md:w-1/3 slide-in md:p-10'>
            <img className='mx-auto my-10' src='https://placehold.co/400x600?text=2:3'></img>
          </div> */}
        </div>
        <div id='Why' className='section flex flex-wrap text-center'>
          <h1 className="mb-8 my-10 px-4 mx-auto">WHY CHOOSE US?</h1>
          <div className="flex justify-center flex-col flex-wrap md:flex-row w-full h-full">
            {whyUsSections.map(section => (
              <PhotoCard key={section.id} img={`../assets/photoCard${section.id}.png`} {...section} />
            ))}
          </div>
        </div>
        <div id='Contact' className='section flex flex-wrap'>
          <div className='w-full h-full p-10 md:w-1/2 md:h-2/3 my-8 text-center'>
            {/* <img src={logo} alt="Klarity logo" className='mx-auto w-24 py-10'></img> */}
            <h1 className='uppercase pb-8'>Let&apos;s take your restaurant to the <span className='text-gold'>highest level</span>!</h1>
            <h2 className="text-2xl pb-4">Klarity aims to offer owners a sense of assurance by ensuring that their restaurant team is committed to their success. Our goal is to eliminate those sleepless nights by:</h2>
            <ul id="goalsList" className="list-disc list-inside text-xl py-2">
              <li>Ensuring your restaurant generates profits and fills you with pride.</li>
              <li>Recapturing the contagious passion that initially led you to open a
              restaurant.</li>
              <li>Alleviating daily stressors and unnecessary burdens that dampen your
              spirits.</li>
              <li>Providing a sense of confidence by understanding the complete picture,
              beyond just the visible issues keeping you awake at night.</li>
            </ul>
            <h3 className='text-2xl my-4'>Let&apos;s work together to unlock the full potential of your business and create unforgettable experiences for your guests.</h3>
            <Button id='contact-btn' className="p-4 " size={"4xl"} onClick={openContactForm}>Contact Us</Button>
            <ContactForm openModal={openModal} setOpenModal={setOpenModal} />
          </div>
          <div className='w-full h-full md:w-1/2 bg-gray-400 '>
            <img className='w-full' src='https://placehold.co/1000x1000?text=1:1'></img>
          </div>
        </div>
      </div>
    )
}

export default Home;