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
	if (result) {
		wrongArr = result?.filter((v, i) => {
			let bol = !v.isCorrect;
			v.index = i;
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
			{wrongArr?.map((v) => {
				return (
					<Box
						sx={{
							marginBottom: 2,
							borderBottom: '1px solid #ddd',
							paddingBottom: 2,
						}}
					>
						<Typography variant="h6" gutterBottom>
							{v.index + 1}. {v.question.text}
						</Typography>

						{v.question.answerText && (
							<Typography variant="subtitle2" gutterBottom>
								{v.question.answerText}
							</Typography>
						)}

						{v?.question?.images?.map((url) => {
							return (
								<Box
									sx={{
										marginBottom: 1,
									}}
								>
									<img
										style={{
											maxWidth: '100%',
										}}
										src={url}
									/>
								</Box>
							);
						})}
						{v?.question?.videos?.map((url) => {
							return (
								<Box
									sx={{
										marginBottom: 1,
									}}
								>
									<video
										style={{
											maxWidth: '100%',
										}}
										src={url}
										controls
									></video>
								</Box>
							);
						})}
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
