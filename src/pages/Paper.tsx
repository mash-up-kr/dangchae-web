import React from 'react';

import { getPaperAPI } from 'api/http';
import Header from 'components/Header';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import CloseIcon from '../assets/icons/Close.svg';
import PencilIcon from '../assets/icons/Pencil.svg';

const Paper = () => {
	const { diaryId, paperId } = useParams<{ diaryId: string; paperId: string }>();
	const { data } = useQuery(`paper/${paperId}`, () => getPaperAPI(paperId, diaryId).then(res => res.data));

	return (
		<>
			<Header />
			<DiarysHeader>
				<UserImage></UserImage>
				<UserInfomation>
					<DiaryName>당근과 채찍</DiaryName>
					<UserDiariesInfomation>
						<UserDiariesInfoBox>With 3 members</UserDiariesInfoBox>
						<UserDiariesInfoBox>Since 2021.03.21</UserDiariesInfoBox>
						<WriteDiaryButton>
							<img src={PencilIcon} style={{ margin: '0px 4px' }} />
							글쓰기
						</WriteDiaryButton>
					</UserDiariesInfomation>
				</UserInfomation>
			</DiarysHeader>
			<CloseButton>
				<img src={CloseIcon} />
			</CloseButton>
			{data && (
				<>
					<DiaryContainer>
						<DayContainer>
							<Day>21</Day>
							<YearAndMonth>2021.02</YearAndMonth>
						</DayContainer>
						<div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
							<ContentContainer>
								<ArticleTitle>{data.title}</ArticleTitle>
								<Author>
									<AuthorImage src="http://www.foodnmed.com/news/photo/201903/18296_3834_4319.jpg" />
									{`${data.writerId} | 5시간 전`}
								</Author>
								<ArticleContent>{data.body}</ArticleContent>
							</ContentContainer>
						</div>
					</DiaryContainer>
					<CommentContainer>
						<CommentCount>
							<strong>3</strong> Comments
						</CommentCount>
						<div style={{ padding: '4px 16px', width: '100%' }}>
							<CommentItem>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
									<Author>
										<AuthorImage src="http://www.foodnmed.com/news/photo/201903/18296_3834_4319.jpg" />
										배띠용 | 5시간 전
									</Author>
								</div>
								<div style={{ paddingLeft: '42px' }}>
									오져따리 오져따 오져따리 오져따오져따리 오져따오져따리 오져따오져따리 오져따오져따리
									오져따오져따리 오져따오져따리 오져따오져따리 오져따
								</div>
							</CommentItem>
							<div
								style={{
									padding: '16px 0px',
									display: 'flex',
									borderStyle: 'none',
									borderTop: 'solid black 1px',
									borderBottom: 'solid black 1px',
									height: '100%',
								}}
							>
								<CommentTextArea></CommentTextArea>
								<button
									style={{
										width: '100px',
										height: '100px',
										padding: '16px',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
										backgroundColor: '#444',
										color: 'white',
										fontSize: 16,
										fontWeight: 16,
										borderStyle: 'none',
									}}
								>
									등록
								</button>
							</div>
						</div>
					</CommentContainer>
				</>
			)}
		</>
	);
};

const CommentTextArea = styled.textarea`
	width: 100%;
	height: 100%fit-content;
	resize: none;
	border-style: none;
	background-color: transparent;
`;

const CommentItem = styled.div`
	margin: 24px 0px;
`;

const CommentCount = styled.div`
	border-style: none;
	border-top: solid 1px black;
	border-bottom: solid 1px black;
	width: 100%;
	font-size: 14px;
	line-height: 25px;
	padding: 12px 8px;
`;

const ArticleTitle = styled.div`
	color: #232323;
	font-size: 18px;
	line-height: 35px;
	font-weight: bold;
`;

const Author = styled.div`
	display: flex;
	align-items: center;
	color: #444;
	font-size: 14px;
	line-height: 20px;
`;

const AuthorImage = styled.img`
	border-radius: 50%;
	width: 42px;
	height: 42px;
	padding: 4px;
	box-sizing: border-box;
`;

const ArticleContent = styled.div`
	padding: 15px;
`;
const CommentContainer = styled.div`
	width: 100%;
`;

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

const DiaryName = styled.div`
	font-weight: 700;
	size: 18px;
	padding: 8px;
	width: 100%;
	align-items: center;
	border-bottom: solid black 1px;
	border-right: solid black 1px;
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

const WriteDiaryButton = styled.button`
	margin: 0 0 0 auto;
	justify-self: flex-end;
	display: flex;
	align-items: center;
	justify-content: space-around;
	color: #ffffff;
	background: #444;
	height: 100%;
	padding: 8px 12px;
	font-size: 14px;
	border-style: none;
`;

const CloseButton = styled.button`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: flex-end;
	background-color: transparent;
	border-style: none;
	cursor: pointer;
	padding: 16px 4px;
	border-bottom: solid 1px black;
`;

const DiaryContainer = styled.div`
	display: flex;
	width: 100%;
`;

const DayContainer = styled.div`
	padding-top: 27px;
	padding-right: 22px;
	padding-left: 22px;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Day = styled.p`
	font-size: 45px;
	line-height: 35px;
	font-weight: 600;
`;
const YearAndMonth = styled.p`
	font-weight: 500;
	font-size: 12px;
	line-height: 15px;
	color: #444;
`;

const ContentContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	margin: 22px 0px;
`;

export default Paper;
