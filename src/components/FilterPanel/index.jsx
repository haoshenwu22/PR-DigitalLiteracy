import { useState } from 'react';
import PropTypes from 'prop-types';
import {
	Drawer,
	useMediaQuery,
	FormGroup,
	FormControlLabel,
	Checkbox,
	Button,
	Accordion,
	AccordionDetails,
	AccordionSummary,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FilterPanel = ({ filterGroups, onSave, appliedFilterTags }) => (
	<div>
		<div className="md:hidden">
			<FilterPanelMobile filterGroups={filterGroups} onSave={onSave} appliedFilterTags={appliedFilterTags} />
		</div>
		<div className="hidden md:flex md:sticky md:top-28 md:overflow-y-auto md:max-h-screen md:border-r md:border-gray-200 ">
			<FilterPanelDesktop filterGroups={filterGroups} onSave={onSave} appliedFilterTags={appliedFilterTags} />
		</div>
	</div>
);

const FilterPanelMobile = ({ filterGroups, onSave, appliedFilterTags }) => {
	const [isOpen, setIsOpen] = useState(false);
	const container = window !== undefined ? () => window.document.body : undefined;
	const onClose = () => {
		setIsOpen(false);
	};

	const openDrawer = () => {
		setIsOpen(true);
	};

	return (
		<>
			<Button onClick={openDrawer}>Filter results</Button>
			<Drawer
				anchor="left"
				container={container}
				variant="temporary"
				open={isOpen}
				onClose={onClose}
				ModalProps={{
					keepMounted: true, // Better open performance on mobile
				}}
				sx={{
					display: { xs: 'block', lg: 'none' },
					'& .MuiDrawer-paper': { boxSizing: 'border-box', width: 240, padding: '20px' },
				}}
			>
				<FilterPanelContent filterGroups={filterGroups} onSave={onSave} appliedFilterTags={appliedFilterTags} />
			</Drawer>
		</>
	);
};

const FilterPanelDesktop = ({ filterGroups, onSave, appliedFilterTags }) => (
	<div className="w-80 px-8">
		<FilterPanelContent filterGroups={filterGroups} onSave={onSave} appliedFilterTags={appliedFilterTags} />
	</div>
);

const FilterPanelContent = ({ filterGroups, onSave, appliedFilterTags }) => {
	const [seletedFilterTags, setFormValue] = useState(appliedFilterTags);

	return (
		<>
			{/* <h2 className="text-xl mb-8">Filter By</h2> */}
			{filterGroups.map(({ subheading, filters }) => (
				<Accordion defaultExpanded key={subheading}>
					<AccordionSummary expandIcon={<ExpandMoreIcon />}>
						<span className="ml-4">{subheading}</span>
					</AccordionSummary>

					<AccordionDetails>
						<div className="overflow-y-auto max-h-100">
							<FormGroup>
								{filters.map((f) => (
									<FormControlLabel
										key={f}
										control={<Checkbox defaultChecked />}
										label={f[0]}
										value={seletedFilterTags}
										checked={seletedFilterTags.includes(f[1])}
										onChange={(event) => {
											const isChecked = event.target.checked;
											if (isChecked) {
												setFormValue((prevValue) => [...prevValue, f[1]]);
											} else {
												setFormValue((prevValue) => prevValue.filter((value) => value !== f[1]));
											}
										}}
									/>
								))}
							</FormGroup>
						</div>
					</AccordionDetails>
				</Accordion>
			))}
			<div>
				<Button variant="contained" fullWidth onClick={() => onSave(seletedFilterTags)}>
					Apply
				</Button>
			</div>
		</>
	);
};

FilterPanel.propTypes = {
	filterGroups: PropTypes.arrayOf(
		PropTypes.shape({
			subheading: PropTypes.string.isRequired,
			filters: PropTypes.array.isRequired,
		}),
	).isRequired,
	onSave: PropTypes.func.isRequired,
	appliedFilterTags: PropTypes.array,
};

FilterPanelMobile.propTypes = {
	filterGroups: PropTypes.arrayOf(
		PropTypes.shape({
			subheading: PropTypes.string.isRequired,
			filters: PropTypes.array.isRequired,
		}),
	).isRequired,
	onSave: PropTypes.func.isRequired,
	appliedFilterTags: PropTypes.array,
};

FilterPanelDesktop.propTypes = {
	filterGroups: PropTypes.arrayOf(
		PropTypes.shape({
			subheading: PropTypes.string.isRequired,
			filters: PropTypes.array.isRequired,
		}),
	).isRequired,
	onSave: PropTypes.func.isRequired,
	appliedFilterTags: PropTypes.array,
};

FilterPanelContent.propTypes = {
	filterGroups: PropTypes.arrayOf(
		PropTypes.shape({
			subheading: PropTypes.string.isRequired,
			filters: PropTypes.array.isRequired,
		}),
	).isRequired,
	onSave: PropTypes.func.isRequired,
	appliedFilterTags: PropTypes.array.isRequired,
};

export default FilterPanel;
