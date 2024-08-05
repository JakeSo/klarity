import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {

    return (
        <>
            <Navbar />
            <main style={{maxWidth: "1920px"}} className={`mt-16 mx-auto md:mt-0 ${window.location.pathname.toUpperCase().includes('ABOUT') && "bg-gold"}`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;