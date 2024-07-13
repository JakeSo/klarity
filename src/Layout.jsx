import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";


const Layout = () => {

    return (
        <>
            <Navbar />
            <main style={{maxWidth: "1920px", margin: "0 auto"}}>
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default Layout;