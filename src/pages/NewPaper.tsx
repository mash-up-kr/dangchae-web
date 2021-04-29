import React from 'react';

import Header from 'components/Header';
import styled from 'styled-components';

import AlignIcon from '../assets/icons/Align.svg';
import BackgroundIcon from '../assets/icons/Background.svg';
import CameraIcon from '../assets/icons/Camera.svg';
import PencilIcon from '../assets/icons/Pencil.svg';

const NewPaper = () => {
	return (
		<>
			<Header />
			<TitleSection>
				<Title>당근과채찍</Title>
				<Date>2020.02.21 (SUN)</Date>
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
					<RectangleBlackButton>
						<img src={PencilIcon} style={{ margin: 4 }} /> 발행
					</RectangleBlackButton>
				</ButtonGroup>
			</ToolBarSection>
			<TitleInput placeholder="제목을 입력해주세요" />
			<ContentTextArea placeholder="오늘 하루는 어땠나요?" />
		</>
	);
};

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
	cursor: pointer;
`;

const RectangleButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 110px;
	height: 40px;
	font-size: 14px;
	font-weight: bold;
	background-color: transparent;
	border-style: none;
	border-right: solid black 1px;
	cursor: pointer;
`;

const RectangleBlackButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 110px;
	height: 40px;
	background-color: #444;
	font-size: 14px;
	color: #fff;
	font-weight: bold;
	border-style: none;
	border-right: solid black 1px;
	cursor: pointer;
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

const Title = styled.p`
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
`;

const Date = styled.p`
	font-size: 14px;
`;

const TitleInput = styled.input`
	width: 100%;
	background-color: transparent;
	border-style: none;
	border-bottom: solid black 1px;
	margin-top: 16px;
	padding: 24px 0px;
	outline: none;
	font-weight: bold;
	font-size: 18px;
	line-height: 21px;
`;

const ContentTextArea = styled.textarea`
	width: 100%;
	height: 100%;
	margin: 4px 0px;
	padding: 16px 0px;
	outline: none;
	background-color: transparent;
	border-style: none;
	font-size: 14px;
	line-height: 18px;
	resize: none;
`;

export default NewPaper;
