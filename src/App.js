import logo from "./logo.svg";
import "./styles/App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Projects from "./components/Projects";
import AboutMe from "./components/AboutMe";

function App() {
    return (
        <>
            <Nav />
            <Header />
            <Projects />
            <AboutMe />
            <Footer />
        </>
    );
}

export default App;
