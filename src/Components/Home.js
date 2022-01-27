import { useContext } from "react";
import { Link } from "react-router-dom";
import myContext from "../Context/Mycontext";
import profile from "../images/user.png";
import Nav from "./Nav";
const Home = () => {
    const a=useContext(myContext);
    return (
        <>
            <Nav/>
            <section className="home">
                <div className="image">
                    <img src={profile} alt="" />
                </div>
                <div className="content">
                    <h3>hi, i am {a.FullName}</h3>
                    <span>front-end developer</span>
                    <p>My top skill is psd to html and html to react and i can also responsive. i can build modern websites </p>
                    <Link to="/about" className="btn"> about me <i className="fas fa-user"></i> </Link>
                </div>
            </section>
        </>
    )
}
export default Home;