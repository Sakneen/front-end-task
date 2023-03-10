import Style from "./../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={ Style.nav}>
            <div className=" ">
                <div className=" logo">
                    <h3>this is logo</h3>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;