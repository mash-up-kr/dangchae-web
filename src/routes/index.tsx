import React from 'react';

import Footer from 'components/Footer';
import useValidateToken from 'hooks/useValidateToken';
import { Route, Switch } from 'react-router-dom';
import AuthRoute from 'routes/AuthRoute';
import styled from 'styled-components';

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

const App = () => {
	// const { isValidated } = useValidateToken();

	return (
		<AppWrapper>
			<AppContent>
				<Switch>
					<Route exact path="/sign-in" component={Pages.Signin} />
					<Route exact path="/sign-up" component={Pages.Signup} />
					{/* <AuthRoute isValidated={isValidated}> */}
					<Route exact path="/" component={Pages.Diarys} />
					<Route exact path="/new-diary" component={Pages.NewDiary} />
					<Route exact path="/:diaryId" component={Pages.Diary} />
					<Route exact path="/:diaryId/paper" component={Pages.Papers} />
					<Route exact path="/:diaryId/paper/new-paper" component={Pages.NewPaper} />
					<Route exact path="/:diaryId/paper/:paperId" component={Pages.Paper} />
					{/* </AuthRoute> */}
				</Switch>
			</AppContent>
			<Footer />
		</AppWrapper>
	);
};

export default App;
