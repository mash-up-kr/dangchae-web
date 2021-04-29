/** @jsxRuntime classic */
/** @jsx jsx */
import React, { useState } from 'react';

import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import * as dateFns from 'date-fns';
import { Link } from 'react-router-dom';

const Label = styled.div`
	/* left: 0%;
right: 0.12%;
top: 38.35%;
bottom: 30.83%; */

	background: #f8f6ed;
	box-shadow: inset 0px -1px 0px #000000;
	text-align: right;
`;

const Title1 = styled.div`
	font-family: Spoqa Han Sans Neo;
	font-style: normal;
	font-weight: bold;
	font-size: 18px;
	line-height: 22px;
	/* identical to box height */

	letter-spacing: -0.02em;

	/* Gray1 */

	color: #232323;
`;
const Title2 = styled.div`
	text-align: right;
	font-family: SF Pro Display;
	font-style: normal;
	font-weight: normal;
	font-size: 14px;
	line-height: 17px;
	/* identical to box height */

	color: #000000;
`;
const Title = styled.div`
	line-height: 50px;
	background: #f8f6ed;
	box-shadow: inset 0px -1px 0px #000000;
	display: flex;
	align-items: center;
	justify-content: space-between;
	height: 50px;
`;
const Imageline = styled.div`
	line-height: 50px;
	background: #f8f7ed;
	box-shadow: inset 0px -1px 0px #000000;
`;
const Posting = styled.div`
	float: right;
`;
const Titlenaming = styled.div`
	font-family: SF Pro Display;
	font-style: normal;
	font-weight: bold;
	font-size: 50px;
	line-height: 90px;

	box-shadow: inset 0px -1px 0px #000000;
`;
const Paper = () => {
	const [form, setForm] = useState({
		title: '',
		date: '',
		content: '',
	});
	const onTemporal = e => {
		setForm({
			...form,
		});
	};
	const onSubmit = e => {
		setForm({
			...form,
		});
	};
	const onList = e => {
		setForm({
			...form,
		});
	};
	const onLogout = e => {
		setForm({
			...form,
		});
	};
	const onChangeTitle = e => {
		setForm({
			...form,
			title: e.target.value,
		});
	};
	const onChangeDate = e => {
		setForm({
			...form,
			date: e.target.value,
		});
	};
	const onChangeContent = e => {
		setForm({
			...form,
			content: e.target.value,
		});
	};
	const onPicture = e => {
		setForm({
			...form,
		});
	};
	const onAddpaper = e => {
		setForm({
			...form,
		});
	};

	const initForm = () => {
		setForm({
			title: '',
			date: '',
			content: '',
		});
	};
	return (
		<div style={{ width: '100%' }}>
			<Label>
				{/* <Link to="/diarys"  style={{height: '40px',background: 'transparent',border: 'none'}}>다이어리 목록으로  </Link> */}
				<input
					type="button"
					name="logout"
					value="다이어리 목록으로"
					onClick={onLogout}
					style={{ height: '40px', background: 'transparent', border: 'none' }}
				></input>

				<input
					type="button"
					name="logout"
					value="로그아웃"
					onClick={onLogout}
					style={{ height: '40px', background: 'transparent', border: 'none' }}
				></input>
			</Label>
			<Title>
				<Title1>
					<label text-align="left">당근과 채찍</label>{' '}
				</Title1>
				<Title2>{dateFns.format(new Date(), 'yyyy.MM.dd(E)')} </Title2>
			</Title>

			<Imageline>
				<button
					name="pic"
					onClick={onPicture}
					style={{
						height: '50px',
						background: 'transparent',
						border: '0px',
						borderRight: 'solid 1px #000000',
					}}
				></button>
				<button
					name="vec58"
					onClick={onAddpaper}
					style={{
						height: '50px',
						background: 'transparent',
						border: '0px',
						borderRight: 'solid 1px #000000',
					}}
				></button>
				<button
					name="vec57"
					style={{
						height: '50px',
						background: 'transparent',
						border: '0px',
						borderRight: 'solid 1px #000000',
					}}
				></button>
				<Posting>
					<input
						type="button"
						name="store"
						value="임시저장"
						onClick={onTemporal}
						style={{
							height: '50px',
							width: '100px',
							background: 'transparent',
							border: '0px',
							borderLeft: 'solid 1px #000000',
						}}
					></input>
					<button
						name="post"
						value="발행"
						onClick={onSubmit}
						style={{ height: '50px', width: '100px', background: '#444444', font: '#FFFFFF' }}
					>
						발행{' '}
					</button>{' '}
				</Posting>
			</Imageline>
			<Titlenaming>
				<input
					type="text"
					placeholder="제목을 입력해주세요"
					name="title"
					value={form.title}
					onChange={onChangeTitle}
					style={{ background: 'transparent', border: 'none', fontSize: '18px' }}
				></input>
			</Titlenaming>
			<textarea
				name="content"
				placeholder=" 오늘 하루는 어땠나요?"
				value={form.content}
				onChange={onChangeContent}
				style={{ background: 'transparent', border: 'none', marginTop: '50px', fontSize: '14px' }}
			></textarea>
			{/* <input
        type="text"
        name="date"
        value={form.date}
        onChange={onChangeDate}
      ></input> */}
		</div>
	);
};
export default Paper;
