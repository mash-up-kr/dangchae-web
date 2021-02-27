import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { useState } from 'react';

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

const DiarysItem = styled.div`
  margin-top: 40px;
  width: 100%;
  display: flex;
`;

const DiaryCover = styled.div`
  width: 110px;
  height: 110px;
  margin-right: 26px;
  background-color: #e3a07a;
  clip-path: polygon(15% 0, 78% 0, 100% 48%, 56% 100%, 0 76%); ;
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
  &:hover {
    border: solid #333 1px;
    border-bottom-style: none;
    background-color: #333;
    color: #fff;
  }
`;

const DiaryItemWrapper = () => (
  <DiarysItem>
    <DiaryCover />
    <DiaryInfomation>
      <DiaryInfomationRow>
        <DiaryName>다이어리 이름</DiaryName>
        <div style={{ height: '100%' }}>
          <DiaryButton>입장</DiaryButton>
          <DiaryButton>글쓰기</DiaryButton>
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
          <div style={{ marginLeft: 4 }}>2020.12.31</div>
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
        <div>토요일 해커톤 준비중</div>
        <div>N시간 전</div>
      </DiaryInfomationRow>
    </DiaryInfomation>
  </DiarysItem>
);

const Diarys = () => {
  return (
    <>
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
        <DiaryItemWrapper />
        <DiaryItemWrapper />
        <DiaryItemWrapper />
      </DiarysContent>
    </>
  );
};

export default Diarys;
