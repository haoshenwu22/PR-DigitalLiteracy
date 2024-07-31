import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ToastContainer, toast, Zoom } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import addQuizQuestionToFirestore from './addQuizFirestore';

export default function AddQuizQuestions() {
	const [platform, setPlatform] = useState('');
	const [difficulty, setDifficulty] = useState('');
	const [id, setId] = useState('');
	const [answerText, setAnswerText] = useState('');
	const [answerImages, setAnswerImages] = useState([]);
	const [questionImages, setQuestionImages] = useState([]);
	const [questionText, setQuestionText] = useState('');
	const [options, setOptions] = useState([]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		const questionData = {
			platform,
			difficulty,
			id,
			questionText,
			questionImages,
			answerText,
			answerImages,
			options,
		};

		try {
			await addQuizQuestionToFirestore(questionData);

			toast.success('Question Added Successfully!', {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Zoom,
			});

			// Reset form fields
			setPlatform('');
			setDifficulty('');
			setId('');

			setQuestionText('');
			setQuestionImages([]);
			setAnswerText('');
			setAnswerImages([]);

			setOptions([]);
		} catch (error) {
			toast.error(`Error adding video: ${error.message}`, {
				position: 'bottom-center',
				autoClose: 5000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
				theme: 'light',
				transition: Zoom,
			});
		}
	};

	const handleImageDragOver = (e) => {
		e.preventDefault();
	};

	const handleAnswerImageDrop = (e) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		const uploadedImages = files.map((file) => ({
			id: uuidv4(),
			file,
		}));

		setAnswerImages((prevImages) => [...prevImages, ...uploadedImages]);
	};

	const handleQuestionImageDrop = (e) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		const uploadedImages = files.map((file) => ({
			id: uuidv4(),
			file,
		}));

		setQuestionImages((prevImages) => [...prevImages, ...uploadedImages]);
	};

	const handleOptionImageDrop = (e, optionIndex) => {
		e.preventDefault();
		const files = Array.from(e.dataTransfer.files);

		const uploadedImages = files.map((file) => ({
			id: uuidv4(),
			file,
		}));

		setOptions((prevOptions) =>
			prevOptions.map((option, index) =>
				index === optionIndex ? { ...option, images: [...option.images, ...uploadedImages] } : option,
			),
		);
	};

	const handleOptionChange = (index, field, value) => {
		setOptions((prevOptions) => prevOptions.map((option, i) => (i === index ? { ...option, [field]: value } : option)));
	};

	const handleAddOption = () => {
		setOptions((prevOptions) => [...prevOptions, { id: uuidv4(), label: '', images: [], isCorrect: false }]);
	};

	const handleRemoveOption = (index) => {
		setOptions((prevOptions) => prevOptions.filter((_, i) => i !== index));
	};

	return (
		<form
			onSubmit={handleSubmit}
			onDragOver={handleImageDragOver}
			className="bg-white p-8 rounded-lg shadow-md text-primaryColor"
		>
			<section className="bg-backgroundColor shadow-md rounded-xl py-12 px-12">
				<div>
					<label htmlFor="platform" className="block text-gray-700 font-bold mb-2">
						Platform:
						<select
							id="platform"
							value={platform}
							onChange={(e) => setPlatform(e.target.value)}
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						>
							<option value="">Select Platform</option>
							<option value="mobile">Mobile</option>
							<option value="desktop">Desktop</option>
						</select>
					</label>
				</div>

				<div>
					<label htmlFor="difficulty" className="block text-gray-700 font-bold mb-2 mt-6">
						Difficulty:
						<select
							id="difficulty"
							value={difficulty}
							onChange={(e) => setDifficulty(e.target.value)}
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						>
							<option value="">Select Difficulty</option>
							<option value="easy">Easy</option>
							<option value="medium">Medium</option>
							<option value="hard">Hard</option>
						</select>
					</label>
				</div>

				<div>
					<label htmlFor="id" className="block text-gray-700 font-bold mb-2 mt-6">
						ID:
						<input
							type="text"
							id="id"
							value={id}
							onChange={(e) => setId(e.target.value)}
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						/>
					</label>
				</div>

				<div>
					<label htmlFor="text" className="block text-gray-700 font-bold mb-2 mt-6">
						Question Text:
						<textarea
							id="text"
							value={questionText}
							onChange={(e) => setQuestionText(e.target.value)}
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
						/>
					</label>
				</div>

				<div
					onDrop={(e) => handleQuestionImageDrop(e, 'images')}
					className="mt-8"
					style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}
				>
					<p className="text-gray-500">Drag & Drop Images for Question</p>
					<div className="flex flex-wrap">
						{questionImages.map((image, index) => (
							<img
								key={image.id}
								src={URL.createObjectURL(image.file)}
								alt={`Question Index ${index}`}
								className="max-w-xs h-auto mr-2 mb-2 rounded-md"
							/>
						))}
					</div>
				</div>

				<div>
					<label htmlFor="answerText" className="block text-gray-700 font-bold mb-2 mt-6">
						Answer Text:
						<textarea
							type="text"
							id="answerText"
							value={answerText}
							onChange={(e) => setAnswerText(e.target.value)}
							className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-20"
						/>
					</label>
				</div>

				<div
					onDrop={(e) => handleAnswerImageDrop(e, 'images')}
					className="mt-8"
					style={{ border: '2px dashed #ccc', padding: '20px', cursor: 'pointer' }}
				>
					<p className="text-gray-500">Drag & Drop Images for Answers</p>
					<div className="flex flex-wrap">
						{answerImages.map((image, index) => (
							<img
								key={image.id}
								src={URL.createObjectURL(image.file)}
								alt={`Answer Index ${index}`}
								className="max-w-xs h-auto mr-2 mb-2 rounded-md"
							/>
						))}
					</div>
				</div>
			</section>

			<section className="bg-backgroundColor shadow-md rounded-xl py-12 px-12 mt-10 text-primaryColor">
				<h3 className="text-lg font-bold mb-4 mt-6">Options:</h3>
				{options.map((option, optionIndex) => (
					<div key={option.id} className="mb-4 border-2 rounded-md p-4 shadow-sm">
						<div className="mb-2">
							<label htmlFor={`optionLabel${optionIndex}`} className="block text-gray-700 font-bold mb-2">
								Label:
								<input
									type="text"
									id={`optionLabel${optionIndex}`}
									value={option.label}
									onChange={(e) => handleOptionChange(optionIndex, 'label', e.target.value)}
									className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
								/>
							</label>
						</div>

						<div
							onDrop={(e) => handleOptionImageDrop(e, optionIndex)}
							className="mb-2 border-2 border-dashed border-gray-300 p-4 flex flex-wrap cursor-pointer"
						>
							<div className="mb-2">
								<p className="text-gray-500">Drag & Drop Images for Option {optionIndex + 1}</p>
								<div className="flex flex-wrap">
									{option.images.map((image, imgIndex) => (
										<img
											key={image.id}
											src={URL.createObjectURL(image.file)}
											alt={`Option ${optionIndex + 1} Index ${imgIndex}`}
											className="max-w-xs h-auto mr-2 mb-2 rounded-md"
										/>
									))}
								</div>
							</div>
						</div>

						<div className="flex items-center mb-2">
							<label htmlFor={`optionIsCorrect${optionIndex}`} className="text-gray-700">
								Is Correct
								<input
									type="checkbox"
									id={`optionIsCorrect${optionIndex}`}
									checked={option.isCorrect}
									onChange={(e) => handleOptionChange(optionIndex, 'isCorrect', e.target.checked)}
									className="ml-2 leading-tight"
								/>
							</label>
						</div>
						<button
							type="button"
							onClick={() => handleRemoveOption(optionIndex)}
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
			</section>
			<div className="flex justify-center mt-8">
				<button
					type="submit"
					className="bg-primaryColor hover:bg-primaryColorLight text-white font-bold py-2 px-12 text-lg rounded focus:outline-none focus:shadow-outline"
				>
					Submit
				</button>
				<ToastContainer />
			</div>
		</form>
	);
}
