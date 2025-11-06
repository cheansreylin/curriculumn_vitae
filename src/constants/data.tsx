import { personalData } from '@/types';

const personal_curriculumn_vitae: personalData = {
	first_name: 'Chean',
	last_name: 'Sreylin',
	address: 'Prey Sa, Dangkor, Phnom Penh, Cambodia.',
	telephone: '070 944 586',
	email: 'cheansreylin1999@gmail.com',
	about_me:
		'I’m a full-stack developer with over five years of experience working with Spring Boot, ReactJS, Node.js, and Python. I focus on building robust, secure, and scalable APIs, as well as real-time systems. I have a growing understanding of Spring Cloud, Kubernetes, Kafka, and microservices architecture, and I’m eager to apply these technologies more deeply in real-world projects. I’m passionate about writing clean, efficient code, driving automation, and contributing to collaborative, high-performing teams.',
	public_link: [
		{ name: 'Linkin', url: 'https://www.linkedin.com/in/rithirosem' },
		{ name: 'Telegram', url: 'http://t.me/Lylinnnnnnnn' },
	],
	work_experience: [
		{
			company: 'UDAYA Technology',
			position: 'System Support Supervisor',
			duration: '2021 - Present',
			responsibility: [
				'Building modern API using Spring Boot following best practices',
			],
		},
		{
			company: 'UDAYA Technology',
			position: 'System Support Associate',
			duration: '2019 - 2021',
			responsibility: [
				'Frontend development using ReactJS',
			],
		},
		{
			company: 'UDAYA Technology',
			position: 'Accountant',
			duration: '2018 - 2019',
			responsibility: [
				'Frontend development using ReactJS',
			],
		},
	],
	education: [
		{ school: 'Preah Kossomak Polytechnic Institute', degree: 'Accounting and Finance', duration: '2018-2021' },
		{ school: 'Somrong Punley Hight School', degree: 'High school deploma', duration: '2016-2017' },
	],
	training: [
		{ school: 'Wing Bank', degree: 'Agile Scrum Training', duration: 'October-2025' },
	],
	technical_skills: [
		{ name: 'Microsoft Office', value: 85 },
		{ name: 'Internet Email', value: 85 },
	],
	soft_skils: [
		{ name: 'Problem solving', value: 90 },
		{ name: 'Critical thinking', value: 70 },
		{ name: 'Adaptability', value: 80 },
		{ name: 'Communication', value: 50 },
	],
	languages: [
		{ name: 'Khmer', value: 100 },
		{ name: 'English', value: 60 },
		{ name: 'Chinese', value: 20 },
	],
	references: [],
	hobbies: [],
};

export { personal_curriculumn_vitae };
