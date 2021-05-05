import React, { FC } from 'react';

import { Link } from 'react-router-dom';
import styled from 'styled-components';

const DiarysItemWrapper = styled.div`
	margin-top: 40px;
	width: 100%;
	display: flex;
`;

const DiaryCover = styled.div`
	width: 110px;
	height: 110px;
	margin-right: 26px;
	background-color: #e3a07a;
	clip-path: polygon(15% 0, 78% 0, 100% 48%, 56% 100%, 0 76%);
`;

const DiaryInfomation = styled.div`
	display: flex;
	flex-direction: column;
	flex: 1;
	height: 100%;
	width: 100%;
`;

const DiaryInfomationRow = styled.div`
	display: flex;
	flex: 1;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	font-size: 12px;
`;

const DiaryName = styled.div`
	font-weight: 700;
	font-size: 18px;
`;

const DiaryButton = styled.button`
	border: solid #333 1px;
	border-bottom-style: none;
	background-color: transparent;
	height: 100%;
	font-weight: 700;
	font-size: 12px;
	padding: 12px 32px;
	&:nth-child(1) {
		border-right: none;
	}
	&:hover {
		border: solid #333 1px;
		border-bottom-style: none;
		background-color: #333;
		color: #fff;
	}
`;

interface DiaryProps {
	diaryId: number;
	title: string;
	createdDate: string;
	paperTitle: string;
	paperCreatedDate: string;
}

const DiaryItem: FC<DiaryProps> = ({ diaryId, title, createdDate, paperTitle, paperCreatedDate }: DiaryProps) => {
	return (
		<DiarysItemWrapper>
			<DiaryCover />
			<DiaryInfomation>
				<DiaryInfomationRow>
					<DiaryName>{title}</DiaryName>
					<div style={{ height: '100%' }}>
						<Link to={`/${diaryId}`}>
							<DiaryButton>입장</DiaryButton>
						</Link>
						<Link to={`/${diaryId}/paper/new-paper`}>
							<DiaryButton>글쓰기</DiaryButton>
						</Link>
					</div>
				</DiaryInfomationRow>
				<DiaryInfomationRow>
					<div
						style={{
							display: 'flex',
							border: '1px solid black',
							borderBottomStyle: 'none',
							height: '100%',
							padding: 12,
						}}
					>
						<div style={{ fontWeight: 700 }}>Since</div>
						<div style={{ marginLeft: 4 }}>{createdDate}</div>
					</div>
					<div
						style={{
							display: 'flex',
							border: '1px solid black',
							borderBottomStyle: 'none',
							borderLeftStyle: 'none',
							height: '100%',
							padding: 12,
							flex: 1,
						}}
					>
						<div style={{ fontWeight: 700 }}>With</div>
						<div style={{ marginLeft: 4 }}>sunyoung, jungmin + 4</div>
					</div>
				</DiaryInfomationRow>
				<DiaryInfomationRow style={{ border: 'solid 1px black', padding: 12 }}>
					<div>토요일 해커톤 준비중!!</div>
					<div>N시간 전</div>
				</DiaryInfomationRow>
			</DiaryInfomation>
		</DiarysItemWrapper>
	);
};

export default DiaryItem;
