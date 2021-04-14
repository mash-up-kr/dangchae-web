import React from 'react';

// import UploadImgIcon from 'assets/images/UploadImgIcon.svg';
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

const NewDiaryButton = styled.div`
	margin: 0 0 0 auto;
	justify-self: flex-end;
	display: flex;
	align-items: center;
	justify-content: center;
	color: #ffffff;
	background: #000000;
	height: 100%;
	padding: 8px 12px;
	font-size: 14px;
`;

const PaperWrapper = styled.div`
	border-top: solid 1px #000000;
	background-color: #d0ccff;
`;

// const DateWrapper = styled.div`
// 	width: 90px;
// 	display: flex;
// 	flex: 1;
// 	align-items: center;
// `;

const NewPaper = () => {
	return (
		<>
			<Header />
			<DiarysHeader>
				<UserImage></UserImage>
				<UserInfomation>
					<UserName>User name</UserName>
					<UserDiariesInfomation>
						<UserDiariesInfoBox>4 Diaries</UserDiariesInfoBox>
						<UserDiariesInfoBox>From 2021.03.21</UserDiariesInfoBox>
						<NewDiaryButton>다이어리 생성</NewDiaryButton>
					</UserDiariesInfomation>
				</UserInfomation>
			</DiarysHeader>
			<PaperWrapper></PaperWrapper>
		</>
	);
};

export default NewPaper;
