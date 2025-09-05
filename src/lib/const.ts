import { FaGithub, FaLinkedin } from "react-icons/fa6";
import { HiOutlineMail } from "react-icons/hi";

export const RESUME_URL = "/Ahmad_Graham_Software_Engineer_Resume.pdf";
export const EMAIL = "ahmadgrahamdev@gmail.com";

export const SOCIALS = [
    {
        href: "https://github.com/agraham02",
        icon: FaGithub,
        label: "GitHub",
        color: "hover:text-gray-600",
    },
    {
        href: "https://www.linkedin.com/in/ahmad-graham",
        icon: FaLinkedin,
        label: "LinkedIn",
        color: "hover:text-blue-400",
    },
    {
        href: `mailto:${EMAIL}`,
        icon: HiOutlineMail,
        label: "Email",
        color: "hover:text-red-400",
    },
];

export const navItems = [
    { href: "/projects", label: "Projects" },
    { href: "/blog", label: "Blog" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
];
