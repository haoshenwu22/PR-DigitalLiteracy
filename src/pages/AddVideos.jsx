import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import AddVideo from '../Layouts/Main/AddVideo';

function AddVideos() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser && currentUser.uid === process.env.REACT_APP_ADMIN_UID) {
			navigate('/addVideos');
		} else {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return (
		<div>
			<AddVideo />
		</div>
	);
}

export default AddVideos;
