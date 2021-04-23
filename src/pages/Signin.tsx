import React, { useState, useEffect } from 'react';

import { signinAPI } from 'api/http';
import AppleSigninImg from 'assets/images/AppleSigninImg.svg';
import KakaoSigninImg from 'assets/images/KakaoSigninImg.svg';
import NaverSigninImg from 'assets/images/NaverSigninImg.svg';
import useKakaoAuthorization from 'hooks/useKakaoAuthorization';
import { useHistory } from 'react-router-dom';
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

interface IOauth {
	code: string;
	token: string;
	vendor: string;
}

const Signin = () => {
	const history = useHistory();
	const [oauth, setOauth] = useState<IOauth>({
		code: '',
		token: '',
		vendor: '',
	});
	const { openKaKaoAuthorization, kakaoToken } = useKakaoAuthorization();

	useEffect(() => {
		if (kakaoToken) {
			setOauth({
				code: '',
				token: kakaoToken,
				vendor: 'KAKAO',
			});
		}
	}, [kakaoToken]);

	useEffect(() => {
		if (oauth.token && oauth.vendor) {
			(async () => {
				try {
					const { token } = await signinAPI(oauth);
					localStorage.setItem('token', token); //history.push('/') 얘는 왜 안먹는겨?
					history.push('/');
				} catch (err) {
					history.push('/sign-up', { ...oauth });
				}
			})();
		}
	}, [oauth]);

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
