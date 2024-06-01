import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../firebase/AuthContext';
import Help from '../Layouts/Main/Help';

function HelpManager() {
	const { currentUser } = useAuth();
	const navigate = useNavigate();

	useEffect(() => {
		if (currentUser && currentUser.uid === process.env.REACT_APP_ADMIN_UID) {
			navigate('/helpManager');
		} else {
			navigate('/');
		}
	}, [currentUser, navigate]);

	return (
		<div>
			<Help />
		</div>
	);
}

export default HelpManager;
