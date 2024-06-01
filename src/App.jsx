import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import logo from './assets/1.svg'
import banner from './assets/banner.mp4';
import Collapsible from './components/Collapsible'
function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <div className='mt-16 md:mt-0'>
        <div className='section'>
          <video autoPlay muted loop disablePictureInPicture>
            <source src={banner}></source>
          </video>
        </div>
        <div className='section flex flex-wrap min-h-full w-full'>
          <div className='w-full h-full p-10 md:w-1/2 text-center slide-in'>
            <img src={logo} alt="Klarity logo" className='mx-auto w-24 py-10'></img>
            <h1 className='uppercase pb-10'>helping restaurants thrive in an ever-evolving industry</h1>
            <h3>Our mission is to elevate dining experiences by providing expert guidance, fostering culinary innovation, optimizing sustainable practices, and delighting food enthusiasts with exceptional quality and service.</h3>
          </div>
          <div className='w-full h-full md:w-1/2 bg-gray-400 '>
            <img className='slide-in mx-auto my-10' src='https://placehold.co/400x600'></img>
          </div>
        </div>
        <div id='Services' className='section flex flex-wrap min-h-75vh'>
          <div className='w-full h-full md:w-2/3 md:h-2/3 my-28 slide-in text-left p-10'>
            <h1 className='uppercase'>Our Services</h1>
            <h3 className='text-gray-400'>Klarity is dedicated to providing top-notch service.</h3>
            <div className='w-full md:w-3/4 mt-10'>
              <Collapsible title="CONSULTING">
                We do consulting
              </Collapsible>
              <hr />
              <Collapsible title={"TRAINING AND DEVELOPMENT"}>
                We do training and development
              </Collapsible>
              <hr />
              <Collapsible title={"QUALITY ASSURANCE"}>
                We do quality assurance
              </Collapsible>
            </div>
          </div>
          <div className='w-full md:w-1/3 slide-in md:p-10'>
            <img className='mx-auto my-10' src='https://placehold.co/400x600'></img>
          </div>
        </div>
        <div id='Contact' className='section flex flex-wrap min-h-75vh'>
          <div className='w-full h-full p-10 md:w-1/2 md:h-2/3 mt-28 text-center slide-in'>
            {/* <img src={logo} alt="Klarity logo" className='mx-auto w-24 py-10'></img> */}
            <h1 className='uppercase pb-10'>ready to take your restaurant to the <span className='text-gold'>next level</span>?</h1>
            <h3 className='text-xl'>Contact us today to schedule a consultation. Let's work together to unlock the full potential of your business and create unforgettable experiences for your guests.</h3>
            <button id='contact-btn' className='mt-28'>Contact Us</button>
          </div>
          <div className='w-full h-full md:w-1/2 bg-gray-400 '>
            <img className='slide-in' src='https://placehold.co/760x760'></img>
          </div>
        </div>


      </div>
    </>
  )
}

export default App
