import React from 'react';
import { Box, Grid, TextField, MenuItem, FormControl, InputLabel, Select, Divider } from '@mui/material';
import { TagsInput } from 'react-tag-input-component';
import { Colors } from '../../../../constants/Colors';
import { inputStyle, multiLineInputStyle } from '../../ResumeBuilder/styles.js';

export default function VideoInputSection({
	setUrl,
	url,
	tags,
	setTags,
	handleTagsKeyPress,
	operatingSystem,
	setOs,
	category,
	setCategory,
}) {
	return (
		<Box>
			<Box
				sx={{
					backgroundColor: Colors.backgroundColor,
					height: 'auto',
					borderRadius: '1rem',
					boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
					margin: 'auto',
					paddingBottom: '2rem',
					width: '90%',
					'@media screen and (min-width: 1444px)': {},
				}}
			>
				<Grid container spacing={2} sx={{ margin: 'auto', width: '97%', paddingRight: '0.5rem' }}>
					<Grid item xs={1.6}>
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
							Youtube Link:
						</Box>
					</Grid>
					<Grid item md={10} sm={10} xs={12}>
						<Box
							component="form"
							sx={{
								'& > :not(style)': { width: '100%', paddingBottom: '1rem' },
							}}
							autoComplete="off"
						>
							<TextField
								sx={inputStyle}
								variant="filled"
								value={url}
								placeholder="Input Youtube Video Url"
								InputProps={{
									disableUnderline: true,
								}}
								// onChange={handleUrlChange}
								onChange={(e) => setUrl(e.target.value)}
								focused
							/>
						</Box>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ margin: 'auto', width: '97%', paddingRight: '0.5rem' }}>
					<Grid item xs={1.6}>
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
							Tags:
						</Box>
					</Grid>

					<Grid item md={10} sm={10} xs={12}>
						<Box
							component="form"
							sx={{
								'& > :not(style)': { width: 'auto', padding: '1rem' },
							}}
							autoComplete="off"
						>
							<TagsInput
								InputProps={{
									disableUnderline: true,
								}}
								type="text"
								variant="standard"
								id="search"
								value={tags}
								separators={['Enter']}
								onChange={setTags}
								placeHolder="To add tags, input the desired word and press Enter"
								onKeyUp={handleTagsKeyPress}
							/>
						</Box>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ margin: 'auto', width: '97%', paddingRight: '0.5rem' }}>
					<Grid item xs={1.6}>
						<Box
							sx={{
								marginTop: '2rem',
								color: Colors.primaryColor,
								fontSize: '1rem',
								fontFamily: 'Inria Sans',
								fontWeight: '700',
								marginLeft: '0.5rem',
							}}
						>
							Operating System:
						</Box>
					</Grid>
					<Grid item md={10} sm={10} xs={12}>
						<Box
							component="form"
							sx={{
								'& > :not(style)': { width: '100%' },
							}}
							autoComplete="off"
						>
							<FormControl fullWidth sx={{ marginTop: '1rem' }}>
								<InputLabel id="demo-simple-select-label">What kind of device is this for?</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label=" What kind of device is this for?"
									onChange={(e) => setOs(e.target.value)}
									value={operatingSystem}
								>
									<MenuItem disabled>Mobile Devices</MenuItem>
									<MenuItem value="iOS">iOS</MenuItem>
									<MenuItem value="Android">Android</MenuItem>
									<Divider />
									<MenuItem disabled>PC</MenuItem>
									<MenuItem value="Windows">Windows</MenuItem>
									<MenuItem value="Mac">Mac</MenuItem>
									<MenuItem value="Linux">Linux</MenuItem>
									<Divider />
									<MenuItem value="All">All</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Grid>
				</Grid>
				<Grid container spacing={2} sx={{ margin: 'auto', width: '97%', paddingRight: '0.5rem' }}>
					<Grid item xs={1.6}>
						<Box
							sx={{
								marginTop: '2rem',
								color: Colors.primaryColor,
								fontSize: '1rem',
								fontFamily: 'Inria Sans',
								fontWeight: '700',
								marginLeft: '0.5rem',
							}}
						>
							Video Category:
						</Box>
					</Grid>
					<Grid item md={10} sm={10} xs={12}>
						<Box
							component="form"
							sx={{
								'& > :not(style)': { width: '100%' },
							}}
							autoComplete="off"
						>
							<FormControl fullWidth sx={{ marginTop: '1rem' }}>
								<InputLabel id="demo-simple-select-label">What category is this video for?</InputLabel>
								<Select
									labelId="demo-simple-select-label"
									id="demo-simple-select"
									label=" What category is this video for?"
									onChange={(e) => setCategory(e.target.value)}
									value={category}
								>
									<MenuItem value="daily_life">Technology Use in Daily Life</MenuItem>
									<MenuItem value="safety_privacy">Technology Safety and Privacy</MenuItem>
									<MenuItem value="class_word">Technology use for Class and Word</MenuItem>
									<MenuItem value="finance">Financial Well Being and Management</MenuItem>
								</Select>
							</FormControl>
						</Box>
					</Grid>
				</Grid>
			</Box>
		</Box>
	);
}
