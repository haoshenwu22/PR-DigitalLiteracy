import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import RemoveVideo from '../Layouts/Main/YouTubeVideo/RemoveYoutubeVideo';

function RemoveVideos() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser && currentUser.uid === process.env.REACT_APP_ADMIN_UID) {
			navigate('/removeVideos');
		} else {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return (
		<div>
			<RemoveVideo />
		</div>
	);
}

export default RemoveVideos;
