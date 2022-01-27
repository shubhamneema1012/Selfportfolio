import Nav from "./Nav";
import Projects from "./Projects";
const Portfolio = () => {
    return (
        <>
        <Nav/>
            <section className="portfolio">
                <h1 className="heading"> <span>my</span> work </h1>
                <div className="box-container">
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                    <Projects />
                </div>
                <a href="#" className="btn"> load more <i className="fas fa-redo"></i> </a>
            </section>
        </>
    );
}
export default Portfolio;