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
            company: 'Excellesia',
            href: 'https://excellesia.com/',
            badges: [],
            location: 'Remote',
            title: 'Cyber Security Engineer',
            logoUrl: '/excellesia.png',
            start: 'March 2025',
            end: 'Present',
            description: 'SOC analyst internship.',
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
            title: 'Forum registration system',
            href: '#',
            dates: 'Dec 2024',
            active: true,
            description:
                'Internal tool for hackathons registration and management.',
            technologies: ['PHP', 'Laravel', 'MYSQL', 'Eloquent ORM'],
            links: [
                {
                    type: 'Source',
                    href: 'https://github.com/Adam-Belkadi/forum-System-back-end',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/gdg.png',
        },
        {
            title: 'MCQ Quiz',
            href: '#',
            dates: 'Nov 2024',
            active: true,
            description:
                'Developed McQ Quiz, a desktop application for creating and managing multiple-choice quizzes. The app allows users to create quizzes with questions and answers, and provides a user-friendly interface for taking quizzes.',
            technologies: ['Python', 'PYQT', 'Pandas'],
            links: [
                {
                    type: 'Source',
                    href: 'https://github.com/Adam-Belkadi/pyqt-qcm-desktopapp',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/qcm.png',
        },
        {
            title: 'Edusphere',
            href: '#',
            dates: 'Feb 2024',
            active: true,
            description:
                'Developed EduSphere, a community-driven platform for students to share resources and connect. The platform allows users to create and manage study groups, share notes, and collaborate on projects.',
            technologies: [
                'React',
                'Javascript',
                'TailwindCSS',
                'Django',
                'Django REST',
                'SQLite',
                'JWT',
            ],
            links: [
                {
                    type: 'Source',
                    href: 'https://github.com/Adam-Belkadi/GDG-hack-2025',
                    icon: <Icons.github className="size-3" />,
                },
            ],
            image: '/edusphere1.png',
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
    ],
} as const;
