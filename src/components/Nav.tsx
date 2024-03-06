import React from "react";
import "../styles/Nav.css";

export default function Nav() {
    return (
        <nav className="flex justify-between px-3 py-2 fixed top-0 z-50 border w-full">
            <div className="border-2 border-black rounded-md p-2 px-6 cursor-pointer">
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

function NavLink({ text }) {
    return (
        <div className="px-4 h-4/5 items-center flex cursor-pointer hover:text-sky-700">
            {text}
        </div>
    );
}
