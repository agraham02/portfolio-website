import React from "react";
import "../styles/About.css";

export default function AboutMe() {
    const text1 =
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";
    const text2 =
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";
    const text3 =
        "3Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";

    return (
        <div className="scrolly">
            <div className="left">
                <div className="step" data-width="10%" data-index="0">
                    <p>Bar is 10%</p>
                </div>
                <div className="step" data-width="90%" data-index="1">
                    <p>Bar is 90%</p>
                </div>
                <div className="step" data-width="50%" data-index="2">
                    <p>Bar is 50%</p>
                </div>
            </div>
            <div className="right">
                <div className="bar-outer">
                    <div className="bar-inner"></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl">About</h2>
            <div className="border border-red-700 w-full">
                <AboutSection text={text1} />
                <AboutSection text={text2} />
                <AboutSection text={text3} />
            </div>
            <div>
                <div>Resume</div>
            </div>
        </div>
    );
}

function AboutSection({ text, media }) {
    return (
        <div className="flex items-center justify-around my-96 border-green-700 border relative">
            <p className="w-[500px]">{text}</p>
            <div className="w-[200px] h-[200px] border sticky top-0"></div>
        </div>
    );
}
