import React, { useEffect, useState } from 'react';
import { MenuItem, Divider } from '@mui/material';
import PropTypes from 'prop-types';
import InputField, { TagsInputField, DropdownInputField } from '../Components/InputFields';

export default function VideoInputSection({
	url,
	setUrl,
	tags,
	setTags,
	handleTagsKeyPress,
	operatingSystem,
	setOs,
	category,
	setCategory,
}) {
	const [inputValue, setInputValue] = useState(url); // Local state for value

	useEffect(() => {
		setInputValue(url); // Sync with parent's value
	}, [url]); // Trigger update when the parent's value changes

	return (
		<div className="bg-backgroundColor shadow-2xl rounded-xl py-12 px-12">
			<div className="flex flex-col gap-6">
				<InputField
					headerText="Youtube Link:"
					placeHolder="Input Youtube Video Url"
					value={inputValue}
					onChangeFunction={setUrl}
				/>

				<TagsInputField
					headerText="Tags:"
					placeHolder="To add tags, input the desired word and press Enter"
					value={tags}
					onChangeFunction={setTags}
					onKeyUpFunction={handleTagsKeyPress}
				/>

				<DropdownInputField
					headerText="Operating System:"
					inputLabel="What kind of device is this for?"
					value={operatingSystem}
					onChangeFunction={setOs}
					MenuItems={[
						<MenuItem key="Mobile Devices" disabled>
							Mobile Devices
						</MenuItem>,
						<MenuItem key="iOS" value="iOS">
							iOS
						</MenuItem>,
						<MenuItem key="Android" value="Android">
							Android
						</MenuItem>,
						<Divider key="divider" />,
						<MenuItem key="PC" disabled>
							PC
						</MenuItem>,
						<MenuItem key="Windows" value="Windows">
							Windows
						</MenuItem>,
						<MenuItem key="Mac" value="Mac">
							Mac
						</MenuItem>,
						<MenuItem key="Linux" value="Linux">
							Linux
						</MenuItem>,
						<Divider key="divider" />,
						<MenuItem key="All" value="All">
							All
						</MenuItem>,
					]}
				/>

				<DropdownInputField
					headerText="Video Category:"
					inputLabel="What category is this video for?"
					value={category}
					onChangeFunction={setCategory}
					MenuItems={[
						<MenuItem key="daily_life" value="daily_life">
							Technology Use in Daily Life
						</MenuItem>,
						<MenuItem key="safety_privacy" value="safety_privacy">
							Technology Safety and Privacy
						</MenuItem>,
						<MenuItem key="class_word" value="class_word">
							Technology use for Class and Work
						</MenuItem>,
						<MenuItem key="finance" value="finance">
							Financial Well Being and Management
						</MenuItem>,
					]}
				/>
			</div>
		</div>
	);
}

VideoInputSection.propTypes = {
	url: PropTypes.string.isRequired,
	setUrl: PropTypes.func.isRequired,
	tags: PropTypes.arrayOf(PropTypes.string).isRequired,
	setTags: PropTypes.func.isRequired,
	handleTagsKeyPress: PropTypes.func.isRequired,
	operatingSystem: PropTypes.string.isRequired,
	setOs: PropTypes.func.isRequired,
	category: PropTypes.string.isRequired,
	setCategory: PropTypes.func.isRequired,
};
