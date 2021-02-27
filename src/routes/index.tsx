import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import * as Pages from '../pages';

//TODO: 인증 라우터 구성
const App = () => {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
};

export default App;
