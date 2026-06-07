import { FaFacebookF, FaGithub, FaLinkedinIn, FaTiktok } from "react-icons/fa";

export const navLinks = [
  {
    title: 'Skills',
    id: 'nav_item',
    url: '#skills',
  },
  {
    title: 'Projects',
    id: 'nav_item',
    url: '#projects',
  },
	{
		title: 'About',
		id: 'nav_item',
		url: '#about',
	},
	{
		title: 'Contact',
		id: 'cta_contact',
		url: '#contact',
	},
];

export const heroSectionData = {
	heading: 'Frontend Developer crafting engaging web experiences',
	description:
		'I specialize in React and Next.js, building modern web applications with clean user interfaces while continuously expanding my backend development skills.',
};
export const ProjectSectionText = {
	heading: 'Projects',
	description:
		"Here are the projects that I've built.",
};
export const SkillsSectionText = {
	heading: 'Skills',
	description:
		"Technologies and tools that I use in building websites.",
};
export const AboutSectionText = {
	heading: 'About',
	description:
		"Turning ideas into real experiences",
};
export const ContactSectionText = {
	heading: 'Connect',
  subheading: 'Get in touch',
	description: "I’m a Frontend Developer focused on building modern, responsive web applications. I’m open to opportunities and collaborations. Feel free to reach out.",
};


export const skills = [
	{
		name: 'HTML',
		logo: 'html5.svg',
    category: ['frontend'],
    isCore: false
	},
	{
		name: 'CSS',
		logo: 'css.svg',
    category: ['frontend'],
    isCore: false
	},
	{
		name: 'Javascript',
		logo: 'js.svg',
    category: ['frontend', 'backend'],
    isCore: false
	},
	{
		name: 'Tailwind',
		logo: 'tailwind.svg',
    category: ['frontend'],
    isCore: true
	},
	{
		name: 'React',
		logo: 'react.svg',
    category: ['frontend'],
    isCore: true
	},
	{
		name: 'Next.js',
		logo: 'nextjs.svg',
    category: ['frontend', 'backend'],
    isCore: true
	},
	{
		name: 'Node JS',
		logo: 'nodejs.svg',
    category: ['frontend', 'backend'],
    isCore: false
	},
	{
		name: 'Typescript',
		logo: 'typescript.svg',
    category: ['frontend', 'backend'],
    isCore: true
	},
	{
    name: 'Zustand',
		logo: 'zustand.webp',
    category: ['frontend'],
    isCore: false
	},
	{
		name: 'NextAuth',
		logo: 'nextauth.webp',
    category: ['backend'],
    isCore: false
	},
	{
		name: 'MongoDB',
		logo: 'mongodb.webp',
    category: ['backend'],
    isCore: false
	},
	{
		name: 'PostgreSQL',
		logo: 'postgresql.svg',
    category: ['backend'],
    isCore: false
	},
	{
		name: 'Prisma ORM',
		logo: 'prisma.svg',
    category: ['backend'],
    isCore: false
	},
	{
    name: 'Tanstack Query',
		logo: 'react-query.svg',
    category: ['frontend'],
    isCore: false
	},
  {
    name: 'Framer Motion',
    logo: 'framermotion.webp',
    category: ['frontend'],
    isCore: false
  },
    {
    name: 'Git',
    logo: 'git.svg',
    category: ['tools'],
    isCore: false
  },
  {
		name: 'Github',
		logo: 'github.webp',
    category: ['tools'],
    isCore: false
	},
  {
		name: 'Postman',
		logo: 'postman.svg',
    category: ['tools'],
    isCore: false
	},
];

export const projects = [
	{
		title: 'Hyrivo',
		description:
			'Hyrivo is a personal job application tracker that helps you manage applications',
		techsUsed: ['React', 'Next', 'Tailwind', 'Shadcn-ui', 'Zustand'],
		image: 'projects/hyrivo.png',
		liveUrl: 'https://hyrivo.vercel.app/',
		githubUrl: 'https://github.com/sezaru-dev/hyrivo',
	},
	{
		title: 'Tayug Skills Hub',
		description:
			'Tayug Skills Hub is a personal project web platform that connects local skilled individuals with people looking for their services.',
		techsUsed: ['React', 'Next', 'Tailwind', 'Typescript', 'Prisma-ORM', 'NextAuth', 'PostgreSQL', 'Cloudinary'],
		image: 'projects/tayug-skills-hub.png',
		liveUrl: 'https://tayug-skills-hub.vercel.app/',
		githubUrl: 'https://github.com/sezarudev/tayug-skills-hub',
	},

];


export const emailLink =
  'cezarbaguhin20@gmail.com';

export const FooterMyName = "Cezarlito O. Baguhin"

export const Socials = [
	{
		name: 'facebook',
		logo: <FaFacebookF size={18} />,
		url: 'https://www.facebook.com/sezaru20',
	},
	{
		name: 'tiktok',
		logo: <FaTiktok size={18} />,
		url: 'https://www.tiktok.com/@sezarudev',
	},
	{
		name: 'linkedin',
		logo: <FaLinkedinIn size={18} />,
		url: 'https://www.linkedin.com/in/cezarlito-baguhin-184748175',
	},
	{
		name: 'github',
		logo: <FaGithub size={18} />,
		url: 'https://github.com/sezarudev',
	},
];