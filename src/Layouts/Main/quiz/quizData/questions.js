const questions = {
	desktop: {
		easy: [
			{
				id: 1,
				text: 'Can you identify the App Store on your desktop?',
				options: [
					{ label: 'Option A', image: 'path_to_desktop_image_1', isCorrect: false },
					{ label: 'Option B', image: 'path_to_desktop_image_2', isCorrect: false },
					{ label: 'Option C', image: 'path_to_desktop_image_3', isCorrect: true },
				],
			},
			// Add more easy desktop questions...
		],
		moderate: [
			{
				id: 11,
				text: 'Moderate desktop question example?',
				options: [
					{ label: 'Option A', image: 'path_to_desktop_image_1', isCorrect: true },
					{ label: 'Option B', image: 'path_to_desktop_image_2', isCorrect: false },
					{ label: 'Option C', image: 'path_to_desktop_image_3', isCorrect: false },
				],
			},
			// Add more moderate desktop questions...
		],
		hard: [
			{
				id: 21,
				text: 'Hard desktop question example?',
				options: [
					{ label: 'Option A', image: 'path_to_desktop_image_1', isCorrect: false },
					{ label: 'Option B', image: 'path_to_desktop_image_2', isCorrect: true },
					{ label: 'Option C', image: 'path_to_desktop_image_3', isCorrect: false },
				],
			},
			// Add more hard desktop questions...
		],
	},
	mobile: {
		easy: [
			{
				id: 31,
				text: 'Can you identify the App Store on your mobile?',
				options: [
					{ label: 'Option A', image: 'path_to_mobile_image_1', isCorrect: false },
					{ label: 'Option B', image: 'path_to_mobile_image_2', isCorrect: false },
					{ label: 'Option C', image: 'path_to_mobile_image_3', isCorrect: true },
				],
			},
			// Add more easy mobile questions...
		],
		moderate: [
			{
				id: 41,
				text: 'Moderate mobile question example?',
				options: [
					{ label: 'Option A', image: 'path_to_mobile_image_1', isCorrect: true },
					{ label: 'Option B', image: 'path_to_mobile_image_2', isCorrect: false },
					{ label: 'Option C', image: 'path_to_mobile_image_3', isCorrect: false },
				],
			},
			// Add more moderate mobile questions...
		],
		hard: [
			{
				id: 51,
				text: 'Hard mobile question example?',
				options: [
					{ label: 'Option A', image: 'path_to_mobile_image_1', isCorrect: false },
					{ label: 'Option B', image: 'path_to_mobile_image_2', isCorrect: true },
					{ label: 'Option C', image: 'path_to_mobile_image_3', isCorrect: false },
				],
			},
			// Add more hard mobile questions...
		],
	},
};

export default questions;
