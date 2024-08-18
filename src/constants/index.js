import project1 from "../assets/projects/project-1.jpg";
import project2 from "../assets/projects/project-2.jpg";
import project3 from "../assets/projects/project-3.jpg";


export const HERO_CONTENT = `Enthusiastic Full Stack Developer specializing in front-end development with a knack for technologies such as HTML, CSS, Tailwind CSS, Bootstrap, React.js, and JavaScript. Strong working knowledge of MongoDB and Node.js. Ready for hands-on project experiences in a dynamic development environment to apply and further my skills.`;

export const ABOUT_TEXT = `Passionate Full Stack Developer with a strong focus on front-end technologies, including HTML, CSS, Tailwind CSS, Bootstrap, and React.js. Proficient in MongoDB and Node.js, with a commitment to applying and expanding my skills in a dynamic and collaborative environment. Ready to tackle hands-on projects and drive impactful results.`;

export const EXPERIENCES = [
  {
    year: "Dec 2023 - Feb 2024",
    role: "Tech Assiatnce",
    company: "Road To Code",
    description: `Supported independent full stack project development and provided technical assistance to students with coding challenges. Strengthened technical skills in HTML, CSS, Tailwind CSS, Bootstrap, React.js, MongoDB, and Node.js while contributing to effective team collaboration in a dynamic learning environment.`,
    technologies: [ "React.js", "Tailwind CSS", "mongoDB","Express.js","Postman"],
  },
  
];

export const PROJECTS = [
  {
    title: "Aniwatch",
    image: project1,
    description:
      "Dynamic web project built on the MERN stack. Utilizes React for a seamless user experience and MongoDB, Express, and Bootstrap for a robust backend and APIs. The home page is designed for optimal user interaction and visual appeal. Note: Server startup takes 30 seconds.",
    technologies: ["React","Tailwind CSS", "Node.js", "MongoDB","Express.js","Postman"],
  },
  {
    title: "coffee-shop ",
    image: project2,
    description:
      "A React website featuring a beautiful landing page and product page. Built with Bootstrap, it is fully responsive, allowing customers to easily view and purchase coffee products. Efficient React components handle JSON data, creating a clean and interactive user experience.",
    technologies: ["React","Tailwind CSS", "Node.js", "MongoDB","Express.js","Postman"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Tailwind CSS","Magic UI","Farmer Motion", "Node.js"],
  },
  
];

export const CONTACT = {
  address: "Pune, Maharashtra",
  phoneNo: "+91 7715911807",
  email: "Kumarsunny1246@gmail.com",
};
