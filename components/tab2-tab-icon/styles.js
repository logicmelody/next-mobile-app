import styled from 'styled-components';

export const StyledContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 50px;
	height: 30px;
	color: ${(props) => {
		const {
			isSelected,
		} = props;

		return isSelected ? 'black' : 'white';
	}};
	background-color: ${(props) => {
		const {
			isSelected,
		} = props;

		return isSelected ? 'red' : 'blue';
	}};
	border-radius: 10px;
`;
