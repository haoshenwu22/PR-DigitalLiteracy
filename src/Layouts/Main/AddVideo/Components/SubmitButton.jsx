import React from 'react';
import PropTypes from 'prop-types';

export default function SubmitButton({ handleSubmit, submitText }) {
	return (
		<button
			onClick={handleSubmit}
			className="px-12 py-2 rounded-lg bg-primaryColor hover:bg-lightBlue font-semibold text-white"
			type="button"
		>
			{submitText}
		</button>
	);
}

SubmitButton.propTypes = {
	handleSubmit: PropTypes.func.isRequired,
	submitText: PropTypes.string.isRequired,
};
