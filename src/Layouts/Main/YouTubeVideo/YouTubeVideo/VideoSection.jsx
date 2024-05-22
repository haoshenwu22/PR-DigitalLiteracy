import React from 'react'; // Correctly import React and useRef
import { Box } from '@mui/material';
import ReactPlayer from 'react-player/youtube';

export default function VideoSection({ playerRef, url }) {
	return (
		<div className="sticky top-32 bg-slate-200 shadow-xl">
			<div style={{ aspectRatio: '16/9' }}>
				<ReactPlayer
					ref={playerRef}
					className="react-player"
					url={url}
					width="100%"
					height="100%"
					config={{
						youtube: {
							playerVars: {
								controls: 1,
								showinfo: 1,
							},
						},
					}}
				/>
			</div>
		</div>
	);
}
