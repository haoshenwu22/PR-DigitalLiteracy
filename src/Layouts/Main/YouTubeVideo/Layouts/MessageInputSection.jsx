import React from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import PropTypes from 'prop-types';
import InputField, { TextInputField } from '../Components/InputFields';

export default function MessageInputSection({
	onAddBtnClick,
	isChapterSegAvailable,
	isChapterSegChecked,
	messages,
	handleChange,
	remove,
	handleClickTime,
	handleChaperCheckboxChange,
}) {
	const messageInput = messages.map((input, index) => (
		<div key={messages.length - index - 1} className="flex flex-col gap-6">
			<div className="flex justify-between items-center">
				<div className="text-primaryColor font-semibold font-sans">Segment #{messages.length - index}</div>
				<button
					type="button"
					className="text-primaryColor font-semibold font-sans"
					onClick={() => {
						remove(messages.length - index - 1);
					}}
				>
					- Remove Segment
				</button>
			</div>

			<div className="flex justify-between items-center gap-2">
				<div className="grow">
					<InputField
						headerText="Stop Times:"
						placeHolder="Specify pause times for video in format min:sec, e.g. 0:30"
						value={input.stopTime}
						eventName="stopTimes"
						onChangeFunction={handleChange}
						id={{
							value: messages.length - index - 1,
							tag: 'stopTimeTextField_',
						}}
					/>
				</div>
				<div>
					<button
						type="button"
						className="bg-primaryColor text-white font-semibold font-sans h-10 px-2 rounded-lg whitespace-nowrap"
						onClick={(e) => handleClickTime(index, e)}
					>
						Get Timestamp
					</button>
				</div>
			</div>

			<div className="flex flex-col gap-2">
				<div className="text-primaryColor font-semibold font-sans">Confirmation Message:</div>
				<TextInputField
					value={input.messages}
					id={{
						value: messages.length - index - 1,
						tag: 'confirmationTextField_',
					}}
					onChangeFunction={handleChange}
					eventName="messages"
				/>
			</div>
		</div>
	));

	return (
		<div className="bg-backgroundColor shadow-md rounded-xl py-12 px-12">
			<div className="flex flex-col gap-6">
				<div className="flex justify-between items-center">
					<div>
						{isChapterSegAvailable && (
							<FormControlLabel
								control={<Checkbox checked={isChapterSegChecked} onChange={handleChaperCheckboxChange} />}
								label="Use default segmentation from the video"
							/>
						)}
					</div>
					<div>
						{!isChapterSegChecked && (
							<button type="button" onClick={onAddBtnClick} className="text-primaryColor font-semibold font-sans">
								+ Add a Segment
							</button>
						)}
					</div>
				</div>
				<div className="flex flex-col gap-6">{!isChapterSegChecked && <> {messageInput} </>}</div>
			</div>
		</div>
	);
}

MessageInputSection.propTypes = {
	onAddBtnClick: PropTypes.func.isRequired,
	isChapterSegAvailable: PropTypes.bool.isRequired,
	isChapterSegChecked: PropTypes.bool.isRequired,
	messages: PropTypes.arrayOf(PropTypes.string).isRequired,
	handleChange: PropTypes.func.isRequired,
	remove: PropTypes.func.isRequired,
	handleClickTime: PropTypes.func.isRequired,
	handleChaperCheckboxChange: PropTypes.func.isRequired,
};
