import "../styles/UnderConstruction.css";

export default function UnderConstruction() {
    return (
        <div
            className="overflow-hidden w-full h-60 text-white flex items-center"
            style={{
                background:
                    "radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%)",
            }}
        >
            <div className="overlay"></div>
            <div className="stars" aria-hidden="true"></div>
            <div className="starts2" aria-hidden="true"></div>
            <div className="stars3" aria-hidden="true"></div>
            <div className="main">
                <section className="contact">
                    <h1 className="title text-center text-4xl">More Awesome Things Coming Soon...</h1>
                    <h2 className="sub-title">Site Under Construction</h2>
                </section>
            </div>
        </div>
    );
}
