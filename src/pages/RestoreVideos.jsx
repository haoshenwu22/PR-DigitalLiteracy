import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import RestoreVideo from '../Layouts/Main/RestoreVideo';

function RestoreVideos() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser && currentUser.uid === process.env.REACT_APP_ADMIN_UID) {
			navigate('/restoreVideos');
		} else {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return (
		<div>
			<RestoreVideo />
		</div>
	);
}

export default RestoreVideos;
