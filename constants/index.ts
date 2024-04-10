import { link } from "fs";
import { RxHome, RxPerson, RxDashboard, RxClipboard } from "react-icons/rx";

export const SkillData = [
  {
    name: "Html 5",
    Image: "/html.png",
    width: 80,
    height: 80,
  },
  {
    name: "Css",
    Image: "/css.png",
    width: 80,
    height: 80,
  },
  {
    name: "JavaScript",
    Image: "/js.png",
    width: 65,
    height: 65,
  },
  {
    name: "Tailwind Css",
    Image: "/tailwind.png",
    width: 80,
    height: 80,
  },
  {
    name: "React",
    Image: "/react.png",
    width: 80,
    height: 80,
  },
  {
    name: "Redux",
    Image: "/redux.png",
    width: 80,
    height: 80,
  },

/*  {
    name: "TypeScript",
    Image: "/ts.png",
    width: 80,
    height: 80,
  }, */
  {
    name: "Next js 13",
    Image: "/next.png",
    width: 80,
    height: 80,
  },
  {
    name: "Framer Motion",
    Image: "/framer.png",
    width: 80,
    height: 80,
  },
 /* {
    name: "Stripe Payment",
    Image: "/stripe.webp",
    width: 80,
    height: 80,
  }, */
  {
    name: "Node js",
    Image: "/node-js.png",
    width: 80,
    height: 80,
  },
  {
    name: "Mongo db",
    Image: "/mongodb.png",
    width: 40,
    height: 40,
  },
];

export const Socials = [

  {
    name: "Github",
    src: "/Github.png",
    link: "https://github.com/pprasoon1"
  },

  {
    name: "LinkedIn",
    src: "/LinkedIn.png",
    link: "https://www.linkedin.com/in/pranay-prasoon-967b81266/"
  },
 
  {
    name: "Gmail",
    src: "/gmail.svg",
    
  },
];
export const Projects = [
  {
    title: "ReadZone",
    text: "A personalised book shelf for ignited readers who want all their favourite books, their learnings and related information at one place",
    src: "/ReadZone.jpeg",
  },
  {
    title: "Multiplayer Tic-Tac-Toe game",
    text: "A multiplayer fun and Nostalgic game for all age groups made using html, css, javascript and socket.io",
    src: "/tictactoe.jpg",
  },
  {
    title: "Spotify Clone",
    text: "Cloned Spotify - a popular music straming application with user authentication and login and other functionalities",
    src: "/spotify.png",
  },
  {
    title: "Pinterest Clone",
    text: "Cloned Pinterest - a popular image sharing and social media service application designed to enable saving and discovery of information",
    src: "/pinterest.webp",
  },
];

export const NavLinks = [
  {
    name: "/",
    icon: RxHome,
    link: "/",
  },
  {
    name: "/my-skills",
    icon: RxPerson,
    link: "/my-skills",
  },
  {
    name: "/my-projects",
    icon: RxDashboard,
    link: "/my-projects",
  },
  {
    name: "/contact-me",
    icon: RxClipboard,
    link: "/contact-me",
  },
];