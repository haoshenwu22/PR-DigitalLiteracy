import React, { useState, useEffect } from 'react';
import {
	fetchVideosFromFirebase,
	deleteAndArchiveVideo,
	fetchTopicsAndSubtopics,
} from '../../../firebase/firebaseReadWrite';

function RemoveVideo() {
	const videoValue = fetchVideosFromFirebase();
	const topicsAndSubtopics = fetchTopicsAndSubtopics();
	const [expandedTopics, setExpandedTopics] = useState([]);

	console.log(videoValue);

	const handleDeleteVideo = async (videoId) => {
		// ... (delete video logic)
	};

	const filteredVideos = videoValue.filter((video) => {
		if (expandedTopics.length === 0) {
			return true;
		}

		const topic = topicsAndSubtopics.find(([t]) => t === video.category);
		return topic && expandedTopics.includes(video.category) && topic[1].includes(video.subtopic);
	});

	const toggleTopic = (topic) => {
		setExpandedTopics((prevTopics) =>
			prevTopics.includes(topic) ? prevTopics.filter((t) => t !== topic) : [...prevTopics, topic],
		);
	};

	if (videoValue && topicsAndSubtopics) {
		console.log(topicsAndSubtopics);
		console.log(
			topicsAndSubtopics.map(([topic, subtopics]) => (
				<div key={topic}>
					<button onClick={() => toggleTopic(topic)}>{topic}</button>
					{expandedTopics.includes(topic) && (
						<ul>
							{subtopics.map((subtopic) => (
								<li key={subtopic}>{subtopic}</li>
							))}
						</ul>
					)}
				</div>
			)),
		);
		return (
			<div>
				<div>
					{topicsAndSubtopics.map(([topic, subtopics]) => (
						<div key={topic}>
							<button onClick={() => toggleTopic(topic)}>{topic}</button>
							{expandedTopics.includes(topic) && (
								<ul>
									{subtopics.map((subtopic) => (
										<li key={subtopic}>{subtopic}</li>
									))}
								</ul>
							)}
						</div>
					))}
				</div>

				<table>
					<thead>
						<tr>
							<th>Thumbnail</th>
							<th>Title</th>
							<th>Category</th>
							<th>Subtopic</th>
							<th>Actions</th>
						</tr>
					</thead>
					<tbody>
						{filteredVideos.map((video) => (
							<tr key={video.key}>
								<td>{/* Render video thumbnail */}</td>
								<td>{video.title}</td>
								<td>{video.category}</td>
								<td>{video.subtopic}</td>
								<td>
									<button onClick={() => handleDeleteVideo(video.key)}>Delete</button>
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}
}

export default RemoveVideo;
