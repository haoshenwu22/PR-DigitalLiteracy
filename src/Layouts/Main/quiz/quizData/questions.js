import ios from './img/ios.png';
import android from './img/android.png';
import set from './img/set.png';
import user from './img/user.png';
import x2 from './img/x2.png';
import amazonPhishing from './img/amazonPhishing.png';
import iosAlbum from './img/iosAlbum.png'
import iosSettings from './img/iosSettings.png'

import test from './img/test.mp4';

const questions = {
	desktop: {
		easy: [{
			id: 1,
			text: '1 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [x2, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [iosAlbum, android],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [iosSettings, android],
				isCorrect: true
			},
			],
		},
		{
			id: 2,
			text: '2 Can you identify the Album in your phone?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [iosSettings, android],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [iosAlbum, android],
				isCorrect: true
			},
			],
		},
		{
			id: 3,
			text: '3 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [amazonPhishing, user],
				isCorrect: true
			},
			],
		},
		{
			id: 4,
			text: '4 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: true
			},
			],
		},
		{
			id: 5,
			text: '5 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: true
			},
			],
		},
		],
		moderate: [
			{
				id: 11,
				text: '11 Moderate desktop question example?',
				videos: [test, test],
				options: [{
					label: 'Option A',
					image: [ios, android],
					isCorrect: true
				},
				{
					label: 'Option B',
					image: [set, user],
					isCorrect: false
				},
				{
					label: 'Option C',
					image: [ios, user],
					isCorrect: false
				},
				],
			},
			{
				id: 12,
				text: '12 Moderate desktop question example?',
				videos: [test, test],
				options: [{
					label: 'Option A',
					image: [ios, android],
					isCorrect: true
				},
				{
					label: 'Option B',
					image: [set, user],
					isCorrect: false
				},
				{
					label: 'Option C',
					image: [ios, user],
					isCorrect: false
				},
				],
			},
			{
				id: 13,
				text: '13 Moderate desktop question example?',
				videos: [test, test],
				options: [{
					label: 'Option A',
					image: [ios, android],
					isCorrect: true
				},
				{
					label: 'Option B',
					image: [set, user],
					isCorrect: false
				},
				{
					label: 'Option C',
					image: [ios, user],
					isCorrect: false
				},
				],
			},
			{
				id: 14,
				text: '14 Moderate desktop question example?',
				videos: [test, test],
				options: [{
					label: 'Option A',
					image: [ios, android],
					isCorrect: true
				},
				{
					label: 'Option B',
					image: [set, user],
					isCorrect: false
				},
				{
					label: 'Option C',
					image: [ios, user],
					isCorrect: false
				},
				],
			},
			{
				id: 15,
				text: '15 Moderate desktop question example?',
				videos: [test, test],
				options: [{
					label: 'Option A',
					image: [ios, android],
					isCorrect: true
				},
				{
					label: 'Option B',
					image: [set, user],
					isCorrect: false
				},
				{
					label: 'Option C',
					image: [ios, user],
					isCorrect: false
				},
				],
			},
			// Add more moderate desktop questions...
		],
		hard: [{
			id: 21,
			text: '21 Hard desktop question example?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: true
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: false
			},
			],
		},
		{
			id: 22,
			text: '22 Hard desktop question example?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: true
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: false
			},
			],
		},
		{
			id: 23,
			text: '23 Hard desktop question example?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: true
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: false
			},
			],
		},
		{
			id: 24,
			text: '24 Hard desktop question example?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: true
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: false
			},
			],
		},
		{
			id: 25,
			text: '25 Hard desktop question example?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: true
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: false
			},
			],
		},
			// Add more hard desktop questions...
		],
	},
	mobile: {
		easy: [{
			id: 31,
			text: '1 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [x2, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [iosAlbum, android],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [iosSettings, android],
				isCorrect: true
			},
			],
		},
		{
			id: 32,
			text: '2 Can you identify the Album in your phone?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [iosSettings, android],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [iosAlbum, android],
				isCorrect: true
			},
			],
		},
		{
			id: 33,
			text: '3 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [amazonPhishing, user],
				isCorrect: true
			},
			],
		},
		{
			id: 34,
			text: '4 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: true
			},
			],
		},
		{
			id: 35,
			text: '5 Can you identify the App Store on your desktop?',
			videos: [test, test],
			options: [{
				label: 'Option A',
				image: [ios, android],
				isCorrect: false
			},
			{
				label: 'Option B',
				image: [set, user],
				isCorrect: false
			},
			{
				label: 'Option C',
				image: [ios, user],
				isCorrect: true
			},
			],
		},
		],
		moderate: [{
			id: 41,
			text: 'Moderate mobile question example?',
			options: [{
				label: 'Option A',
				image: 'path_to_mobile_image_1',
				isCorrect: true
			},
			{
				label: 'Option B',
				image: 'path_to_mobile_image_2',
				isCorrect: false
			},
			{
				label: 'Option C',
				image: 'path_to_mobile_image_3',
				isCorrect: false
			},
			],
		},
			// Add more moderate mobile questions...
		],
		hard: [{
			id: 51,
			text: 'Hard mobile question example?',
			options: [{
				label: 'Option A',
				image: 'path_to_mobile_image_1',
				isCorrect: false
			},
			{
				label: 'Option B',
				image: 'path_to_mobile_image_2',
				isCorrect: true
			},
			{
				label: 'Option C',
				image: 'path_to_mobile_image_3',
				isCorrect: false
			},
			],
		},
			// Add more hard mobile questions...
		],
	},
};

export default questions;