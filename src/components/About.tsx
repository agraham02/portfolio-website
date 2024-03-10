import { useEffect, useState } from "react";
import "../styles/About.css";
import number1 from "../assets/number1.png";
import number2 from "../assets/number2.png";
import number3 from "../assets/number3.png";

export default function AboutMe() {
    // const NUMBER_OF_SECTIONS = 3;
    const [currentSectionIndex, setCurrentSectionIndex] = useState(0);
    // let needToChangeMedia = false;

    const text1 = `Hello there! I'm [Your Name], a passionate and dedicated Full-Stack Software Engineer with a knack for solving
    complex problems and transforming ideas into tangible solutions. My journey in tech began [X years] ago, and since then, I've 
    been immersed in coding, learning, and evolving alongside the rapidly changing tech landscape. My expertise spans from 
    crafting intricate backend systems to designing intuitive user interfaces, ensuring a seamless and robust user experience 
    from start to finish. With a Bachelor's degree in Computer Science and a continuous hunger for knowledge, I've honed my skills 
    in [list some technologies you're skilled in, e.g., JavaScript, React, Node.js, Python, etc.], always aiming to leverage the latest 
    technologies to drive innovation.`;
    const text2 = `What sets me apart is not just my technical abilities but my approach to software development. I'm a firm believer in the power 
        of teamwork, clear communication, and empathy, values that have guided me through various successful projects. My portfolio 
        showcases a range of projects that illustrate my ability to tackle challenges head-on, whether it's developing a scalable web 
        application for a startup or optimizing an existing system for better performance and user experience. Each project has been a 
        stepping stone, further fueling my dedication to crafting software solutions that make a difference.`;
    const text3 = `Beyond the world of code, I'm an avid learner, always curious about new technologies and methodologies that can enhance 
    my skills and contribute to my projects. When I'm not glued to my computer screen, you might find me exploring the great outdoors, 
    reading up on the latest tech trends, or mentoring budding software engineers. I'm eager to collaborate with innovative teams and 
    individuals who are passionate about making an impact through technology. Let's connect and create something amazing together!`;

    // async function changeSectionIndex(newIndex) {
    //     if (currentSectionIndex !== newIndex) {
    //         console.log("i ran" + newIndex + "," + currentSectionIndex);
    //         await Promise.resolve(setCurrentSectionIndex(newIndex));
    //     }
    // }

    function scrollDetection() {
        window.addEventListener("scroll", () => {
            const startScroll = window.scrollY;
            const endScroll = startScroll + window.innerHeight;
            const scrollMiddle = (startScroll + endScroll) / 2;

            const section = document.getElementById("scrollSection");

            const sectionTop = section!.offsetTop;
            const sectionHeight = section!.offsetHeight;
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
                        setCurrentSectionIndex(0);
                    }
                    return;
                } else if (percentage < 66.6) {
                    if (currentSectionIndex !== 1) {
                        setCurrentSectionIndex(1);
                    }
                    return;
                } else if (percentage < 100) {
                    if (currentSectionIndex !== 2) {
                        setCurrentSectionIndex(2);
                    }
                    return;
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
                    <AboutMediaSection
                        currentSectionIndex={currentSectionIndex}
                    />
                </div>
            </div>
            <div>Resume</div>
        </div>
    );
}

function AboutTextSection({ text }: { text: string }) {
    return (
        <div className="px-10 py-28 text-lg  flex items-center justify-center">
            <p className="">{text}</p>
        </div>
    );
}

function AboutMediaSection({
    currentSectionIndex,
}: {
    currentSectionIndex: number;
}) {
    const media = [number1, number2, number3];

    function changeImage() {
        const aboutMediaSection = document.getElementById("aboutMedia");

        aboutMediaSection!.style.backgroundImage = `url(${media[currentSectionIndex]})`;
    }

    useEffect(() => {
        // console.log(currentSectionIndex);
        changeImage();
    }, [currentSectionIndex]);

    return (
        <div
            id="aboutMedia"
            className="border border-red-500 h-full bg-cover bg-no-repeat bg-center"
        ></div>
    );
}
