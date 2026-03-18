import {
	Cloud,
	Code,
	Code2,
	Database,
	Server,
	Zap,
	TrendingUp,
} from "lucide-react";

export const content = {
	navigation: {
		name: "Gregoris Bachtsevanos",
		about: "About",
		services: "Services",
		projects: "Projects",
		techStack: "Tech Stack",
		contact: "Contact",
	},
	hero: {
		title: "Full-Stack Developer",
		subtitle: "Building Scalable Web Applications & APIs",
		description:
			"I help startups and businesses build fast, reliable, and scalable software.",
		ctaProject: "Start a Project",
		ctaWork: "View My Work",
		availability: "Available for freelance projects",
	},
	about: {
		title: "About Me",
		location: "Based in Greece",
		paragraphs: [
			"I'm a full-stack software engineer who helps startups and businesses build scalable, reliable web platforms and APIs. With expertise spanning modern frontend frameworks and robust backend systems, I focus on creating solutions that not only work today but scale for tomorrow.",
			"My approach goes beyond just writing code. I prioritize clean architecture, performance optimization, and maintainability to ensure your product can grow alongside your business. Whether you're launching an MVP or scaling an existing platform, I bring production-ready solutions built on proven technologies.",
			"From designing secure REST APIs to crafting modern React interfaces, I bridge the gap between technical excellence and business outcomes. Let's build something that lasts.",
		],
	},
	services: {
		title: "Services",
		subtitle:
			"Comprehensive full-stack development services to bring your ideas to life",
		items: [
			{
				icon: Code,
				title: "Full-Stack Web Application Development",
				description:
					"Custom web platforms built with React and Node.js. End-to-end solutions tailored to your business needs.",
			},
			{
				icon: Server,
				title: "API Development & Backend Systems",
				description:
					"Secure and scalable backend services. REST APIs, authentication systems, and database architecture.",
			},
			{
				icon: Zap,
				title: "Startup MVP Development",
				description:
					"Building the first version of your startup product quickly and efficiently. Get to market faster without sacrificing quality.",
			},
			{
				icon: Cloud,
				title: "DevOps & Deployment",
				description:
					"Dockerized applications, Linux server configuration, and CI/CD pipelines for reliable deployments.",
			},
			{
				icon: TrendingUp,
				title: "Performance Optimization",
				description:
					"Improving speed and scalability of existing applications. Comprehensive audits and optimizations.",
			},
		],
	},
	projects: {
		title: "Featured Projects",
		subtitle:
			"Recent work showcasing full-stack development and system architecture",
		items: [
			{
				title: "Authentication Platform",
				description:
					"Secure authentication backend handling machine tokens, refresh tokens, and access tokens for multiple applications. Built with industry-standard security practices.",
				tech: ["Node.js", "Express", "MongoDB", "JWT"],
				result: "Handles 10k+ daily auth requests",
			},
			{
				title: "Task Management Platform",
				description:
					"Full-stack project and task management system with projects, groups, tasks, and subtasks. Complete with real-time updates and collaborative features.",
				tech: ["React", "Redux Toolkit", "Node.js", "PostgreSQL"],
				result: "Improved team productivity by 40%",
			},
			{
				title: "Developer Dashboard",
				description:
					"Modern analytics dashboard with advanced state management and API integrations. Real-time data visualization and performance metrics.",
				tech: ["React", "TypeScript", "Redux Toolkit", "Vite"],
				result: "Processes 100k+ data points/day",
			},
		],
	},
	techStack: {
		title: "Tech Stack",
		subtitle:
			"Modern technologies and tools I use to build reliable solutions",
		categories: [
			{
				category: "Frontend",
				icon: Code2,
				technologies: [
					"React.js",
					"Next.js",
					"TypeScript",
					"Redux Toolkit",
					"HTML/CSS/SCSS",
					"Styled Components",
					"Vite",
				],
			},
			{
				category: "Backend",
				icon: Server,
				technologies: [
					"Node.js",
					"Express.js",
					"REST APIs",
					"Authentication",
					"Token Security",
				],
			},
			{
				category: "Database",
				icon: Database,
				technologies: ["MongoDB", "MySQL", "PostgreSQL"],
			},
			{
				category: "DevOps",
				icon: Cloud,
				technologies: [
					"Docker",
					"Linux Servers",
					"Git",
					"CI/CD",
					"Cloud Deployments",
				],
			},
		],
	},
	trust: {
		title: "Why Work With Me",
		subtitle:
			"Delivering excellence through proven principles and practices",
		reasons: [
			{
				title: "Clean and Maintainable Code",
				description:
					"Following best practices and industry standards to ensure your codebase stays manageable as it grows.",
			},
			{
				title: "Focus on Scalability",
				description:
					"Architecture designed to handle growth. Built to scale from MVP to enterprise.",
			},
			{
				title: "Production-Ready Architecture",
				description:
					"Every project is built with production in mind. Security, performance, and reliability from day one.",
			},
			{
				title: "Strong Backend and Frontend Expertise",
				description:
					"Full-stack capabilities mean seamless integration between your frontend and backend systems.",
			},
		],
	},
	contact: {
		title: "Have a Project in Mind?",
		subtitle: "Let's discuss how I can help bring your ideas to life",
		getInTouch: "Get in Touch",
		paragraphs: [
			"Whether you're looking to build a new product, scale an existing platform, or need technical consultation, I'm here to help.",
		],
		formPlaceholders: {
			name: "Your Name",
			email: "Your Email",
			message: "Tell me about your project...",
		},
		submitButton: {
			send: "Send Message",
			sending: "Sending...",
		},
		toastTitle: "Message sent!",
		toastDescription: "I'll get back to you as soon as possible.",
		copyright: "© 2026 Gregoris Bachtsevanos. All rights reserved.",
		email: "contact@example.com",
		github: "GitHub Profile",
		linkedin: "LinkedIn Profile",
	},
};
