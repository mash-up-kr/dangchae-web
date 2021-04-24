import React from 'react';

import { logout } from 'modules/auth';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

const HeaderWrapper = styled.div`
	width: 100%;
	height: 50px;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: row;
`;

const HeaderLogo = styled.p`
	font-size: 12px;
	flex: 1;
	margin: 0;
`;

const HeaderLogout = styled.p`
	font-size: 12px;
	margin: 0;
`;

const Footer = () => {
	const dispatch = useDispatch();
	const history = useHistory();

	const onLogout = () => {
		dispatch(logout());
		history.replace('/');
	};
	return (
		<HeaderWrapper>
			<HeaderLogo>우다다 LOGO</HeaderLogo>
			<HeaderLogout onClick={onLogout}>로그아웃</HeaderLogout>
		</HeaderWrapper>
	);
};

export default Footer;
