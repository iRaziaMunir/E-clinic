const Navbar = () => {
    return(
        <>
        <nav className="flex items-center justify-around py-6 bg-[#ECECEC]">
            <div>
                <a href="/" className="text-xl font-semibold tracking-wider"><span className="text-[#007E85]">Health</span><span className="text-lime-600">care</span></a>
            </div>
            <span className="lg:hidden block"><a href="#">Hamburger</a></span>
            <ul className="lg:flex items-center justify-between gap-4 tracking-wide font-normal hidden">
                <li className="hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85]"><a href="/">Home</a></li>
                <li className="hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85]"><a href="#">Service</a></li>
                <li className="hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85]"><a href="#">Contact Us</a></li>
                <li className="hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85]"><a href="#">Help</a></li>
                <li className="hover:text-[#007E85] hover:border-b-2 hover:border-[#007E85]"><a href="#">Blogs</a></li>
            </ul>
            <div className="lg:flex items-cnetre justify-between gap-1 hidden">
                <a href="/" className="text-[#007E85] hover:text-[#fff] hover:bg-[#007E85] px-[30px] py-[13px] rounded-lg">Sign Up</a>
                <a href="/" className="text-[#007E85] hover:text-[#fff] hover:bg-[#007E85] px-[30px] py-[13px] rounded-lg">Log In</a>
            </div>
        </nav>
        </>
    )
}
export default Navbar;