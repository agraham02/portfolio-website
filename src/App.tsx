import "./styles/App.css";
// import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
// import AboutMe from "./components/About";
// import Contact from "./components/Contact";
// import StatsBanner from "./components/StatsBanner";
import UnderConstruction from "./components/UnderConstruction";

function App() {
    return (
        <>
            {/* <Nav /> */}
            <Header />
            <main>
                <Projects />
                {/* <AboutMe /> */}
                {/* <StatsBanner /> */}
                {/* <Contact /> */}
                <UnderConstruction />
            </main>
            <Footer />
        </>
    );
}

export default App;
