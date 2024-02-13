import React, { useState } from "react";
import "../styles/About.css";

export default function AboutMe() {
    const NUMBER_OF_SECTIONS = 3;
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    const text1 =
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";
    const text2 =
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";
    const text3 =
        "3Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";

    function changeSectionIndex(newIndex) {
        if (currentSectionIndex !== newIndex) setCurrentSectionIndex(newIndex);
    }

    function scrollDetection() {
        window.addEventListener("scroll", () => {
            const startScroll = window.scrollY;
            const endScroll = startScroll + window.innerHeight;
            const scrollMiddle = (startScroll + endScroll) / 2;

            const section = document.getElementById("scrollSection");

            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionBotom = sectionTop + sectionHeight;

            if (scrollMiddle > sectionTop && scrollMiddle < sectionBotom) {
                const percentage =
                    ((scrollMiddle - sectionTop) /
                        (sectionBotom - sectionTop)) *
                    100;
                // console.log(`Percentage of section: ${percentage.toFixed(2)}%`);

                if (percentage < 33.3) {
                    // console.log("first section");
                    changeSectionIndex(0);
                } else if (percentage < 66.6) {
                    // console.log("second section");
                    changeSectionIndex(1);
                } else {
                    // console.log("third section");
                    changeSectionIndex(2);
                }
            }
        });
    }

    scrollDetection();

    return (
        <div id="scrollSection" className="scrolly">
            <div className="left">
                <div className="step" data-width="10%" data-index="0">
                    <div className="content">
                        <p>Bar is 10%</p>
                    </div>
                </div>
                <div className="step" data-width="90%" data-index="1">
                    <div className="content">
                        <p>Bar is 90%</p>
                    </div>
                </div>
                <div className="step" data-width="50%" data-index="2">
                    <AboutLeftSection />
                </div>
            </div>
            <div className="right">
                <div className="bar-outer">
                    <div
                        className="bar-inner"
                        style={{ width: `${currentSectionIndex * 20}%` }}
                    ></div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="flex flex-col justify-center items-center">
            <h2 className="text-5xl">About</h2>
            <div className="border border-red-700 w-full">
                <AboutLeftSection text={text1} />
                <AboutLeftSection text={text2} />
                <AboutLeftSection text={text3} />
            </div>
            <div>
                <div>Resume</div>
            </div>
        </div>
    );
}

function AboutLeftSection({ text }) {
    return (
        <div className="flex items-center justify-around my-96 border-green-700 border relative">
            <p className="w-[500px]">{text}</p>
            <div className="w-[200px] h-[200px] border sticky top-0"></div>
        </div>
    );
}
