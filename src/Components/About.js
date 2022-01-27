import Nav from "./Nav";

const About = () => {
    return (
        <>
        <Nav/>
            <section className="about">

                <h1 className="heading"> about <span>me</span> </h1>

                <div className="row">

                    <div className="info-container">

                        <h1>personal info</h1>

                        <div className="box-container">

                            <div className="box">
                                <h3> <span>name : </span> sana shaikh </h3>
                                <h3> <span>age : </span> 22 </h3>
                                <h3> <span>email : </span> sanashaikh@gmail.com </h3>
                                <h3> <span>address : </span> mumbai, india - 400104 </h3>
                            </div>

                            <div className="box">
                                <h3> <span>freelance : </span> available </h3>
                                <h3> <span>skill : </span> front-end </h3>
                                <h3> <span>experience : </span> 2 years </h3>
                                <h3> <span>language : </span> hindi, english </h3>
                            </div>

                        </div>

                        <a href="#" className="btn"> download CV <i className="fas fa-download"></i> </a>

                    </div>

                    <div className="count-container">

                        <div className="box">
                            <h3>2+</h3>
                            <p>years of experience</p>
                        </div>

                        <div className="box">
                            <h3>450+</h3>
                            <p>happy clients</p>
                        </div>

                        <div className="box">
                            <h3>390+</h3>
                            <p>project completed</p>
                        </div>

                        <div className="box">
                            <h3>10+</h3>
                            <p>awards won</p>
                        </div>

                    </div>

                </div>

            </section>
        </>
    );
}
export default About;