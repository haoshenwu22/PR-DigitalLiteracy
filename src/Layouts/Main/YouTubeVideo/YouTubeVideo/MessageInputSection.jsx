import React from 'react';
import { Box, Grid, TextField, Button , Checkbox, FormControlLabel } from '@mui/material';
import { Colors } from '../../../../constants/Colors.js';
import { inputStyle, multiLineInputStyle } from '../../ResumeBuilder/styles.js';




export default function MessageInputSection({ onAddBtnClick, isChapterSegAvailable, isChapterSegChecked, messages, handleChange, remove, handleClickTime, handleChaperCheckboxChange }) {
	const messageInput = messages.map((input, index) => (
		<Box key={messages.length - index - 1}>
			<Grid
				container
				spacing={2}
				sx={{
					margin: 'auto',
					width: '97%',
					paddingRight: '0.5rem',
					marginTop: '1rem',
				}}
			>
				<Grid item md={6} sm={6} xs={12} order={{ xs: 1 }}>
					<Box
						sx={{
							width: '97%',
							margin: 'auto',
							color: Colors.primaryColor,
							fontWeight: '700',
						}}
					>
						Segment #{messages.length - index}
					</Box>
				</Grid>

				<Grid item md={6} sm={6} xs={12} order={{ xs: 1 }}>
					<Box
						sx={{
							color: Colors.primaryColor,
							fontSize: { sm: '1rem', xs: '0.8rem' },
							textAlign: 'right',
							paddingRight: '1rem',
							cursor: 'pointer',
						}}
						onClick={() => {
							remove(messages.length - index - 1);
						}}
					>
						- Remove Segment
					</Box>
				</Grid>
			</Grid>

			<Grid
				key={messages.length - index - 1}
				id={`experience-form-${messages.length - index - 1}`}
				container
				spacing={2}
				sx={{ margin: 'auto', width: '97%', paddingRight: '0.5rem' }}
			>
				<Grid container spacing={2} sx={{ margin: 'auto', width: '97%', paddingRight: '0.5rem' }}>
					<Grid item>
						<Box
							sx={{
								marginTop: '1.2rem',
								color: Colors.primaryColor,
								fontSize: '1rem',
								fontFamily: 'Inria Sans',
								fontWeight: '700',
								marginLeft: '0.5rem',
							}}
						>
							Stop Times:
						</Box>
					</Grid>
					<Grid item md={8} sm={6} xs={12}>
						<Box
							component="form"
							sx={{
								'& > :not(style)': { width: '100%' },
							}}
							autoComplete="off"
						>
							<TextField
								value={input.stopTime}
								// borderRadius=".375rem"
								sx={inputStyle}
								variant="filled"
								placeholder="Specify pause times for video in format min:sec, e.g. 0:30"
								focused
								onChange={(e) => {
									handleChange(messages.length - index - 1, e);
								}}
								name="stopTimes"
								InputProps={{
									id: `stopTimeTextField_${messages.length - index - 1}`,
									disableUnderline: true,
								}}
							/>
						</Box>
					</Grid>
					<Grid item md={2} sm={3} xs={12}>
						<button
							onClick={(e) => handleClickTime(index, e)}
							style={{
								width: '100%',
								height: '100%',
								fontSize: '16px',
								backgroundColor: Colors.primaryColor, 
								color: '#fff',
								cursor: 'pointer',
								fontWeight: 'bold', 
							}}
						>
							Get Timestamp
						</button>
					</Grid>
				</Grid>

				{/* Description row */}
				<Grid item xs={12}>
					<Grid item xs={12}>
						<Grid item>
							<Box
								sx={{
									marginTop: '1.2rem',
									color: Colors.primaryColor,
									fontSize: '1.1rem',
									fontFamily: 'Inria Sans',
									fontWeight: '700',
									marginLeft: '0.5rem',
									marginBottom: '0.5rem',
								}}
							>
								Confirmation Message:
							</Box>
						</Grid>
						<Box
							component="form"
							sx={{
								'& > :not(style)': { width: '100%' },
							}}
							autoComplete="off"
						>
							<TextField
								sx={multiLineInputStyle}
								variant="standard"
								multiline
								value={input.messages}
								name="messages"
								InputProps={{
									id: `confirmationTextField_${messages.length - index - 1}`,
									disableUnderline: true,
								}}
								onChange={(e) => {
									handleChange(messages.length - index - 1, e);
								}}
								rows={5}
							/>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	));
	
	return (
		<Box
				sx={{
					backgroundColor: Colors.backgroundColor,
					height: 'auto',
					borderRadius: '1rem',
					boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
					margin: 'auto',
					paddingBottom: '2rem',
					width: '90%',
					marginTop: '2rem',
					'@media screen and (min-width: 1444px)': {
						display: 'flex',
						flexDirection: 'column', 
						justifyContent: 'flex-start', 
						alignItems: 'flex-start', 
						marginTop: '2rem',
						marginLeft: '2rem', 
						width: '53%', 
					},
				}}
			>
				<Grid container spacing={2} sx={{ margin: 'auto', width: '97%' }}>
					{isChapterSegAvailable && (
						<Grid item xs={6}>
							<FormControlLabel
								control={<Checkbox checked={isChapterSegChecked} onChange={handleChaperCheckboxChange} />}
								label="Use default segmentation from the video"
							/>
						</Grid>
					)}
					{!isChapterSegChecked && (
						<>
							<Grid item xs={isChapterSegAvailable ? 6 : 12} style={{ textAlign: 'end' }}>
								<Box
									sx={{
										color: Colors.primaryColor,
										fontSize: { sm: '1rem', xs: '0.8rem' },
										textAlign: 'end',
										marginTop: '1rem',
										paddingRight: '1rem',
										cursor: 'pointer',
									}}
									onClick={onAddBtnClick}
								>
									+ Add a Segment
								</Box>
							</Grid>
							<Grid item xs={12}>
								{messageInput}
							</Grid>
						</>
					)}
				</Grid>
			</Box>
	)

}