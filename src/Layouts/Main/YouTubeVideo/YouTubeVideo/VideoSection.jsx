import React from 'react'; // Correctly import React and useRef
import { Box } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

export default function VideoSection({playerRef, url}){
	return (
		<Box
					sx={{
						display: 'flex',
						justifyContent: 'center',
						alignItems: 'center',
						marginTop: '2rem',
						'@media screen and (min-width: 1444px)': {
							position: 'fixed',
							top: '50%',
							right: '0%',
							transform: 'translateY(-50%)',
							zIndex: 1000, // makes video float. may need to change so it is different with different resolutions
							boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
						},
					}}
				>
					<ReactPlayer
							ref={playerRef}
							className='react-player'
							url = {url}
							// width='100%'
							// height='100%'
							config={{
								youtube: {
									playerVars: {         
										controls: 1,
										showinfo: 1
									}
								}
							}}
					/>
				</Box>
	)
}