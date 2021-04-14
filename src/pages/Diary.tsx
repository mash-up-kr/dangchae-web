import React from 'react';

import CalendarIcon from 'assets/icons/CalendarIcon.svg';
import UserProfileImg from 'assets/images/UserProfileImg.svg';
import Header from 'components/Header';
import styled from 'styled-components';

const DiarysHeader = styled.div`
	display: flex;
	width: 100%;
	border-top: solid black 1px;
	border-bottom: solid black 1px;
`;

const UserImage = styled.div`
	border-radius: 50%;
	width: 64px;
	height: 64px;
	margin: 8px;
	background-color: #edebda;
`;

const UserInfomation = styled.div`
	display: flex;
	flex-direction: column;
	border-left: solid black 1px;
	width: 100%;
`;

const UserName = styled.div`
	font-weight: 700;
	size: 18px;
	padding: 8px;
	width: 100%;
	align-items: center;
	border-bottom: solid black 1px;
`;

const UserDiariesInfomation = styled.div`
	display: flex;
	height: 100%;
`;

const UserDiariesInfoBox = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	border-right: solid black 1px;
	height: 100%;
	padding: 8px 12px;
	font-size: 14px;
`;

const MonthWrapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const CalendarImg = styled.img`
	margin-top: 42px;
`;

const MonthText = styled.p`
	margin: 14px;
	font-size: 28px;
	font-weight: bold;
`;

const DateWapper = styled.div`
	width: 100%;
	display: flex;
	flex-direction: row;
	& + & {
		border-top: solid 1px #000000;
	}
`;

const DateTitleWrapper = styled.div`
	width: 90px;
	display: flex;
	height: 100%;
	flex-direction: column;
	align-items: center;
`;

const DateTitle = styled.p`
	margin: 0;
	margin-top: 20px;
	font-size: 45px;
	font-weight: bold;
`;

const DateTitleDescription = styled.p`
	margin: 0;
	font-size: 12px;
`;

const WirterWrapper = styled.div`
	width: 90px;
	height: 100%;
	display: flex;
	flex-direction: row;
	justify-content: center;
	align-items: center;
`;

const WriterTextWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-end;
	margin-right: 8px;
`;

const WriterImg = styled.img`
	border-radius: 50%;
`;

const WriterText = styled.p`
	font-size: 12px;
	color: #444444;
	margin: 0;
`;
const PaperWrapper = styled.div`
	display: flex;
	flex: 1;
	& + & {
		border-top: solid 1px #000000;
	}
`;

const ContentWrapper = styled.div`
	height: 120px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	flex: 1;
`;

const ContentTitleWrapper = styled.div`
	display: flex;
	flex-direction: row;
	align-items: center;
	margin-bottom: 8px;
`;
const ContentTitleIcon = styled.div`
	background-color: #d0ccff;
	border-radius: 50%;
	border: solid 1px #000000;
	width: 12px;
	height: 12px;
	margin-right: 10px;
`;

const ContentTitleText = styled.p`
	margin: 0;
	font-size: 18px;
	font-weight: bold;
	line-height: 16px;
`;

const ContentDescription = styled.p`
	margin: 0;
	font-size: 14px;
`;

const PapersWrapper = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
`;

const PapersOfDateWrapper = styled.div`
	width: 100%;
	flex: 1;
	display: flex;
	overflow: scroll;
	flex-direction: column;
`;

const Paper = () => {
	return (
		<PaperWrapper>
			<ContentWrapper>
				<ContentTitleWrapper>
					<ContentTitleIcon />
					<ContentTitleText>토요일 해커톤 준비 중!!!</ContentTitleText>
				</ContentTitleWrapper>
				<ContentDescription>내일 바로 매쉬업 해커톤 하는 날.</ContentDescription>
				<ContentDescription>
					{' '}
					그래서 우리 디자인팀은 내일을 위해 미리 디자인을 하고 있지. Baaam.
				</ContentDescription>
			</ContentWrapper>
			<WirterWrapper>
				<WriterTextWrapper>
					<WriterText>배띠용</WriterText>
					<WriterText>N시간전</WriterText>
				</WriterTextWrapper>
				<WriterImg src={UserProfileImg} alt="user-profile-img" />
			</WirterWrapper>
		</PaperWrapper>
	);
};

const PapersOfDate = () => {
	return (
		<PapersOfDateWrapper>
			<DateWapper>
				<DateTitleWrapper>
					<DateTitle>20</DateTitle>
					<DateTitleDescription>2021.02</DateTitleDescription>
				</DateTitleWrapper>
				<PapersWrapper>
					<Paper />
				</PapersWrapper>
			</DateWapper>
			<DateWapper>
				<DateTitleWrapper>
					<DateTitle>20</DateTitle>
					<DateTitleDescription>2021.02</DateTitleDescription>
				</DateTitleWrapper>
				<PapersWrapper>
					<Paper />
					<Paper />
					<Paper />
				</PapersWrapper>
			</DateWapper>
		</PapersOfDateWrapper>
	);
};

const Diary = () => {
	return (
		<>
			<Header />
			<DiarysHeader>
				<UserImage></UserImage>
				<UserInfomation>
					<UserName>Diary name</UserName>
					<UserDiariesInfomation>
						<UserDiariesInfoBox>With 3 members</UserDiariesInfoBox>
						<UserDiariesInfoBox>Since 2021.03.21</UserDiariesInfoBox>
					</UserDiariesInfomation>
				</UserInfomation>
			</DiarysHeader>
			<MonthWrapper>
				<CalendarImg src={CalendarIcon} alt="calendar-icon" />
				<MonthText>&#60; 2021.02 &#62;</MonthText>
			</MonthWrapper>
			<PapersOfDate />
		</>
	);
};

export default Diary;
