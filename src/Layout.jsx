import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {

    return (
        <>
            <Navbar />
            <main style={{maxWidth: "1920px"}} className={`mt-16 mx-auto md:mt-0`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;