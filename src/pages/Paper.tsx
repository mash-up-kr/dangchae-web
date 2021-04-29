import React from 'react';

import Header from 'components/Header';
import styled from 'styled-components';

import AlignIcon from '../assets/icons/Align.svg';
import BackgroundIcon from '../assets/icons/Background.svg';
import CameraIcon from '../assets/icons/Camera.svg';

const TitleSection = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	border-top: solid black 1px;
	border-bottom: solid black 1px;
	padding: 8px 11px;
`;

const ToolBarSection = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: space-between;
	border-bottom: solid black 1px;
`;

const SquareButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background-color: transparent;
	border-style: none;
	border-right: solid black 1px;
`;

const RectangleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 110px;
	height: 40px;
	background-color: transparent;
	border-style: none;
	border-right: solid black 1px;
`;

const ButtonGroup = styled.div`
	display: flex;
	${SquareButton}:nth-child(1) {
		border-left: solid black 1px;
	}
	${RectangleButton}:nth-child(1) {
		border-left: solid black 1px;
	}
`;
const Paper = () => {
	return (
		<>
			<Header />
			<TitleSection>
				<p>당근과채찍</p>
				<p>2020.02.21 (SUN)</p>
			</TitleSection>
			<ToolBarSection>
				<ButtonGroup>
					<SquareButton>
						<img src={CameraIcon} />
					</SquareButton>
					<SquareButton>
						<img src={BackgroundIcon} />
					</SquareButton>
					<SquareButton>
						<img src={AlignIcon} />
					</SquareButton>
				</ButtonGroup>
				<ButtonGroup>
					<RectangleButton>임시저장</RectangleButton>
					<RectangleButton>발행</RectangleButton>
				</ButtonGroup>
			</ToolBarSection>
		</>
	);
};
export default Paper;
