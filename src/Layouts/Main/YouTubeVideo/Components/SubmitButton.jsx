import React from 'react';
import { Button } from '@mui/material';
import PropTypes from 'prop-types';
import { Colors } from '../../../../constants/Colors';

export default function SubmitButton({ handleSubmit }) {
	return (
		<div>
			<Button variant="contained" onClick={handleSubmit} sx={{ bgcolor: Colors.primaryColor }}>
				Submit
			</Button>
		</div>
	);
}

SubmitButton.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
};
