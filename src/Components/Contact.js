import { useContext } from "react";
import myContext from "../Context/Mycontext";
import Nav from "./Nav"

const Contact = () => {
    const a=useContext(myContext);
    return (
        <>
            <Nav/>
            <section className="contact">

                <h1 className="heading"> contact <span>me</span> </h1>

                <div className="row">

                    <div className="info-container">

                        <h1>get in touch</h1>

                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolorem sunt sapiente vel minus eaque voluptate fugit corrupti omnis tempora?</p>

                        <div className="box-container">

                            <div className="box">
                                <i className="fas fa-map"></i>
                                <div className="info">
                                    <h3>address :</h3>
                                    <p>mumbai, india - 400104</p>
                                </div>
                            </div>

                            <div className="box">
                                <i className="fas fa-envelope"></i>
                                <div className="info">
                                    <h3>email :</h3>
                                    <p>sanashaikh@gmail.com</p>
                                </div>
                            </div>

                            <div className="box">
                                <i className="fas fa-phone"></i>
                                <div className="info">
                                    <h3>number :</h3>
                                    <p>+123-456-7890</p>
                                </div>
                            </div>

                        </div>

                        <div className="share">
                            <a href="#" className="fab fa-facebook-f"></a>
                            <a href="#" className="fab fa-twitter"></a>
                            <a href="#" className="fab fa-instagram"></a>
                            <a href="#" className="fab fa-linkedin"></a>
                        </div>

                    </div>

                    <form action="">

                        <div className="inputBox">
                            <input type="text" placeholder="your name" />
                            <input type="number" placeholder="your number" />
                        </div>

                        <div className="inputBox">
                            <input type="email" placeholder="your email" />
                            <input type="text" placeholder="your subject" />
                        </div>

                        <textarea name="" placeholder="your message" id="" cols="30" rows="10"></textarea>

                        <input type="submit" value="send message" className="btn" />

                    </form>

                </div>

            </section>
        </>
    )
}
export default Contact;