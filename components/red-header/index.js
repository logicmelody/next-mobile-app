import PropTypes from 'prop-types';

import {
	StyledMenuTitle,
} from './styles';

const propTypes = {
	onClickTitle: PropTypes.func,
};

const defaultProps = {
	onClickTitle: () => {},
};

function RedHeader({
	onClickTitle,
}) {
	return (
		<StyledMenuTitle
			onClick={onClickTitle}
		>
			<h1>RedHeader</h1>
		</StyledMenuTitle>
	);
}

RedHeader.propTypes = propTypes;
RedHeader.defaultProps = defaultProps;

export default RedHeader;
