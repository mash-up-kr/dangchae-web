import React, { useRef, useState } from 'react';

import { signupAPI } from 'api/http';
import UploadImgIcon from 'assets/images/UploadImgIcon.svg';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const SignupWrapper = styled.div`
	width: 335px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const BannerContainer = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	justify-content: center;
	margin-bottom: 80px;
`;

const BannerText = styled.p`
	margin: 0;
	margin-bottom: 5px;
	font-size: 24px;
`;

const BannerTextBold = styled.p`
	margin: 0;
	margin-bottom: 5px;
	font-size: 24px;
	font-weight: bold;
`;

const ProfileUploadButton = styled.img`
	margin-bottom: 42px;
`;

const NicknameInput = styled.input`
	background: none;
	border: none;
	border-bottom: solid 2px #000000;
	color: #444444;
	font-size: 16px;
	line-height: 30px;
	width: 100%;
`;

interface SignupProps {
	oauth: any;
}

const Signup = ({ oauth }: SignupProps) => {
	const [nickname, setNickname] = useState('');
	const fileRef = useRef<any>();
	const history = useHistory();

	const onSubmit = async () => {
		await signupAPI(fileRef.current.files[0], nickname, oauth);
		history.push('/');
	};

	return (
		<SignupWrapper>
			<BannerContainer>
				<BannerText>🎉</BannerText>
				<BannerText>반가워요,</BannerText>
				<BannerTextBold>프로필을 꾸며주세요.</BannerTextBold>
			</BannerContainer>
			<label htmlFor="profile">
				<ProfileUploadButton src={UploadImgIcon} alt="upload-img-icon" />
			</label>
			<input type="file" id="profile" ref={fileRef} style={{ display: 'none' }} />
			<NicknameInput
				value={nickname}
				onChange={(e: any) => {
					setNickname(e.target.value);
				}}
				placeholder="닉네임을 입력해주세요"
			/>
			<button onClick={onSubmit}>전송</button>
		</SignupWrapper>
	);
};

export default Signup;
