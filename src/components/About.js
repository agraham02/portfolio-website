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
        <div>
            <div id="scrollSection" className="scrolly">
                <div className="left">
                    <AboutTextSection text={text1} />
                    <AboutTextSection text={text2} />
                    <AboutTextSection text={text3} />
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
            <div>Resume</div>
        </div>
    );
}

function AboutTextSection({ text }) {
    return (
        <div className="h-[1000px] p-4 flex items-center justify-center border-green-700 border">
            <p className="">{text}</p>
        </div>
    );
}
