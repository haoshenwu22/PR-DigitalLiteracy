import React, { useEffect, useState } from 'react';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { useNavigate } from 'react-router-dom';
import sty from './index.module.css';

export default function AnswerResult({ result, setResult }) {
	console.log('result = ', result);
	let wrongArr = [];
	let videoArr = [];
	if (result) {
		wrongArr = result?.filter((v) => {
			let bol = !v.isCorrect;
			if (bol) {
				videoArr = videoArr.concat(v.question.videos);
			}
			return bol;
		});
	}
	return (
		<div>
			<Box>
				<Typography
					sx={{
						color: 'deepskyblue',
					}}
					variant="h4"
					gutterBottom
				>
					Well Done!
				</Typography>
				<Typography
					sx={{
						color: 'deepskyblue',
					}}
					variant="h5"
					gutterBottom
				>
					Here is the suggestions based on your result.
				</Typography>
			</Box>
			<Box>
				<Typography variant="h6" gutterBottom>
					Your score is
				</Typography>
				<Typography variant="h6" gutterBottom>
					{result?.length - wrongArr.length}/{result?.length}
				</Typography>
			</Box>
			{videoArr.map((v) => {
				return (
					<Box
						sx={{
							marginBottom: 2,
						}}
					>
						<video
							style={{
								maxWidth: '100%',
							}}
							src={v}
							controls
						></video>
					</Box>
				);
			})}

			<Box sx={{}}>
				<Button
					sx={{
						width: '100%',
					}}
					onClick={() => {
						setResult(null);
					}}
					variant="contained"
				>
					Do it again?
				</Button>
			</Box>
		</div>
	);
}
