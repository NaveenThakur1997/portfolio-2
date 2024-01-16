import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  carrent,
  jobit,
  tripguide,
  threejs,
  currency,
  p4,
  passwords,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  
  {
    name: "React JS",
    icon: reactjs,
  },
  
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  
];

const experiences = [
  {
    title: "Jr. Frontend Developer",
    company_name: "TechnoBriX",
    date: "August 2022 - Sept 2023",
    points: [
      "Developing and maintaining web applications using HTML, CSS, React and other related technologies.",
      "Collaborating with cross-functional teams including designers, Team managers, and other developers to create high-quality Frontend.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "Frontned Developer (intern)",
    company_name: "Ai Mantra",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  
  
];

const testimonials = [
  {
    testimonial:
      "Naveen consistently collaborates effectively within a team and has shown a keen ability to solve complex problems. Their dedication to keeping up with the latest technologies and methodologies in the ever-evolving field of web development is truly commendable.",
    name: "Karmanyae Bohray",
    designation: "Sr.Software System designer",
    company: "AMD",
    image: "https://media.licdn.com/dms/image/C5103AQHLyKH5-zc9GQ/profile-displayphoto-shrink_400_400/0/1585072565303?e=1710979200&v=beta&t=Gq0l3vXvd3jv0-iLzuEY1t4UKcGG-tjq_b8BJX9ILrg",
  },
  {
    testimonial:
      " Naveen is a collaborative team player with a strong aptitude for solving complex problems. Their dedication to staying current with the latest web development technologies and methodologies is truly commendable. Highly recommended!",
    name: "Rishabh Soni",
    designation: "Senior Software Engineer ",
    company: "Algoworks",
    image: "https://media.licdn.com/dms/image/D4D03AQE9uoTeEyn52Q/profile-displayphoto-shrink_400_400/0/1696703443475?e=1710979200&v=beta&t=hhJOe31pxeHlWi7u_qg26B7q8t2ig11X6Mqu-WNhDPQ",
  },
  {
    testimonial:
      "Naveen Thakur exhibits a proactive and positive attitude towards work, consistently approaching tasks with enthusiasm and dedication. Their strong work ethic and commitment contribute positively to team dynamics, fostering a collaborative and productive environment.",
    name: "Hitesh Pandey",
    designation: "Senior Quality Analyst",
    company: "OneAssist Consumer Solutions",
    image: "https://media.licdn.com/dms/image/C5103AQFbAlxCISTm0w/profile-displayphoto-shrink_400_400/0/1573931389314?e=1710979200&v=beta&t=9SXYqSFB00L3drJUsRZtH7fRGtncE23FE7aPQxJso80",
  },
];

const projects = [
  {
    name: "E-Commerce",
    description:
      "Web-based platform that allows users that displayes a commendable frontend of a shoe selling store.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/NaveenThakur1997/Project-Dynafit-update",
    live_demo_link: "https://www.linkedin.com/posts/naveen-t-489717253_sheryianscodingschool-sheryians-webdevelopment-activity-7081486492719587328-r8ar?utm_source=share&utm_medium=member_desktop",
  },
  {
    name: "Gaming Interface",
    description:
      "brand-new landing page tailored exclusively for the gaming industry! 🚀🎉 Whether you're a die-hard gamer, a game developer, or just someone who appreciates stunning design, this is for you.",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JS",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/NaveenThakur1997/Apex_Legends_Non_Responsive",
    live_demo_link: "https://www.linkedin.com/posts/naveen-t-489717253_sheryianscodingschool-sheryians-webdevelopment-activity-7098048392534114304-Hq3i/?utm_source=share&utm_medium=member_desktop"
  },
  {
    name: "PhysicsWalla Clone",
    description:
      "I've created a sleek PhysicsWallah website that reflects my skills and passions. 🚀 Take a tour and explore my projects, blogs, and more. Your feedback is highly appreciated!",
    tags: [
      {
        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "JavaScript",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/NaveenThakur1997/Phisicswallahclone",
    live_demo_link: "https://www.linkedin.com/posts/naveen-t-489717253_webdevelopment-phicswallahclone-innovation-activity-7104461267121188864-Fsf5/?utm_source=share&utm_medium=member_desktop"
  },
  {
    name: "Currency Converter",
    description:
      "A currency converter, real time conversion non responsive fast application",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "Javascript",
        color: "pink-text-gradient",
      },
    ],
    image: currency,
    source_code_link: "https://github.com/NaveenThakur1997/React-Currency_Converter",
    live_demo_link: "https://www.linkedin.com/posts/naveen-t-489717253_currencyconverter-financetech-reactjs-activity-7151579206055854081-W1Zy/?utm_source=share&utm_medium=member_desktop"
  },
  {
    name: "Theme Changer",
    description:
      "Tired of the same old website look? With the Theme Changer, you can switch between dark mode 🌙 & vibrant themes 🌈 effortlessly. Personalize your browsing experience your way!",
    tags: [
      {
        name: "DOM",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: p4,
    source_code_link: "https://github.com/NaveenThakur1997/Theme_changer",
    live_demo_link: "https://www.linkedin.com/posts/naveen-t-489717253_linkedincommunity-themechanger-webpersonalization-activity-7100847690648891393-yjTN/?utm_source=share&utm_medium=member_desktop"
  },
  {
    name: "Password Generator",
    description:
      "Secure Passwords Made Simple with html,css,react project using API",
      check: "buttons",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "HTML",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
      
    ],
    image: passwords,
    source_code_link: "https://github.com/NaveenThakur1997/React-Password-Generator",
    live_demo_link: "https://www.linkedin.com/posts/naveen-t-489717253_secure-passwords-made-simple-with-react-activity-7151209506004230145-ukvH/?utm_source=share&utm_medium=member_desktop"
  },
];

export { services, technologies, experiences, testimonials, projects};
