import React from 'react';

import AppleSigninImg from 'assets/images/AppleSigninImg.svg';
import KakaoSigninImg from 'assets/images/KakaoSigninImg.svg';
import NaverSigninImg from 'assets/images/NaverSigninImg.svg';
import useKakaoAuthorization from 'hooks/useKakaoAuthorization';
import styled from 'styled-components';

const SigninWrapper = styled.div`
	width: 335px;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const SigninContainer = styled.div`
	width: 100%;
	height: 150px;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const BannerTitle = styled.p`
	font-size: 64px;
	margin: 0;
	margin-bottom: 13px;
`;

const BannerText = styled.p`
	font-size: 15px;
	margin: 0;
	margin-bottom: 36px;
`;

const DescriptionText = styled.p`
	width: 200px;
	font-size: 15px;
	word-break: keep-all;
	text-align: center;
	margin: 0;
	margin-bottom: 100px;
`;

const Signin = () => {
	const { openKaKaoAuthorization } = useKakaoAuthorization();

	return (
		<SigninWrapper>
			<BannerTitle>우다다</BannerTitle>
			<BannerText>우리 다같이 다이어리</BannerText>
			<DescriptionText>소중한 사람들과 사랑스러운 추억을 만들어보세요.</DescriptionText>
			<SigninContainer>
				<img src={KakaoSigninImg} alt="kakao-login-img" onClick={openKaKaoAuthorization} />
				<img src={NaverSigninImg} alt="naver-login-img" onClick={() => {}} />
				<img src={AppleSigninImg} alt="apple-login-img" onClick={() => {}} />
			</SigninContainer>
		</SigninWrapper>
	);
};

export default Signin;
