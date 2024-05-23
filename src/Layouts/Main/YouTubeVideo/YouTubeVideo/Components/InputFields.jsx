import React from 'react';
import { Box, TextField, FormControl, InputLabel, Select } from '@mui/material';
import { TagsInput } from 'react-tag-input-component';
import PropTypes from 'prop-types';
import { inputStyle, multiLineInputStyle } from '../../../ResumeBuilder/styles';

export default function InputField({ headerText, placeHolder, value, onChangeFunction, id }) {
	const handleInputChange = (event) => {
		if (id) {
			onChangeFunction(id.value, event);
		} else {
			onChangeFunction(event.target.value);
		}
	};

	return (
		<div className="flex items-center gap-2 ">
			<div className="text-primaryColor font-semibold font-sans w-28">{headerText}</div>
			<div className="grow">
				<Box
					component="form"
					sx={{
						'& > :not(style)': { width: '100%' },
					}}
					autoComplete="off"
				>
					<TextField
						sx={inputStyle}
						variant="filled"
						value={value}
						placeholder={placeHolder}
						InputProps={{
							id: id ? `${id.tag}${id.value}` : '',
							disableUnderline: true,
						}}
						onChange={handleInputChange}
						focused
					/>
				</Box>
			</div>
		</div>
	);
}

InputField.propTypes = {
	headerText: PropTypes.string.isRequired,
	placeHolder: PropTypes.string.isRequired,
	value: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	id: PropTypes.shape({
		value: PropTypes.number.isRequired,
		tag: PropTypes.string.isRequired,
	}),
};

InputField.defaultProps = {
	id: null,
};

export function TagsInputField({ headerText, placeHolder, value, onChangeFunction, onKeyUpFunction }) {
	return (
		<div className="flex items-center gap-2">
			<div className="text-primaryColor font-semibold font-sans w-28">{headerText}</div>
			<div className="grow">
				<Box
					component="form"
					sx={{
						'& > :not(style)': { width: '100%' },
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
						value={value}
						separators={['Enter']}
						onChange={onChangeFunction}
						placeHolder={placeHolder}
						onKeyUp={onKeyUpFunction}
					/>
				</Box>
			</div>
		</div>
	);
}

TagsInputField.propTypes = {
	headerText: PropTypes.string.isRequired,
	placeHolder: PropTypes.string.isRequired,
	value: PropTypes.arrayOf(PropTypes.string).isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	onKeyUpFunction: PropTypes.func.isRequired,
};

export function DropdownInputField({ headerText, inputLabel, value, onChangeFunction, MenuItems }) {
	return (
		<div className="flex items-center gap-2">
			<div className="text-primaryColor font-semibold font-sans w-28">{headerText}</div>
			<div className="grow">
				<Box
					component="form"
					sx={{
						'& > :not(style)': { width: '100%' },
					}}
					autoComplete="off"
				>
					<FormControl fullWidth>
						<InputLabel id="demo-simple-select-label">{inputLabel}</InputLabel>
						<Select
							labelId="demo-simple-select-label"
							id="demo-simple-select"
							label={inputLabel}
							onChange={(e) => onChangeFunction(e.target.value)}
							value={value}
						>
							{MenuItems}
						</Select>
					</FormControl>
				</Box>
			</div>
		</div>
	);
}

DropdownInputField.propTypes = {
	headerText: PropTypes.string.isRequired,
	inputLabel: PropTypes.string.isRequired,
	value: PropTypes.PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	MenuItems: PropTypes.arrayOf(PropTypes.element).isRequired,
};

export function TextInputField({ headerText, value, onChangeFunction, id }) {
	const handleInputChange = (event) => {
		if (id) {
			onChangeFunction(id.value, event);
		} else {
			onChangeFunction(event.target.value);
		}
	};
	return (
		<div className="flex items-center gap-2 bg-red-400">
			{headerText && ( // Conditionally render the header div
				<div className="text-primaryColor font-semibold font-sans w-28">{headerText}</div>
			)}
			<div className="grow">
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
						value={value}
						name="messages"
						InputProps={{
							id: id ? `${id.tag}${id.value}` : '',
							disableUnderline: true,
						}}
						onChange={handleInputChange}
						rows={5}
					/>
				</Box>
			</div>
		</div>
	);
}

TextInputField.propTypes = {
	headerText: PropTypes.string,
	value: PropTypes.string.isRequired,
	onChangeFunction: PropTypes.func.isRequired,
	id: PropTypes.shape({
		value: PropTypes.number.isRequired,
		tag: PropTypes.string.isRequired,
	}),
};

TextInputField.defaultProps = {
	headerText: '',
	id: null,
};
