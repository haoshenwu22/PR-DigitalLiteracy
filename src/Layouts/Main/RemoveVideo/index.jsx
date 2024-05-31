import { fetchVideosFromFirebase, deleteAndArchiveVideo } from '../../../firebase/firebaseReadWrite';

function RemoveYoutubeVideo() {
	const videoValue = fetchVideosFromFirebase();

	// ... inside your component ...
	const handleDeleteVideo = async (videoId) => {
		const success = await deleteAndArchiveVideo(videoId);

		if (success) {
			console.log('Video deleted successfully');
			// Update the UI to reflect the deletion
		} else {
			console.log('Video deleted failed');
		}
	};
	// ...inside your component...
	return (
		<div>
			<ul>
				{videoValue.map((video) => (
					<li key={video.key}>
						<h3>{video.key}</h3>
						{/* ...other video details... */}

						<button type="button" onClick={() => handleDeleteVideo(video.key)}>
							Delete
						</button>
					</li>
				))}
			</ul>
		</div>
	);
}

export default RemoveYoutubeVideo;
