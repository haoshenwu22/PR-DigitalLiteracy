import { getFirestore, collection, doc, setDoc, addDoc, getDoc, query, getDocs, where } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../../firebase/firebase';

export default async function addQuizQuestionToFirestore(questionData) {
	try {
		const quizCollectionRef = collection(db, 'quiz');
		const platformDocRef = doc(quizCollectionRef, questionData.platform);
		const difficultyDocRef = doc(platformDocRef, 'difficulty', questionData.difficulty);
		const questionDocRef = doc(difficultyDocRef, 'questions', questionData.id);

		const firestoreData = { ...questionData };

		// Convert main question images to Base64
		firestoreData.questionImages = await Promise.all(
			questionData.questionImages.map(
				async (imageFile) =>
					new Promise((resolve, reject) => {
						const reader = new FileReader();
						reader.readAsDataURL(imageFile);
						reader.onload = () => resolve(reader.result);
						reader.onerror = (error) => reject(error);
					}),
			),
		);

		// Convert main answer images to Base64
		firestoreData.answerImages = await Promise.all(
			questionData.answerImages.map(
				async (imageFile) =>
					new Promise((resolve, reject) => {
						const reader = new FileReader();
						reader.readAsDataURL(imageFile);
						reader.onload = () => resolve(reader.result);
						reader.onerror = (error) => reject(error);
					}),
			),
		);

		// Convert option images to Base64
		firestoreData.options = await Promise.all(
			questionData.options.map(async (option) => {
				const optionImages = await Promise.all(
					option.images.map(
						async (imageFile) =>
							new Promise((resolve, reject) => {
								const reader = new FileReader();
								reader.readAsDataURL(imageFile);
								reader.onload = () => resolve(reader.result);
								reader.onerror = (error) => reject(error);
							}),
					),
				);
				return { ...option, images: optionImages };
			}),
		);

		// Use setDoc with an empty object to create the documents if they don't exist
		await setDoc(platformDocRef, { platform: questionData.platform });
		await setDoc(difficultyDocRef, { difficulty: questionData.difficulty });

		// Set the question data (this will either create a new document or overwrite if it exists)
		await setDoc(questionDocRef, firestoreData);
		console.log('Question added/updated successfully!');
	} catch (error) {
		console.error('Error adding question:', error);
	}
}

export async function retrieveAllQuestionsForPlatform(platform) {
	try {
		const platformDocRef = doc(db, 'quiz', platform);
		const platformDocSnapshot = await getDoc(platformDocRef);

		if (!platformDocSnapshot.exists()) {
			console.warn(`No platform found with name ${platform}`);
			return null;
		}

		const difficultyCollectionRef = collection(platformDocRef, 'difficulty');
		const difficultySnapshot = await getDocs(difficultyCollectionRef);

		const questionsByDifficulty = {
			easy: [],
			medium: [],
			hard: [],
		};

		for (const difficultyDoc of difficultySnapshot.docs) {
			const difficultyId = difficultyDoc.id;
			const questionsCollectionRef = collection(difficultyDoc.ref, 'questions');
			const questionsSnapshot = await getDocs(questionsCollectionRef);

			for (const questionDoc of questionsSnapshot.docs) {
				const questionData = questionDoc.data();
				questionsByDifficulty[difficultyId].push({
					...questionData,
					id: questionDoc.id,
				});
			}
		}

		return { [platform]: questionsByDifficulty };
	} catch (error) {
		console.error(`Error retrieving questions for platform ${platform}:`, error);
		throw error;
	}
}
