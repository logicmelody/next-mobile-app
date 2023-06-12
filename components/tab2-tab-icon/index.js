import PropTypes from 'prop-types';
import {
	StyledContainer,
} from './styles';

const propTypes = {
	isSelected: PropTypes.bool,
}

const defaultProps = {
	isSelected: false,
};

function Tab2TabIcon({
	isSelected,
}) {
	return (
		<StyledContainer
			isSelected={isSelected}
		>
			Tab 2
		</StyledContainer>
	);
}

Tab2TabIcon.propTypes = propTypes;
Tab2TabIcon.defaultProps = defaultProps;

export default Tab2TabIcon;
