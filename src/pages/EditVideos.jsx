import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
// import EditVideo from '../Layouts/Main/RestoreVideo';

function EditVideos() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser && currentUser.uid === process.env.REACT_APP_ADMIN_UID) {
			navigate('/editVideos');
		} else {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return <div>{/* <EditVideo /> */}</div>;
}

export default EditVideos;
