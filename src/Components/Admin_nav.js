import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import myContext from '../Context/Mycontext';
import "../css/LoginAdminPannel.css";
const Admin_nav = () => {
    const p=useContext(myContext);
    return (<>
        <div className="wrapper">
            <input type="checkbox" id="btn" hidden />
            <label for="btn" className="menu-btn">
                <i className="fas fa-bars"></i>
                <i className="fas fa-times"></i>
            </label>
            <nav id="sidebar">
                <div className="title">
                    Side Menu
                </div>
                <ul className="list-items">
                    <li><Link to="/admin/profile"><i className="fas fa-home"></i>Profile</Link></li>
                    <li><Link to="/admin/massages"><i className="fas fa-sliders-h"></i>Massages</Link></li>
                    <li><Link to="/admin/projects"><i className="fas fa-address-book"></i>Projects</Link></li>
                    <li><Link to="/admin/analytics"><i className="fas fa-cog"></i>Analysits</Link></li>
                    <li><Link to="#"><i className="fas fa-stream"></i>Features</Link></li>
                    <li><Link to="#"><i className="fas fa-user"></i>About us</Link></li>
                    <li><Link to="#"><i className="fas fa-globe-asia"></i>Languages</Link></li>
                    <li><Link to="#" onClick={p.update}><i className="fas fa-envelope"></i>Logout</Link></li>
                    <div className="icons">
                        <Link to="#"><i className="fab fa-facebook-f"></i></Link>
                        <Link to="#"><i className="fab fa-twitter"></i></Link>
                        <Link to="#"><i className="fab fa-github"></i></Link>
                        <Link to="#"><i className="fab fa-youtube"></i></Link>
                    </div>
                </ul>
            </nav>
        </div>
    </>)
};

export default Admin_nav;
