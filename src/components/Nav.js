import React from "react";
import "../styles/Nav.css";

export default function Nav() {
    return (
        <nav className="flex justify-between px-3 py-2">
            <div className="border-2 border-black rounded-md p-2 px-6">
                <div>AG</div>
            </div>
            <div className="flex space-x-6 items-center">
                <NavLink text="Projects" />
                <NavLink text="About" />
                <NavLink text="Contact" />
            </div>
        </nav>
    );
}

function NavLink({text}) {
    return <div className="px-4 h-4/5 items-center flex">{text}</div>
}
