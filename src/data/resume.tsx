import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
    name: 'Adam Belkadi',
    initials: 'AB',
    url: 'https://www.linkedin.com/in/adambelkadi/',
    location: 'Algeirs, Algeria',
    locationLink: 'Algeirs, Algeria',
    description:
        'Software Engineer turned Entrepreneur. I love building things and helping people. Very active on Discord.',
    summary:
        'AI am a cybersecurity and computer science engineering student at the University of Science and Technology Houari Boumediene, with strong experience in fullstack development. As a Google Developer Group Algiers member, I led and contributed to projects like a Google Forum clone and secure Django REST APIs with JWT authentication. Adam has developed scalable and secure backend systems for Projects such as EduSphere, focusing on RESTful API design and student community tools. Proficient in C, Python, JavaScript, and TypeScript, I work with frameworks like Next.js, React, Django, and Express, and use tools like Docker and Git for deployment and version control. I am fluent in English, French, and Arabic.',
    avatarUrl: '/image.png',
    skills: ['React', 'Next.js', 'Typescript', 'Node.js', 'Python', 'Docker'],
    navbar: [
        { href: '/', icon: HomeIcon, label: 'Home' },
        // { href: '/blog', icon: NotebookIcon, label: 'Blog' },
    ],
    contact: {
        email: 'adambelkadi1@gmail.com',
        // tel: '+213558946034',
        social: {
            GitHub: {
                name: 'GitHub',
                url: 'https://github.com/Adam-Belkadi',
                icon: Icons.github,

                navbar: true,
            },
            LinkedIn: {
                name: 'LinkedIn',
                url: 'https://www.linkedin.com/in/adambelkadi',
                icon: Icons.linkedin,

                navbar: true,
            },
            email: {
                name: 'Send Email',
                url: 'https://adambelkadi1@gmail.com',
                icon: Icons.email,

                navbar: true,
            },
        },
    },

    work: [
        {
            company: 'Atomic Finance',
            href: 'https://atomic.finance',
            badges: [],
            location: 'Remote',
            title: 'Bitcoin Protocol Engineer',
            logoUrl: '/atomic.png',
            start: 'May 2021',
            end: 'Oct 2022',
            description:
                'Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.',
        },
    ],
    education: [
        {
            school: 'USTHB',
            href: 'https://usthb.dz',
            degree: "Bachelor's Degree of Computer Science (BCS)",
            logoUrl: '/usthb.svg',
            start: '2022',
            end: '2027',
        },
    ],
    projects: [
        {
            title: 'Chat Collect',
            href: 'https://chatcollect.com',
            dates: 'Jan 2024 - Feb 2024',
            active: true,
            description:
                'With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.',
            technologies: [
                'Next.js',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Stripe',
                'Shadcn UI',
                'Magic UI',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://chatcollect.com',
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '',
            video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4',
        },
        {
            title: 'Magic UI',
            href: 'https://magicui.design',
            dates: 'June 2023 - Present',
            active: true,
            description:
                'Designed, developed and sold animated UI components for developers.',
            technologies: [
                'Next.js',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Stripe',
                'Shadcn UI',
                'Magic UI',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://magicui.design',
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: 'Source',
                    href: 'https://github.com/magicuidesign/magicui',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '',
            video: 'https://cdn.magicui.design/bento-grid.mp4',
        },
        {
            title: 'llm.report',
            href: 'https://llm.report',
            dates: 'April 2023 - September 2023',
            active: true,
            description:
                'Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.',
            technologies: [
                'Next.js',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Shadcn UI',
                'Magic UI',
                'Stripe',
                'Cloudflare Workers',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://llm.report',
                    icon: <Icons.globe className="size-3" />,
                },
                {
                    type: 'Source',
                    href: 'https://github.com/dillionverma/llm.report',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '',
            video: 'https://cdn.llm.report/openai-demo.mp4',
        },
        {
            title: 'Automatic Chat',
            href: 'https://automatic.chat',
            dates: 'April 2023 - March 2024',
            active: true,
            description:
                'Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.',
            technologies: [
                'Next.js',
                'Typescript',
                'PostgreSQL',
                'Prisma',
                'TailwindCSS',
                'Shadcn UI',
                'Magic UI',
                'Stripe',
                'Cloudflare Workers',
            ],
            links: [
                {
                    type: 'Website',
                    href: 'https://automatic.chat',
                    icon: <Icons.globe className="size-3" />,
                },
            ],
            image: '',
            video: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4',
        },
    ],
    hackathons: [
        {
            title: 'GDG Hack 2025',
            dates: 'February 6th - 8th, 2025',
            location: 'Algeirs, Algeria',
            description:
                'developed EduSphere platform a community driven website for students.',
            image: '/edusphere.png',
            mlh: 'https://www.linkedin.com/feed/update/urn:li:activity:7295585544888020992/',
            links: [
                {
                    title: 'Github',
                    icon: <Icons.github className="h-4 w-4" />,
                    href: 'https://github.com/Adam-Belkadi/GDG-hack-2025',
                },
            ],
        },
        {
            title: 'AOSP Week',
            dates: 'January 5th - 12st, 2024',
            location: 'Algiers, Algeria',
            description:
                'Wrote an article about the android open source project and its role in modern device security.',
            image: '/android.png',
            win: 'Best Data Hack',
            mlh: 'https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg',
            links: [
                {
                    title: 'Article',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://gdg-algiers.medium.com/introduction-to-aosp-and-its-role-in-modern-device-security-773816419cfb',
                },
            ],
        },
        {
            title: "Make School's Student App Competition 2017",
            dates: 'May 19th - 21st, 2017',
            location: 'International',
            description:
                'Improved PocketDoc and submitted to online competition',
            image: 'https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/make-school-hackathon.png',
            win: 'Top 10 Finalist | Honourable Mention',
            links: [
                {
                    title: 'Medium Article',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://medium.com/make-school/the-winners-of-make-schools-student-app-competition-2017-a6b0e72f190a',
                },
                {
                    title: 'Devpost',
                    icon: <Icons.globe className="h-4 w-4" />,
                    href: 'https://devpost.com/software/pocketdoc-react-native',
                },
                {
                    title: 'YouTube',
                    icon: <Icons.youtube className="h-4 w-4" />,
                    href: 'https://www.youtube.com/watch?v=XwFdn5Rmx68',
                },
                {
                    title: 'Source',
                    icon: <Icons.github className="h-4 w-4" />,
                    href: 'https://github.com/dillionverma/pocketdoc-react-native',
                },
            ],
        },
    ],
} as const;
