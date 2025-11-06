import { personalData } from '@/types';

const personal_curriculumn_vitae: personalData = {
	first_name: 'Chean',
	last_name: 'Sreylin',
	address: 'Prey Sa, Dangkor, Phnom Penh, Cambodia.',
	telephone: '070 944 586',
	email: 'cheansreylin1999@gmail.com',
	about_me:
		'I am a motivated and responsible System Support Supervisor with over six years of experience in system support operations at Solution Technologies. I specialize in troubleshooting, coordinating support tasks, and leading a team to ensure smooth daily operations and reliable service performance.',
	public_link: [
		{ name: 'Linkin', url: 'https://www.linkedin.com/in/sreylin-chean' },
		{ name: 'Telegram', url: 'http://t.me/Lylinnnnnnnn' },
	],
	work_experience: [
		{
			company: 'UDAYA Technology',
			position: 'System Support Supervisor',
			duration: '2021 - Present',
			responsibility: [
				'Supervise and coordinate daily activities of the system support team to ensure smooth operations',
				'Assign tasks, track progress, and evaluate team performance',
				'Provide guidance, training, and technical support to team member',
				'Ensure timely resolution of user and system issues across departments',
				'Collaborate with IT, operations, and management teams to improve system efficiency',
				'Support management in planning and implementing new systems or upgrades'
			],
		},
		{
			company: 'UDAYA Technology',
			position: 'System Support Associate',
			duration: '2019 - 2021',
			responsibility: [
				'Troubleshoot user and system issues in a timely and effective manner.',
				'Monitor daily system operations and report irregularities to supervisors.',
				'Collaborate with internal teams to resolve software or hardware problems.',
				'Assist in system updates, testing, and documentation.',
				'Maintain accurate records of support activities and issue resolutions.',
				'Communicate with vendors or external partners when necessary to resolve issues.'
			],
		}
	],
	education: [
		{ school: 'Preah Kossomak Polytechnic Institute', degree: 'Accounting and Finance', duration: '2018-2021' },
		{ school: 'Somrong Punley Hight School', degree: 'High school deploma', duration: '2016-2017' },
	],
	training: [
		{ school: 'Cambodia Japan Cooperation Center', degree: 'Value thinking and Customer understanding, Strategic direction management and Marketing strategy', duration: 'October-2025' },
		{ school: 'Cambodia Japan Cooperation Center', degree: 'Leadership and Hospitality Development', duration: 'June-2025' },
		{ school: 'ACLEDA University of Business', degree: 'Excellent Customer Service & Retention', duration: 'May-2024' },
	],
	technical_skills: [
		{ name: 'Microsoft Office', value: 70 },
		{ name: 'Internet Email', value: 90 },
	],
	soft_skils: [
		{ name: 'Problem solving', value: 80 },
		{ name: 'Communication', value: 80 },
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
