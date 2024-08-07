import { useState } from "react";
import './Navbar.css';
import logo from '../assets/4.svg';
import { Dropdown } from "flowbite-react";
import { NavLink } from "react-router-dom";
import Button from "./Button";
import { ContactForm } from "./ContactForm";
const dropDownTheme = {
  floating: {
    style: {
      auto: "bg-gold text-black"
    },
    item: {
      base: "flex w-full cursor-pointer items-center justify-start px-4 py-2 text-base text-black hover:bg-black focus:bg-black focus:outline-none focus:text-gold"
    }
}
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  const scrollToTop = () => {
    window.scrollTo(0,0);
  }

  return (
    <nav className="bg-black fixed top-0 left-0 w-full py-5 z-10">
      <div className="flex items-center justify-between px-8">
        <div className="brand w-1/3 md:w-1/6">
          <NavLink to="/"><img title="logo" src={logo} className="lg:w-full max-w-40 md:w-1/2" alt="Klarity Logo"  onClick={scrollToTop}/></NavLink>
        </div>
        <button 
          className="text-white lg:hidden" 
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <div className="nav-links hidden lg:flex lg:items-center">
          <ul className="flex flex-row space-x-8">
          <li className="my-auto"><NavLink onClick={scrollToTop} to="/About/" className="text-white py-2 text-3xl">About</NavLink></li>
          <li className="my-auto"><Button id='contact-btn' className="p-4 " size={"3xl"} onClick={() => setOpenModal(true)}>Contact Us</Button></li>
          
             {/* 
             <li>
               <Dropdown label="Services" theme={dropDownTheme} inline trigger="hover">
                 <Dropdown.Item as={NavLink}>Service 1</Dropdown.Item>
                 <Dropdown.Item as={NavLink}>Service 2</Dropdown.Item>
                 <Dropdown.Item as={NavLink}>Service 3</Dropdown.Item>
               </Dropdown>
             </li>
             <li><a href="#Why"  className="text-white py-2">Why Us? </a></li>
             <li><a href="#Contact" className="text-white py-2">Get Started</a></li>
             <li><NavLink to="/Blog" className="text-white py-2">Blog</NavLink></li> */}
          </ul>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full px-12 bg-black transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-out lg:hidden z-20`}>
        <button className="text-white absolute top-5 right-5" onClick={toggleMenu}>
          &times;
        </button>
        <ul className="flex flex-col items-center mt-20 ">
        <li className="my-auto"><NavLink to="/About/" className="text-white" onClick={() => { toggleMenu(); scrollToTop(); }}>About</NavLink></li>
          <li><Button id='contact-btn' className="p-4" size={""} onClick={() => setOpenModal(true)}>Contact Us</Button></li>
            {/* <li><NavLink to="/About" className="text-white py-2">About</NavLink></li>
            <li>
              <Dropdown theme={dropDownTheme} label="Services" inline trigger="hover">
                <Dropdown.Item  as={NavLink}>Service 1</Dropdown.Item>
                <Dropdown.Item as={NavLink}>Service 2</Dropdown.Item>
              </Dropdown>
            </li>
            <li><a href="#Why"  className="text-white py-2">Why Us? </a></li>
            <li><a href="#Contact" className="text-white py-2">Get Started</a></li>
            <li><NavLink to="/Blog" className="text-white py-2">Blog</NavLink></li> */}
          </ul>
      </div>
      <ContactForm openModal={openModal} onCloseModal={setOpenModal} />
    </nav>
    
  );
}

export default Navbar;
