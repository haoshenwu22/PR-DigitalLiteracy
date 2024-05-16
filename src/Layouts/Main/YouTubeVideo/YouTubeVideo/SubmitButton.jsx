import React from 'react';
import { Box, Button } from '@mui/material';
import { Colors } from '../../../../constants/Colors';


export default function SubmitButton({handleSubmit}) {
	return (
		<>
		<Box
				sx={{
					height: 'auto',
					margin: 'auto',
					paddingBottom: '2rem',
					width: '90%',
				}}
			>
				<Button variant="contained" onClick={handleSubmit} sx={{ mt: 3, mb: 2, bgcolor: Colors.primaryColor }}>
					Submit
				</Button>
			</Box>,
		</>
	);
}