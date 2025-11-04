import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {

    return (
        <>
            <Navbar />
            <main className={`mt-16 mx-auto md:mt-0 max-w-7xl`}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;