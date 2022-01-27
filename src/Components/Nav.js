import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <>
            <nav className="navbar">
                <Link to="/"> <i className="fas fa-home"></i> <span>home</span> </Link>
                <Link to="/about"> <i className="fas fa-user"></i> <span>about</span> </Link>
                <Link to="/Portfolio"> <i className="fas fa-briefcase"></i> <span>portfolio</span> </Link>
                <Link to="/contact"> <i className="fas fa-address-book"></i> <span>contact</span> </Link>
            </nav>
        </>
    );
}
export default Nav;