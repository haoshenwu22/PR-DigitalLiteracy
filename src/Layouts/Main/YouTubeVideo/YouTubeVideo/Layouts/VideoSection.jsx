import React from 'react';
import ReactPlayer from 'react-player/youtube';
import PropTypes from 'prop-types';

export default function VideoSection({ playerRef, url }) {
	return (
		<div className="sticky top-32 bg-backgroundColor shadow-xl">
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

VideoSection.propTypes = {
	playerRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
	url: PropTypes.string.isRequired,
};
