import { AiOutlineCalendar } from "react-icons/ai";
import { TfiRulerPencil } from "react-icons/tfi";
import { VscFileSubmodule } from "react-icons/vsc";
import { BiUser } from "react-icons/bi";

export const home = [
  {
    icon: <AiOutlineCalendar size={25} />,
    title: "10+ years of market experience",
  },
  {
    icon: <TfiRulerPencil size={25} />,
    title: "Unique technologies & modern approach ",
  },
  {
    icon: <VscFileSubmodule size={25} />,
    title: "100+ cuccessful cases in portfolio",
  },
  {
    icon: <BiUser size={25} />,
    title: "Customer satisfaction is our top priority",
  },
];
export const expertise = [
  {
    id: `#mining-and-civil-engg`,
    title: "Mining & Civil Engineering Design",
    cover: "../images/e1.jpg",
    desc: [
      { text: "Surface and underground excavation design" },
      { text: "Stability analysis and evaluation" },
      { text: "3D modeling and visualization" },
      { text: "Permitting and regulatory compliance" },
    ],
  },
  {
    id: `#mineral-resource-assessment`,
    title: "Mineral Resource Assessment",
    cover: "../images/e2.jpg",
    desc: [
      { text: "Scoping studies for resource potential" },
      { text: "Prefeasibility and feasibility studies" },
      { text: "Geological and geotechnical analysis" },
      { text: "Mineral reserve estimation and economic analysis" },
    ],
  },
  {
    id: `#mine-safety-and-ventilation`,
    title: "Mine Safety & Ventilation",
    cover: "../images/e3.jpg",
    desc: [
      { text: "Ventilation system design and planning" },
      { text: "Air quality monitoring and control" },
      { text: "Safety audits and risk assessments" },
      { text: "Emergency preparedness and response plans" },
    ],
  },
  {
    id: `#mining-education-and-training`,
    title: "Mining Education & Training",
    cover: "../images/e4.jpg",
    desc: [
      { text: "Mining operations and procedures training" },
      { text: "Mine safety and health training" },
      { text: "Geotechnical engineering training" },
      { text: "Customized training programs" },
    ],
  },
  {
    id: `#automation-solutions`,
    title: "Automation Solutions",
    cover: "../images/e1.jpg",
    desc: [
      { text: "Development of automated mining equipment" },
      { text: "Data acquisition and analysis for automation" },
      { text: "Integration of automation with existing systems" },
      { text: "Safety and efficiency improvements through automation" },
    ],
  },
  {
    id: `#geotechnical-expertise`,
    title: "Geotechnical Expertise",
    cover: "../images/e2.jpg",
    desc: [
      { text: "Site investigation and characterization" },
      { text: "Slope stability analysis and risk mitigation" },
      { text: "Foundation design and analysis" },
      { text: "Geotechnical monitoring and instrumentation" },
    ],
  },
];

export const testimonial = [
  {
    id: 1,
    name: "Alexander Black",
    cover: "../images/e1.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 2,
    name: "Diana Green",
    cover: "../images/e2.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
  {
    id: 3,
    name: "Alexander Black",
    cover: "../images/e3.jpg",
    post: "Seven consulting - CEO",
    desc: "Nunc fermentum - tempus erat ligula, sit amet lacinia justo cursus ac. Suspendisse quis nulla tincidunt! Lorem ipsum dolor amet at ornare ex, quis fringilla tortor! Nunc consectetur feugiat rutrum. Sed rhoncus sapien!",
  },
  {
    id: 4,
    name: "Diana Green",
    cover: "../images/e4.jpg",
    post: "Seven Arts - marketing manager",
    desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet.",
  },
];
export const projects = [
  {
    id: 1,
    title: "Open-Cast Mine Design",
    date: "1st June 2022",
    cover:
      "https://res.cloudinary.com/dh4qhdszo/image/upload/v1716559373/mgstucson/bvd5dvrzeh9lc1mglhlm.jpg",
    imgsrc: "Image source: abcdef company",
    mine: "Chikla Mines, Maharashtra",
    desc: [
      {
        text: "This is a project based on the effective mining in highly steeping ground",
      },
      {
        text: "Lorem ipsum dolor imet  et a ssgw4 tgss ewra sds ss c x drhe Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cum illum aperiam iste aspernatur nihil amet consectetur perferendis, ipsum officia excepturi incidunt cumque.",
      },
      {
        text: "lorem ipsum dolor sit amet, consectetur adipisicing elit. Cum illum aperiam iste aspernatur nihil amet consectetur perferendis, ipsum officia excepturi incidunt cumque.",
      },
    ],
    testimonial: {
      name: "Diana Green",
      cover: "../images/e4.jpg",
      post: "Seven Arts - marketing manager",
      desc: "Cras at ornare fermentum quam et tortor euismod, vel maximus metus tristique at ornare ex, quis fringilla tortor. Aenean semper neque quis consectetur lobortis. Quisque nec convallis ex. Aenean ut metus et nunc cursus aliquet. Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis nisi, officia tempore sunt necessitatibus minus eos provident odit cupiditate minima sequi blanditiis. Molestias. ",
      projectId: 1,
    },
  },
  {
    id: 2,
    title: "Underground Mine Development",
    date: "1st February 2023",
    cover: "https://res.cloudinary.com/dh4qhdszo/image/upload/v1716559373/mgstucson/bvd5dvrzeh9lc1mglhlm.jpg",
    imgsrc: "Image source: xyz company",
    mine: "Dharwar Mines, Karnataka",
    desc: [
      {
        text: "This project focuses on underground mine development and its challenges",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
      },
    ],
    testimonial: {
      name: "John Doe",
      cover: "../images/e1.jpg",
      post: "XYZ Corp - project manager",
      desc: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.",
      projectId: 2,
    },
  },
  {
    id: 3,
    title: "3D Mine Modeling",
    date: "1st March 2023",
    cover: "https://res.cloudinary.com/dh4qhdszo/image/upload/v1716559373/mgstucson/bvd5dvrzeh9lc1mglhlm.jpg",
    imgsrc: "Image source: uvw company",
    mine: "Hatti Gold Mines, Karnataka",
    desc: [
      {
        text: "Creating a 3D model for better mine planning and safety measures",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
      },
    ],
    testimonial: {
      name: "Jane Smith",
      cover: "../images/e2.jpg",
      post: "UVW Corp - design lead",
      desc: "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur.",
      projectId: 3,
    },
  },
  {
    id: 4,
    title: "Ventilation System Design",
    date: "1st April 2023",
    cover: "https://res.cloudinary.com/dh4qhdszo/image/upload/v1716559373/mgstucson/bvd5dvrzeh9lc1mglhlm.jpg",
    imgsrc: "Image source: rst company",
    mine: "Singrauli Coal Mines, Madhya Pradesh",
    desc: [
      {
        text: "Designing an effective ventilation system for underground mines",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
      },
    ],
    testimonial: {
      name: "Robert Brown",
      cover: "../images/e2.jpg",
      post: "RST Ltd - ventilation engineer",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.",
      projectId: 4,
    },
  },
  {
    id: 5,
    title: "Automated Drilling Equipment",
    date: "1st May 2023",
    cover: "https://res.cloudinary.com/dh4qhdszo/image/upload/v1716559373/mgstucson/bvd5dvrzeh9lc1mglhlm.jpg",
    imgsrc: "Image source: mno company",
    mine: "Korba Mines, Chhattisgarh",
    desc: [
      {
        text: "Implementing automated drilling equipment to improve efficiency",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        text: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
      },
    ],
    testimonial: {
      name: "Emily White",
      cover: "../images/e4.jpg",
      post: "MNO Corp - operations manager",
      desc: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.",
      projectId: 5,
    },
  },
  {
    id: 6,
    title: "Geotechnical Site Investigation",
    date: "1st June 2023",
    cover: "https://res.cloudinary.com/dh4qhdszo/image/upload/v1716559373/mgstucson/bvd5dvrzeh9lc1mglhlm.jpg",
    imgsrc: "Image source: pqr company",
    mine: "Joda Mines, Odisha",
    desc: [
      {
        text: "Conducting geotechnical investigations for safe mine construction",
      },
      {
        text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      },
      {
        text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.",
      },
    ],
    testimonial: {
      name: "Michael Black",
      cover: "../images/e1.jpg",
      post: "PQR Ltd - geotechnical engineer",
      desc: "Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.",
      projectId: 6,
    },
  },
];

export const brand = [
  {
    id: 1,
    cover: "../images/cojag.png",
  },
  {
    id: 2,
    cover: "../images/natsol2.png",
  },
  {
    id: 3,
    cover: "../images/l3.svg",
  },
  {
    id: 4,
    cover: "../images/enviro.png",
  },
  // {
  //   id: 5,
  //   cover: "../images/l5.svg",
  // },
  // {
  //   id: 6,
  //   cover: "../images/l6.svg",
  // },
];
export const blogdata = [
  {
    id: 1,
    title: "Ligula vel urna accumsan placerat",
    cover: "../images/b1.webp",
    catgeory: "INDUSTRY",
    date: "JANUARY 12, 2023",
  },
  {
    id: 2,
    title: "Don’t underestimate the lorem ipsum dolor amet",
    cover: "../images/b2.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 20, 2023",
  },
  {
    id: 3,
    title:
      "Building the real VR lorem ipsum dolor amet glavrida from a scratch",
    cover: "../images/b3.jpg",
    catgeory: "TIPS & TRICKS",
    date: "OCTOBER 9, 2023",
  },
  {
    id: 4,
    title: "What eleifend posuere tincidunt",
    cover: "../images/b4.jpg",
    catgeory: "EVENTS",
    date: "OCTOBER 8, 2023",
  },
];
export const teamdata = [
  {
    id: 1,
    title: "Alexander Black",
    cover: "../images/t1.jpg",
    post: "FOUNDER, CEO",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
  {
    id: 2,
    title: "Anna Kovalenko",
    cover: "../images/t2.jpg",
    post: "FINANCE DIRECTOR",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
  {
    id: 3,
    title: "Tiffany White",
    cover: "../images/t3.jpg",
    post: "CREATIVE DIRECTOR",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
  {
    id: 4,
    title: "Richard Greenwood",
    cover: "../images/t4.jpg",
    post: "PROGRAMMER",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
  {
    id: 5,
    title: "Jessica Brown",
    cover: "../images/t5.jpg",
    post: "MARKETING DIRECTOR",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
  {
    id: 6,
    title: "Gregory Windstorm",
    cover: "../images/t6.jpg",
    post: "ACCOUNTING MANAGER",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
  {
    id: 7,
    title: "Anna Red",
    cover: "../images/t7.jpg",
    post: "PROJECT MANAGER",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
  {
    id: 8,
    title: "Join our team!",
    cover: "../images/t8.jpg",
    post: "Director of HR",
    social: 'https://www.linkedin.com/in/animesh239/'
  },
];
