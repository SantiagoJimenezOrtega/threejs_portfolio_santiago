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
        name: 'Jaime Mendoza',
        position: 'Founder of Agroinsumos para el campo',
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
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'LiveDoc - Real-Time Google Docs Clone',
        desc: 'LiveDoc is a powerful collaborative app that elevates the capabilities of real-time document editing. As an enhanced version of Google Docs, It supports millions of collaborators simultaneously, ensuring that every change is captured instantly and accurately.',
        subdesc:
            'With LiveDoc, users can experience the future of collaboration, where multiple contributors work together in real time without any lag, by using Next.js and Liveblocks newest features.',
        href: 'https://www.youtube.com/watch?v=y5vE8y_f_OM',
        texture: '/textures/project/project2.mp4',
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
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'CarePulse - Health Management System',
        desc: 'An innovative healthcare platform designed to streamline essential medical processes. It simplifies patient registration, appointment scheduling, and medical record management, providing a seamless experience for both healthcare providers and patients.',
        subdesc:
            'With a focus on efficiency, CarePulse integrantes complex forms and SMS notifications, by using Next.js, Appwrite, Twillio and Sentry that enhance operational workflows.',
        href: 'https://www.youtube.com/watch?v=lEflo_sc82g',
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
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Horizon - Online Banking Platform',
        desc: 'Horizon is a comprehensive online banking platform that offers users a centralized finance management dashboard. It allows users to connect multiple bank accounts, monitor real-time transactions, and seamlessly transfer money to other users.',
        subdesc:
            'Built with Next.js 14 Appwrite, Dwolla and Plaid, Horizon ensures a smooth and secure banking experience, tailored to meet the needs of modern consumers.',
        href: 'https://www.youtube.com/watch?v=PuOVqP_cjkE',
        texture: '/textures/project/project4.mp4',
        logo: '/assets/project-logo4.png',
        logoStyle: {
            backgroundColor: '#0E1F38',
            border: '0.2px solid #0E2D58',
            boxShadow: '0px 0px 60px 0px #2F67B64D',
        },
        spotlight: '/assets/spotlight4.png',
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
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
    {
        title: 'Imaginify - AI Photo Manipulation App',
        desc: 'Imaginify is a groundbreaking Software-as-a-Service application that empowers users to create stunning photo manipulations using AI technology. With features like AI-driven image editing, a payments system, and a credits-based model.',
        subdesc:
            'Built with Next.js 14, Cloudinary AI, Clerk, and Stripe, Imaginify combines cutting-edge technology with a user-centric approach. It can be turned into a side income or even a full-fledged business.',
        href: 'https://www.youtube.com/watch?v=Ahwoks_dawU',
        texture: '/textures/project/project5.mp4',
        logo: '/assets/project-logo5.png',
        logoStyle: {
            backgroundColor: '#1C1A43',
            border: '0.2px solid #252262',
            boxShadow: '0px 0px 60px 0px #635BFF4D',
        },
        spotlight: '/assets/spotlight5.png',
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
            {
                id: 4,
                name: 'Framer Motion',
                path: '/assets/framer.png',
            },
        ],
    },
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