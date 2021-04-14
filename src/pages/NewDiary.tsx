import React from 'react';

import UploadImgIcon from 'assets/images/UploadImgIcon.svg';
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

const ContentWrapper = styled.div`
	display: flex;
	width: 100%;
	flex: 1;
	justify-content: center;
	align-items: center;
`;

const NewDiaryWrapper = styled.div`
	width: 335px;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const NewDiaryTitle = styled.p`
	font-weight: bold;
	font-size: 24px;
	text-align: center;
`;

const NewDiaryInput = styled.input`
	width: 100%;
	margin-top: 12px;
	height: 48px;
	border: none;
	background: none;
	color: #232323;
	font-size: 16px;
	border-bottom: solid 2px #000000;
`;

const NewDiaryInputDescription = styled.p`
	color: red;
	font-size: 12px;
	width: 100%;
`;

const SubmitButton = styled.button`
	width: 100%;
	height: 40px;
	background: none;
	border: solid 1px #000000;
	border-radius: 65px;
	color: #333333;
	font-size: 16px;
	display: flex;
	align-items: center;
	justify-content: center;
	margin-top: 50px;
`;

const CancelButton = styled.button`
	background: none;
	border: none;
	color: #333333;
	font-size: 16px;
	margin-top: 20px;
`;
const NewDiary = () => {
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
			<ContentWrapper>
				<NewDiaryWrapper>
					<NewDiaryTitle>새 다이어리 만들기</NewDiaryTitle>
					<img src={UploadImgIcon} alt="upload-img-icon" />
					<NewDiaryInput placeholder="다이어리 이름을 입력해주세요." />
					<NewDiaryInputDescription>
						다이어리 이름과 사진은 개설 후에도 변경 가능합니다.
					</NewDiaryInputDescription>
					<SubmitButton>생성</SubmitButton>
					<CancelButton>뒤로가기</CancelButton>
				</NewDiaryWrapper>
			</ContentWrapper>
		</>
	);
};

export default NewDiary;
