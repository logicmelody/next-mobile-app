import PropTypes from 'prop-types';

import {
	StyledMenuTitle,
} from './styles';

const propTypes = {
	title: PropTypes.string,
	onClickTitle: PropTypes.func,
};

const defaultProps = {
	title: '',
	onClickTitle: () => {},
};

function RedHeader({
	title,
	onClickTitle,
}) {
	return (
		<StyledMenuTitle
			onClick={onClickTitle}
		>
			<h1>{title}</h1>
		</StyledMenuTitle>
	);
}

RedHeader.propTypes = propTypes;
RedHeader.defaultProps = defaultProps;

export default RedHeader;
