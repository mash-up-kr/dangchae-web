/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import { postKakaoToken } from 'api/login';
import React from 'react';
import AppleLogin from 'react-apple-login';
import KaKaoLogin from 'react-kakao-login';
import NaverLogin from 'react-naver-login';

const KAKAO_CLIENT_ID = '83b37b8eb0d58322133b9806cc704642';
const NAVER_CLIENT_ID = '';
const APPLE_CLIENT_ID = '';
const REDIRECT_URL = 'https://localhost:3000/intro';

const Signin = () => {
  return (
    <div>
      <KaKaoLogin
        token={KAKAO_CLIENT_ID}
        onSuccess={postKakaoToken}
        onFail={console.error}
        onLogout={console.info}
        useLoginForm
      />
      <NaverLogin
        clientId={NAVER_CLIENT_ID}
        callbackUrl={REDIRECT_URL}
        render={props => <div onClick={props.onClick}>Naver Login</div>}
        onSuccess={console.log}
        onFailure={console.error}
      />
      <AppleLogin
        clientId={APPLE_CLIENT_ID}
        redirectURI={REDIRECT_URL}
        callback={console.log}
      />
    </div>
  );
};

export default Signin;
