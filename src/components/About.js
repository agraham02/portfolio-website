import React, { useEffect, useState } from "react";
import "../styles/About.css";
import number1 from "../assets/number1.png";
import number2 from "../assets/number2.png";
import number3 from "../assets/number3.png";

export default function AboutMe() {
    const NUMBER_OF_SECTIONS = 3;
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    let needToChangeMedia = false;

    const text1 =
        "1Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";
    const text2 =
        "2Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";
    const text3 =
        "3Lorem ipsum dolor sit amet, consectetur adipiscing elit Proin sagittis quam nec mauris luctus, sed mollis est luctus. Morbi ut semper erat. Nulla congue sagittis suscipit. Nunc imperdiet neque sit amet risus ultrices, fermentum mollis tellus tincidunt.";

    async function changeSectionIndex(newIndex) {
        if (currentSectionIndex !== newIndex) {
            console.log("i ran" + newIndex + "," + currentSectionIndex);
            await Promise.resolve(setCurrentSectionIndex(newIndex));
        }
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

                // let newIndex;
                if (percentage < 33.3) {
                    if (currentSectionIndex !== 0) {
                        // console.log("first section");
                        // newIndex = 0;
                        setCurrentSectionIndex(0);
                    }
                    return;
                } else if (percentage < 66.6) {
                    if (currentSectionIndex !== 1) {
                        // console.log("second section");
                        // newIndex = 1;
                        setCurrentSectionIndex(1);
                    }
                    return;
                } else if (percentage < 100) {
                    if (currentSectionIndex !== 2) {
                        // console.log("third section");
                        // newIndex = 2;
                        setCurrentSectionIndex(2);
                    }
                    return;
                }
                // changeSectionIndex(newIndex);
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
                    <AboutMediaSection
                        currentSectionIndex={currentSectionIndex}
                    />
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

function AboutMediaSection({ currentSectionIndex }) {
    const media = [number1, number2, number3];
    return (
        // <div id="aboutMedia" className="bar-outer">
        //     <div
        //         className="bar-inner"
        //         style={{ width: `${currentSectionIndex * 20}%` }}
        //     ></div>
        // </div>
        <div id="aboutMedia">
            <img src={media[currentSectionIndex]} />
        </div>
    );
}
