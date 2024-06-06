import { useState } from "react";
import {Link} from "react-router-dom";
import './Navbar.css';
import logo from '../assets/4.svg';
import { Dropdown } from "flowbite-react";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen((isOpen) => !isOpen);
  };

  return (
    <nav className="bg-black fixed top-0 left-0 w-full py-5 z-10">
      <div className="flex items-center justify-between px-8">
        <div className="brand w-1/6">
          <img title="logo" src={logo} className="lg:w-full md:w-1/2" alt="logo" />
        </div>
        <button 
          className="text-white lg:hidden" 
          onClick={toggleMenu}
        >
          &#9776;
        </button>
        <div className="nav-links hidden lg:flex lg:items-center">
          <ul className="flex flex-row space-x-8">
            <li>
              <Dropdown onClick={() => location.href="#Services"} label="Services" className="text-red-50 p-0" inline trigger="hover">
                <Dropdown.Item>Service 1</Dropdown.Item>
                <Dropdown.Item>Service 2</Dropdown.Item>
              </Dropdown>
            </li>
            <li><a href="#" className="text-white py-2">Why Us?</a></li>
            <li><a href="#" className="text-white py-2">Get Started</a></li>
            <li><a href="#" className="text-white py-2">Blog</a></li>
          </ul>
        </div>
      </div>
      <div className={`fixed top-0 right-0 h-full px-12 bg-black transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} transition-transform duration-300 ease-out lg:hidden z-20`}>
        <button className="text-white absolute top-5 right-5" onClick={toggleMenu}>
          &times;
        </button>
        <ul className="flex flex-col items-center mt-20 space-y-8">
          <li><a href="#Services" className="text-white py-2" data-dropdown-toggle="service-dropdown">Services</a></li>
          <li><a href="#" className="text-white py-2">Why Us?</a></li>
          <li><a href="#" className="text-white py-2">Get Started</a></li>
          <li><a href="#" className="text-white py-2">Blog</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
