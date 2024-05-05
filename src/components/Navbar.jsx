import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="bg-[#1E1F20] absolute top-0 left-0 w-full py-5">
            <div className="flex">

            
            <div className="brand">
                <img title="logo" src=""></img>
            </div>
            <div className="nav-links ms-auto me-4">
                <ul>
                    <a href="#">Services</a>
                    <a href="#">Why Us?</a>
                    <a href="#">Get Started</a>
                    <a href="#">Blog</a>
                </ul>
            </div>
            </div>
        </nav>
    )
}

export default Navbar;
