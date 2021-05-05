/* eslint-disable react/display-name */
import React, { useState, useEffect } from 'react';

import { fetchDiaryList } from 'api/http';
import DiaryItem from 'components/DiaryItem';
import Header from 'components/Header';
import { Link } from 'react-router-dom';
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

const DiarysContent = styled.div`
	display: flex;
	width: 100%;
	height: 110px;
	flex-direction: column;
`;

const Diarys = () => {
	const [data, setData] = useState<any[]>([]);

	useEffect(() => {
		// fetchData란 비동기함수 생성
		const fetchData = async () => {
			const result = await fetchDiaryList();
			setData(result.data);
		};
		// 실행함으로써 데이타를 fetching
		fetchData();
	}, []);

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
					</UserDiariesInfomation>
				</UserInfomation>
			</DiarysHeader>
			<DiarysContent>
				{data.map(item => (
					<DiaryItem
						key={item.diaryId}
						diaryId={item.diaryId}
						title={item.title}
						createdDate={item.createdDate}
						paperTitle={'일기 제목'}
						paperCreatedDate={'022021-04-21'}
					/>
				))}
			</DiarysContent>
		</>
	);
};

export default Diarys;
