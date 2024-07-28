import { getFirestore, collection, doc, setDoc, addDoc } from 'firebase/firestore';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db } from '../../../firebase/firebase';

const storage = getStorage();

export default async function addQuizQuestionToFirestore(questionData) {
	try {
		const videoTypeRef = doc(db, 'quiz', questionData.platform);
		const difficultyDocRef = doc(videoTypeRef, 'difficulty', questionData.difficulty);
		const questionsCollectionRef = collection(difficultyDocRef, 'questions');

		const firestoreData = { ...questionData };

		// Convert main question images to Base64
		firestoreData.images = await Promise.all(
			questionData.images.map(
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

		const questionDocRef = doc(questionsCollectionRef, questionData.id);
		await setDoc(questionDocRef, firestoreData);
	} catch (error) {
		console.error('Error adding question:', error);
	}
}
