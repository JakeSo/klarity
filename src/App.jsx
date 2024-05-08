import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Navbar />
      <div className='my-16'>
        <div className='section flex flex-wrap h-screen w-full'>
          <div className='w-full h-full p-10 md:w-1/2 text-center slide-in'>
            <img src="#" alt="Klarity logo" className='mx-auto w-fit py-10'></img>
            <h1 className='uppercase pb-10'>helping hospitality businesses thrive in an ever-evolving industry</h1>
            <h4>With our expert guidance and innovative solutions, we're here to elevate your guest experience, optimize operations, and maximize profitability.</h4>
          </div>
          <div className='w-full h-full  md:w-1/2 bg-gray-400 slide-in'>

          </div>
        </div>

      </div>
    </>
  )
}

export default App
