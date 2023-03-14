import Style from "./../styles/Navbar.module.css";

const Navbar = () => {
    return (
        <nav className={ Style.nav + " shadow"}>
            <div>
                <div className=" logo">
                    <h3>logo</h3>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;