import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {

        const year = new Date().getFullYear();
      
        return (
          <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <h5 className="text-xl font-bold mb-2">Klarity Restaurant Advisors</h5>
                <p>&copy; {year} Klarity Restaurant Advisors. All rights reserved.</p>
              </div>
              <div className="md:absolute md:left-1/2">
                <div className="flex flex-row text-2xl py-2 gap-4 my-auto justify-evenly">
                  <a href="https://www.linkedin.com/in/brian-burchill-5643324a/"><FontAwesomeIcon icon={faLinkedin} /></a>
                  <a href="https://www.instagram.com/klarity_restaurant_advisors_"><FontAwesomeIcon icon={faInstagram} /></a>
                </div>
              </div>
              <div className="mb-4">
                <ul className="flex justify-center md:justify-end space-x-4">
                  <li><a href="/" className="hover:text-gray-400">Home</a></li>
                  <li><a href="/About" className="hover:text-gray-400">About</a></li>
                  {/* <li><a href="/Services" className="hover:text-gray-400">Services</a></li>
                  <li><a href="/#Contact" className="hover:text-gray-400">Contact</a></li> */}
                </ul>
              </div>
            </div>
          </footer>
        );
      
    
}

export default Footer;