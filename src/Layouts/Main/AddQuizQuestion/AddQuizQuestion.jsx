import React, { useState } from 'react';
import addQuizQuestionToFirestore from './addQuizFirestore';

export default function AddQuizQuestions() {
	const [platform, setPlatform] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [images, setImages] = useState([]);
	const [id, setId] = useState('');
	const [answerText, setAnswerText] = useState('');
	const [question, setQuestion] = useState({
		text: '',
		videos: [],
		images: [],
		options: [],
	});

	const handleOptionChange = (index, field, value) => {
		setQuestion((prevQuestion) => ({
			...prevQuestion,
			options: prevQuestion.options.map((option, i) => (i === index ? { ...option, [field]: value } : option)),
		}));
	};

	const handleAddOption = () => {
		setQuestion((prevQuestion) => ({
			...prevQuestion,
			options: [...prevQuestion.options, { label: '', images: [], isCorrect: false }],
		}));
	};

	const handleRemoveOption = (index) => {
		setQuestion((prevQuestion) => ({
			...prevQuestion,
			options: prevQuestion.options.filter((_, i) => i !== index),
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const questionData = {
			platform,
			difficulty,
			id,
			text: question.text,
			images,
			answerText,
			options: question.options,
		};

		try {
			await addQuizQuestionToFirestore(questionData);
			console.log('Question added successfully!');

			// Reset form fields
			setPlatform('');
			setDifficulty('');
			setId('');
			setQuestion({
				text: '',
				videos: [],
				images: [],
				options: [],
			});
			setAnswerText('');
			setImages([]);
		} catch (error) {
			console.error('Error adding question:', error);
		}
	};

	const handleOptionImageDrop = (e, optionIndex) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		setQuestion((prevQuestion) => ({
			...prevQuestion,
			options: prevQuestion.options.map((option, index) => {
				if (index === optionIndex) {
					return {
						...option,
						images: [...option.images, ...files],
					};
				}
				return option;
			}),
		}));
	};

	const handleImageDrop = (e, field) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		setImages((prevImages) => [...prevImages, ...files]);
	};

	const handleImageDragOver = (e) => {
		e.preventDefault();
	};

	return (
		<form onSubmit={handleSubmit} onDragOver={handleImageDragOver} className="bg-white p-8 rounded-lg shadow-md">
			<div>
				<label htmlFor="platform" className="block text-gray-700 font-bold mb-2">
					Platform:
				</label>
				<select
					id="platform"
					value={platform}
					onChange={(e) => setPlatform(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				>
					<option value="">Select Platform</option>
					<option value="mobile">Mobile</option>
					<option value="desktop">Desktop</option>
				</select>
			</div>
			<div>
				<label htmlFor="difficulty" className="block text-gray-700 font-bold mb-2 mt-6">
					Difficulty:
				</label>
				<select
					id="difficulty"
					value={difficulty}
					onChange={(e) => setDifficulty(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				>
					<option value="">Select Difficulty</option>
					<option value="easy">Easy</option>
					<option value="medium">Medium</option>
					<option value="hard">Hard</option>
				</select>
			</div>
			<div>
				<label htmlFor="id" className="block text-gray-700 font-bold mb-2 mt-6">
					ID:
				</label>
				<input
					type="text"
					id="id"
					value={id}
					onChange={(e) => setId(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
				/>
			</div>
			<div>
				<label htmlFor="text" className="block text-gray-700 font-bold mb-2 mt-6">
					Question Text:
				</label>
				<textarea
					id="text"
					value={question.text}
					onChange={(e) => setQuestion((prevQuestion) => ({ ...prevQuestion, text: e.target.value }))}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
				/>
			</div>
			<div
				onDrop={(e) => handleImageDrop(e, 'images')}
				className="mt-6"
				style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}
			>
				<p className="text-gray-500">Drag & Drop Images for Question</p>
				<div className="flex flex-wrap">
					{images.map((image, index) => (
						<img
							key={index}
							src={URL.createObjectURL(image)}
							alt={`Question Image ${index}`}
							className="max-w-xs h-auto mr-2 mb-2 rounded-md"
						/>
					))}
				</div>
			</div>
			<div>
				<label htmlFor="answerText" className="block text-gray-700 font-bold mb-2 mt-6">
					Answer Text:
				</label>
				<textarea
					type="text"
					id="answerText"
					value={answerText}
					onChange={(e) => setAnswerText(e.target.value)}
					className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
				/>
			</div>
			<h3 className="text-lg font-bold mb-4 mt-6">Options:</h3>
			{question.options.map((option, index) => (
				<div key={index} className="mb-4 border rounded-md p-4 shadow-sm">
					<div className="mb-2">
						<label htmlFor={`optionLabel${index}`} className="block text-gray-700 font-bold mb-2">
							Label:
						</label>
						<input
							type="text"
							id={`optionLabel${index}`}
							value={option.label}
							onChange={(e) => handleOptionChange(index, 'label', e.target.value)}
							className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</div>

					<div // Drag-and-drop area for option images
						onDrop={(e) => handleOptionImageDrop(e, index)}
						className="mb-2 border-2 border-dashed border-gray-300 p-4 flex flex-wrap cursor-pointer"
					>
						<div className="mb-2">
							<p className="text-gray-500">Drag & Drop Images for Option {index + 1}</p>
							<div className="flex flex-wrap">
								{option.images.map((image, imgIndex) => (
									<img
										key={imgIndex}
										src={URL.createObjectURL(image)}
										alt={`Option ${index + 1} Image ${imgIndex}`}
										className="max-w-xs h-auto mr-2 mb-2 rounded-md"
									/>
								))}
							</div>
						</div>
					</div>

					<div className="flex items-center mb-2">
						<input
							type="checkbox"
							id={`optionIsCorrect${index}`}
							checked={option.isCorrect}
							onChange={(e) => handleOptionChange(index, 'isCorrect', e.target.checked)}
							className="mr-2 leading-tight"
						/>
						<label htmlFor={`optionIsCorrect${index}`} className="text-gray-700">
							Is Correct
						</label>
					</div>
					<button
						type="button"
						onClick={() => handleRemoveOption(index)}
						className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
					>
						Remove Option
					</button>
				</div>
			))}
			<button
				type="button"
				onClick={handleAddOption}
				className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mt-4"
			>
				Add Option
			</button>
			<div className="flex justify-center mt-8">
				<button
					type="submit"
					className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
				>
					Submit
				</button>
			</div>
		</form>
	);
}
