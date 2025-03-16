import project1 from "../assets/projects/project-1.png";
import project2 from "../assets/projects/project-2.png";
import project3 from "../assets/projects/project-3.png";


export const HERO_CONTENT = `Enthusiastic and detail-oriented Full-Stack Developer with expertise in front-end and back-end technologies, including

HTML, CSS, Next.js, React.js, Node.js, MongoDB, and Express.js. Proficient in building dynamic, responsive, and user-
friendly web applications using modern frameworks like Tailwind CSS, Bootstrap, and Framer Motion. Eager to contribute

to innovative projects in a collaborative environment while further enhancing technical and problem-solving skills.`;

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
    link:"https://aniwatch-daj0.onrender.com/",
    description:
      "Dynamic web project built on the MERN stack. Utilizes React for a seamless user experience and MongoDB, Express, and Bootstrap for a robust backend and APIs. The home page is designed for optimal user interaction and visual appeal. Note: Server startup takes 30 seconds.",
    technologies: ["React","Tailwind CSS", "Node.js", "MongoDB","Express.js","Postman"],
  },
  {
    title: "coffee-shop ",
    image: project2,
    link:"https://coffee-shop17.vercel.app/",
    description:
      "A React website featuring a beautiful landing page and product page. Built with Bootstrap, it is fully responsive, allowing customers to easily view and purchase coffee products. Efficient React components handle JSON data, creating a clean and interactive user experience.",
    technologies: ["React","Tailwind CSS", "Node.js", "MongoDB","Express.js","Postman"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    link:"https://sunnykumar.vercel.app/",
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React","Tailwind CSS","Magic UI","Framer Motion", "Node.js"],
  },
  
];

export const CONTACT = {
  address: "Pune, Maharashtra",
  phoneNo: "+91 7715911807",
  email: "Kumarsunny1246@gmail.com",
};
