import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Footer } from "flowbite-react";


const Layout = () => {

    const year = new Date().getFullYear();
    return (
        <>
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer >
      <div className="w-full bg-black ">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-3">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">About</Footer.Link>
              <Footer.Link href="#">Careers</Footer.Link>
              <Footer.Link href="#">Brand Center</Footer.Link>
              <Footer.Link href="#">Blog</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="help center" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Discord Server</Footer.Link>
              <Footer.Link href="#">Twitter</Footer.Link>
              <Footer.Link href="#">Facebook</Footer.Link>
              <Footer.Link href="#">Contact Us</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms &amp; Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
          
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between">
          <Footer.Copyright href="#" by="Klarity Restaurant Advisors™" year={year} />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            
          </div>
        </div>
      </div>
    </Footer>
        </>
    )
}

export default Layout;