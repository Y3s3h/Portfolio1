export const navLinks = [
  {
    id: 1,
    name: 'Home',
    href: '#home',
  },
  {
    id: 2,
    name: 'About',
    href: '#about',
  },
  {
    id: 3,
    name: 'Work',
    href: '#work',
  },
  {
    id: 4,
    name: 'Contact',
    href: '#contact',
  },
];

export const clientReviews = [
  {
    id: 1,
    name: 'Aman Sharma',
    position: 'Marketing Director at GreenLeaf',
    img: 'assets/review1.png',
    review:
      'Working with Yash was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.',
  },
  {
    id: 2,
    name: 'Mark Rogers',
    position: 'Founder of TechGear Shop',
    img: 'assets/review2.png',
    review:
      'Yash’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional! Fantastic work.',
  },
  {
    id: 3,
    name: 'John Dohsas',
    position: 'Project Manager at UrbanTech ',
    img: 'assets/review3.png',
    review:
      'I can’t say enough good things about Yash. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.',
  },
  {
    id: 4,
    name: 'Ether Smith',
    position: 'CEO of BrightStar Enterprises',
    img: 'assets/review4.png',
    review:
      'Yash was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend backend dev are top-notch.',
  },
];
export const myProjects = [
  {
    title: 'Job Portal',
    desc: 'A comprehensive job portal platform connecting recruiters and job seekers. Recruiters can post jobs and manage applicants, while students can apply and track their application status.',
    subdesc:
      'Built with React.js, Node.js, Express, MongoDB, and Redux Toolkit for state management, ensuring a smooth and real-time job application experience.',
    href: 'https://job-application-nzvj.onrender.com/',
    texture: '/textures/project/project1.mp4',
    logo: '/assets/project-logo1.png',
    logoStyle: {
      backgroundColor: '#2A1816',
      border: '0.2px solid #36201D',
      boxShadow: '0px 0px 60px 0px #AA3C304D',
    },
    spotlight: '/assets/spotlight1.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Node.js', path: '/assets/nodejs.svg' }, // you can add nodejs.svg if you have
      { id: 3, name: 'MongoDB', path: '/assets/mongodb.svg' }, // add if available
      { id: 4, name: 'Redux Toolkit', path: '/assets/redux.svg' }, // add if available
    ],
  },
  {
    title: 'Real-time Chat Application',
    desc: 'A WhatsApp-like real-time chat app enabling users to connect and chat instantly with friends and relatives through an intuitive interface.',
    subdesc:
      'Built with React.js, Socket.io for real-time communication, Express.js, and MongoDB for message persistence.',
    href: 'https://chat-application-7sis.onrender.com',
    texture: '/textures/project/project2.mp4',
    logo: '/assets/project-logo2.png',
    logoStyle: {
      backgroundColor: '#13202F',
      border: '0.2px solid #17293E',
      boxShadow: '0px 0px 60px 0px #2F6DB54D',
    },
    spotlight: '/assets/spotlight2.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Framer Motion', path: '/assets/framer.png' },
      { id: 3, name: 'Node.js', path: '/assets/nodejs.svg' },
      { id: 4, name: 'MongoDB', path: '/assets/mongodb.svg' },
    ],
  },
  {
    title: 'Phone Case Application',
    desc: 'An e-commerce platform for custom phone cases allowing users to design, customize, and order phone cases.',
    subdesc:
      'Developed using React.js, Node.js, Express, and integrated with Cloudinary for image uploads and payments via Stripe.',
    href: 'https://case-cobra-rose.vercel.app',
    texture: '/textures/project/project3.mp4',
    logo: '/assets/project-logo3.png',
    logoStyle: {
      backgroundColor: '#60f5a1',
      background:
        'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
      border: '0.2px solid rgba(208, 213, 221, 1)',
      boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
    },
    spotlight: '/assets/spotlight3.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'Framer Motion', path: '/assets/framer.png' },
      { id: 3, name: 'MongoDB', path: '/assets/mongodb.svg' },
      { id: 4, name: 'Node.js', path: '/assets/nodejs.svg' },
    ],
  },
  {
    title: 'E-waste Locator',
    desc: 'A web platform to help users locate nearby e-waste disposal shops, promoting responsible recycling and rewarding users for useful e-waste items.',
    subdesc:
      'Built using React.js, Google Maps API, Node.js, and MongoDB, with user authentication and geolocation features.',
    href: 'https://e-watse-locator.vercel.app',
    texture: '/textures/project/project4.mp4',
    logo: '/assets/project-logo4.png',
    logoStyle: {
      backgroundColor: '#0E1F38',
      border: '0.2px solid #0E2D58',
      boxShadow: '0px 0px 60px 0px #2F67B64D',
    },
    spotlight: '/assets/spotlight4.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },

      {
        id: 2,
        name: 'TailwindCSS',
        path: 'assets/tailwindcss.png',
      }, // add if available
      { id: 3, name: 'Node.js', path: '/assets/nodejs.svg' },

      { id: 4, name: 'MongoDB', path: '/assets/mongodb.svg' },
    ],
  },
  {
    title: 'Tour Analysis',
    desc: 'An analytical platform providing insights on tourism trends, destinations, and user behavior to assist travel agencies and tourists.',
    subdesc: 'Implemented with React.js, D3.js for data visualization, Node.js, and MongoDB for backend services.',
    href: 'https://tour-analysis-wjy6.vercel.app',
    texture: '/textures/project/project5.mp4',
    logo: '/assets/project-logo5.png',
    logoStyle: {
      backgroundColor: '#1C1A43',
      border: '0.2px solid #252262',
      boxShadow: '0px 0px 60px 0px #635BFF4D',
    },
    spotlight: '/assets/spotlight5.png',
    tags: [
      { id: 1, name: 'React.js', path: '/assets/react.svg' },
      { id: 2, name: 'TypeScript', path: '/assets/typescript.png' }, // add if available
      { id: 3, name: 'Node.js', path: '/assets/nodejs.svg' },
      { id: 4, name: 'MongoDB', path: '/assets/mongodb.svg' },
    ],
  },
];

// export const myProjects = [
//   {
//     title: 'Podcastr - AI Podcast Platform',
//     desc: 'Podcastr is a revolutionary Software-as-a-Service platform that transforms the way podcasts are created. With advanced AI-powered features like text-to-multiple-voices functionality, it allows creators to generate diverse voiceovers from a single text input.',
//     subdesc:
//       'Built as a unique Software-as-a-Service app with Next.js 14, Tailwind CSS, TypeScript, Framer Motion and Convex, Podcastr is designed for optimal performance and scalability.',
//     href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
//     texture: '/textures/project/project1.mp4',
//     logo: '/assets/project-logo1.png',
//     logoStyle: {
//       backgroundColor: '#2A1816',
//       border: '0.2px solid #36201D',
//       boxShadow: '0px 0px 60px 0px #AA3C304D',
//     },
//     spotlight: '/assets/spotlight1.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'LiveDoc - Real-Time Google Docs Clone',
//     desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
//     subdesc:
//       'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
//     href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
//     texture: '/textures/project/project2.mp4',
//     logo: '/assets/project-logo2.png',
//     logoStyle: {
//       backgroundColor: '#13202F',
//       border: '0.2px solid #17293E',
//       boxShadow: '0px 0px 60px 0px #2F6DB54D',
//     },
//     spotlight: '/assets/spotlight2.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'CarePulse - Health Management System',
//     desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
//     subdesc:
//       'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
//     href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
//     texture: '/textures/project/project3.mp4',
//     logo: '/assets/project-logo3.png',
//     logoStyle: {
//       backgroundColor: '#60f5a1',
//       background:
//         'linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
//       border: '0.2px solid rgba(208, 213, 221, 1)',
//       boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
//     },
//     spotlight: '/assets/spotlight3.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'Horizon - Online Banking Platform',
//     desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
//     subdesc:
//       'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
//     href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
//     texture: '/textures/project/project4.mp4',
//     logo: '/assets/project-logo4.png',
//     logoStyle: {
//       backgroundColor: '#0E1F38',
//       border: '0.2px solid #0E2D58',
//       boxShadow: '0px 0px 60px 0px #2F67B64D',
//     },
//     spotlight: '/assets/spotlight4.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
//   {
//     title: 'Imaginify - AI Photo Manipulation App',
//     desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
//     subdesc:
//       'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
//     href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
//     texture: '/textures/project/project5.mp4',
//     logo: '/assets/project-logo5.png',
//     logoStyle: {
//       backgroundColor: '#1C1A43',
//       border: '0.2px solid #252262',
//       boxShadow: '0px 0px 60px 0px #635BFF4D',
//     },
//     spotlight: '/assets/spotlight5.png',
//     tags: [
//       {
//         id: 1,
//         name: 'React.js',
//         path: '/assets/react.svg',
//       },
//       {
//         id: 2,
//         name: 'TailwindCSS',
//         path: 'assets/tailwindcss.png',
//       },
//       {
//         id: 3,
//         name: 'TypeScript',
//         path: '/assets/typescript.png',
//       },
//       {
//         id: 4,
//         name: 'Framer Motion',
//         path: '/assets/framer.png',
//       },
//     ],
//   },
// ];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
  return {
    deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
    deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
    cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
    reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
    ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
    targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
  };
};

// export const workExperiences = [
//   {
//     id: 1,
//     name: 'Framer',
//     pos: 'Lead Web Developer',
//     duration: '2022 - Present',
//     title:
//       'Framer serves as my go-to tool for creating interactive prototypes. I use it to bring designs to  life, allowing stakeholders to experience the user flow and interactions before development.',
//     icon: '/assets/framer.svg',
//     animation: 'victory',
//   },
//   {
//     id: 2,
//     name: 'Figma',
//     pos: 'Web Developer',
//     duration: '2020 - 2022',
//     title:
//       'Figma is my collaborative design platform of choice. I utilize it to work seamlessly with team members and clients, facilitating real-time feedback and design iterations. Its cloud-based.',
//     icon: '/assets/figma.svg',
//     animation: 'clapping',
//   },
//   {
//     id: 3,
//     name: 'Notion',
//     pos: 'Junior Web Developer',
//     duration: '2019 - 2020',
//     title:
//       'Notion helps me keep my projects organized. I use it for project management, task tracking, and as a central hub for documentation, ensuring that everything from design notes to.',
//     icon: '/assets/notion.svg',
//     animation: 'salute',
//   },
// ];
export const workExperiences = [
  {
    id: 1,
    name: 'Job Portal Project',
    pos: 'Full Stack Developer',
    duration: '2023 - Present',
    title:
      'Developed a comprehensive job portal allowing recruiters to post jobs and candidates to apply, track applications, and manage profiles using React.js, Node.js, Express, and MongoDB.',
    icon: '/assets/react.svg',
    animation: 'victory',
  },
  {
    id: 2,
    name: 'Real-Time Chat Application',
    pos: 'Frontend & Backend Developer',
    duration: '2022 - 2023',
    title:
      'Built a real-time chat app similar to WhatsApp featuring instant messaging, online presence, and user-friendly UI using Socket.io, React.js, and Node.js.',
    icon: '/assets/socketio.svg',
    animation: 'clapping',
  },
  {
    id: 3,
    name: 'E-Waste Locator',
    pos: 'Full Stack Developer',
    duration: '2022',
    title:
      'Created an application that helps users locate nearby e-waste disposal shops, enabling contact and earning credits for useful items, built with React.js, Node.js, and Google Maps API.',
    icon: '/assets/google-maps.svg',
    animation: 'salute',
  },
  {
    id: 4,
    name: 'Phone Case Application',
    pos: 'Frontend Developer',
    duration: '2021 - 2022',
    title:
      'Designed and developed an interactive phone case customization application providing users various design options with a smooth UI experience using React.js and Tailwind CSS.',
    icon: '/assets/react.svg',
    animation: 'clapping',
  },
  {
    id: 5,
    name: 'Tour Analysis',
    pos: 'Data Analyst & Developer',
    duration: '2021',
    title:
      'Implemented a web-based tour analysis tool to visualize travel data and user insights using React.js, data visualization libraries, and RESTful APIs.',
    icon: '/assets/typescript.png',
    animation: 'victory',
  },
];
