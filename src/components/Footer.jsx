
const Footer = () => {

        const year = new Date().getFullYear();
      
        return (
          <footer className="bg-black text-white py-6">
            <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
              <div className="text-center md:text-left">
                <h5 className="text-xl font-bold mb-2">Klarity Restaurant Advisors</h5>
                <p>&copy; {year} Klarity Restaurant Advisors. All rights reserved.</p>
              </div>
              <div className="mt-4 md:mt-0">
                <ul className="flex justify-center md:justify-end space-x-4">
                  <li><a href="/" className="hover:text-gray-400">Home</a></li>
                  <li><a href="/About" className="hover:text-gray-400">About</a></li>
                  <li><a href="/Services" className="hover:text-gray-400">Services</a></li>
                  <li><a href="/#Contact" className="hover:text-gray-400">Contact</a></li>
                </ul>
              </div>
            </div>
          </footer>
        );
      
    
}

export default Footer;