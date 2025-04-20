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
        name: 'Experience',
        href: '#experience',
    },
    {
        id: 5,
        name: 'Contact',
        href: '#contact',
    },
];

export const clientReviews = [
    {
        id: 1,
        name: 'Andres Ortega',
        position: 'CEO of PolaSoft',
        img: 'assets/polasoft.png',
        review:
            'Working with Santiago was an outstanding experience. ' +
            'His expertise in web development and Unreal Engine game development took our project to the next level. ' +
            'Not only does he have deep technical knowledge, but he is also proactive, creative, and always finds efficient solutions to challenges. ' +
            'His commitment to quality and optimization delivered results beyond our expectations. Without a doubt, having him on our team was a great decision.',
    },

    {
        id: 2,
        name: 'Ivan Fonseca',
        position: 'CEO of Ide@Soft S.A.S',
        img: 'assets/ideasoft.png',
        review:
            'Santiago was an essential part of our team, contributing his expertise in designing and developing Augmented Reality applications, ' +
            'databases, and web pages. His technical skills, creativity, and problem-solving approach made a significant impact on our projects. ' +
            'Additionally, his proficiency with office automation tools and ability to draft clear and detailed technical reports added great value to our workflow. ' +
            'Working with him was a fantastic experience, and I highly recommend him.',
    },

    {
        id: 3,
        name: 'Stephany Mendoza',
        position: 'Owner of Agroinsumos para el campo',
        img: 'assets/agroinsum.png',
        review:
            'Santiago proved to be a highly organized and efficient professional in managing our product database. ' +
            'His ability to create, maintain, and update information accurately was key to optimizing our internal processes. ' +
            'Beyond his technical expertise, he stood out for his responsibility, attention to detail, and ability to solve problems quickly. ' +
            'It was a pleasure working with him, and I would highly recommend him without hesitation.',
    },
    /*
    {
        id: 4,
        name: 'John Doe',
        position: 'CEO of BrightStar Enterprises',
        img: 'assets/review4.png',
        review:
            'XXXXXXXXXXXXXXXXXXXXXXXXXXXX',
    },
     */
];

export const myProjects = [
    {
        title: 'Blocky-Bot',
        desc: 'BlockyBot was my undergraduate thesis project in Systems Engineering—a virtual interactive lab designed to teach arrays and functions in programming. ' +
            'The project aims to make learning these concepts easier for first-year students through a gamified and intuitive experience. Thanks to its innovation and effectiveness, ' +
            'it received the highest possible grade.',
        subdesc:
            'Built as an interactive virtual lab using Unreal Engine 5, Blueprints, and C++, ' +
            'BlockyBot is designed to enhance programming education through a gamified and immersive learning experience. ' +
            'AI tools were integrated to generate royalty-free assets, optimizing development time and efficiency.',
        href: 'https://www.youtube.com/watch?v=zfAb95tJvZQ',
        texture: '/textures/project/project1.mp4',
        logo: '/assets/project-logo1.png',
        logoStyle: {
            backgroundColor: '#2A1816',
            border: '0.2px solid #36201D',
            boxShadow: '0px 0px 60px 0px #AA3C304D',
        },
        spotlight: '/assets/spotlight1.png',
        tags: [
            {
                id: 1,
                name: 'Unreal Engine',
                path: '/assets/unrealengineIcon.png',
            },

        ],
    },

        {
            title: 'Felix -Netflix clone ',
            desc: 'FelixNet is a Netflix-inspired streaming clone built with HTML, CSS, and JavaScript. It recreates the classic Netflix UI and is optimized for Samsung TV resolution with smooth keyboard navigation.',
            subdesc: 'This early project focuses on layout precision and user interaction using only vanilla JS, offering a static yet immersive big-screen experience without responsive design.',
            href: 'https://felixnetclone.netlify.app',
            texture: '/textures/project/project2felix.mp4',
            logo: '/assets/project-logo2.png',
            logoStyle: {
                backgroundColor: '#13202F',
                border: '0.2px solid #17293E',
                boxShadow: '0px 0px 60px 0px #2F6DB54D',
            },
            spotlight: '/assets/spotlight2.png',
            tags: [
                {
                    id: 1,
                    name: 'Html5',
                    path: '/assets/html-5.png',
                },
                {
                    id: 2,
                    name: 'css',
                    path: 'assets/css3.png',
                },
                {
                    id: 3,
                    name: 'Js',
                    path: '/assets/Js.png',
                },
            ],
        },

        {
            title: 'PrimePro - Prime video Clone',
            desc: 'PrimeProv is a responsive Prime Video clone built with React, Redux, and TypeScript. It features a dynamic UI styled with Tailwind CSS and utilizes a local movie database to simulate streaming functionality.',
            subdesc: 'This project showcases advanced state management, responsive design, and keyboard/mouse navigation, delivering a polished user experience across devices.',
            href: 'https://primeprov.netlify.app',
            texture: '/textures/project/project3prime.mp4',
            logo: '/assets/project-logo2.png',
            logoStyle: {
                backgroundColor: '#1c3dc0',
                background:
                    'linear-gradient(0deg, #1c3dc0, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)',
                border: '0.2px solid rgba(208, 213, 221, 1)',
                boxShadow: '0px 0px 60px 0px rgba(35, 131, 96, 0.3)',
            },
            spotlight: '/assets/spotlight3.png',
            tags: [
                {
                    id: 1,
                    name: 'React.js',
                    path: '/assets/react.svg',
                },
                {
                    id: 2,
                    name: 'TailwindCSS',
                    path: 'assets/tailwindcss.png',
                },
                {
                    id: 3,
                    name: 'TypeScript',
                    path: '/assets/typescript.png',
                },

            ],
        },

        {
            title: 'ArtStation ',
            desc: 'Dive into my ArtStation portfolio focused on environment art and level design. Featuring 3D scenes built with Blender and Unreal Engine, using both custom-made and pre-designed assets to craft immersive spaces.',
            subdesc: 'From atmospheric landscapes to detailed level mockups, each project reflects my passion for building digital worlds through powerful 3D workflows and real-time rendering.',
            href: 'https://www.artstation.com/aquichago9',
            texture: '/textures/project/ArtStation.mp4',
            logo: '/assets/artstation.png',
            logoStyle: {
                backgroundColor: '#0E1F38',
                border: '0.2px solid #0E2D58',
                boxShadow: '0px 0px 60px 0px #2F67B64D',
            },
            spotlight: '/assets/spotlight4.png',
            tags: [

            ],
        },
    /*
     */
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : isTablet ? 0.065 : 0.07 ,
        deskPosition: isMobile ? [0.5, -1.5, 0] : [0.3, -4.5, 0],
        cubePosition: isSmall ? [3, -2.1, 5] : isMobile ? [5, -5, 0] : isTablet ? [6, -4.1, 0.58] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3.5, 4.5, 0] : isMobile ? [5, 4, 0] : isTablet ? [7, 3.1, 3] : [12, 3, 0],
        ringPosition: isSmall ? [-7, 9, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-18, 7, 0] : [-24, 5.5, 0],
        targetPosition: isSmall ? [-4.7, -5, -5] : isMobile ? [-9, -4, -10] : isTablet ? [-11, -8.1, -10] : [-13, -7.5, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Unreal Engine',
        pos: 'Game Developer',
        duration: '2023 - Present',
        title: "Unreal Engine 5 is my go-to tool for game development and interactive experiences. " +
            "I use it to create realistic environments, develop gameplay mechanics with Blueprints, and animate scenes, " +
            "bringing projects to life with high-quality visuals and seamless interactions.",
        icon: '/assets/unrealLogo.svg',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'ThreeJS',
        pos: '3DWeb Developer',
        duration: '2025 - Present',
        title: "Three.js is my go-to tool for creating interactive 3D experiences on the web. I use it to build immersive visuals, " +
            "animate objects, and optimize performance, bringing real-time 3D graphics to life in the browser.",
        icon: '/assets/threejs.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'React',
        pos: 'Junior Web Developer',
        duration: '2019 - 2020',
        title: "React is my go-to tool for building dynamic and responsive user interfaces. " +
            "I use it to create modular components, manage state efficiently, and deliver seamless user experiences across web applications.",
        icon: '/assets/react.svg',
        animation: 'salute',
    },

];