/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import TopButtonIcon from 'assets/icons/TopButtonIcon.svg';
import React from 'react';

const FooterWrapper = styled.div`
  width: 100%;
  height: 50px;
  border-top: solid 1px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
`;

const CopyrightText = styled.p`
  line-height: 50px;
  height: 100%;
  flex: 1;
  margin: 0;
  font-size: 12px;
`;
const TopButton = styled.div`
  width: 50px;
  height: 100%;
  border-left: solid 1px #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const TopButtonText = styled.p`
  margin: 0;
  font-size: 12px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <CopyrightText>© 2021 우다다. All rights reserved</CopyrightText>
      <TopButton>
        <img src={TopButtonIcon} />
        <TopButtonText>TOP</TopButtonText>
      </TopButton>
    </FooterWrapper>
  );
};

export default Footer;
