/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from '@emotion/react';
import styled from '@emotion/styled';
import Footer from 'components/Footer';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as Pages from '../pages';

const AppWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AppContent = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

//TODO: 인증 라우터 구성
const App = () => {
  return (
    <BrowserRouter>
      <AppWrapper>
        <AppContent>
          <Switch>
            <Route exact path="/intro" component={Pages.Intro} />
            <Route exact path="/signup" component={Pages.Signup} />
            <Route exact path="/signin" component={Pages.Signin} />
            <Route exact path="/new-diary" component={Pages.NewDiary} />
            <Route exact path="/diarys" component={Pages.Diarys} />
            <Route exact path="/diarys/:diaryId" component={Pages.Diary} />
            <Route
              exact
              path="/diarys/:diaryId/new-paper"
              component={Pages.NewPaper}
            />
          </Switch>
        </AppContent>
        <Footer />
      </AppWrapper>
    </BrowserRouter>
  );
};

export default App;
