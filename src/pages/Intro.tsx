import { validateUser } from 'api/login';
import Signin from 'pages/Signin';
import Signup from 'pages/Signup';
import React, { useEffect, useState } from 'react';

interface tokenInterface {
  accessToken: string;
  refreshToken: string;
}

const Intro = () => {
  const [token, setToken] = useState<tokenInterface>({
    accessToken: '',
    refreshToken: '',
  });
  const [validation, setValidation] = useState<boolean>(false);

  useEffect(() => {
    if (token.accessToken && token.refreshToken) {
      validateUser(token.accessToken, token.refreshToken);
    }
  }, [token]);

  if (!token.accessToken && !token.refreshToken) return <Signin />;
  if (token && !validation) return <Signup />;
  return <div>udada</div>;
};

export default Intro;
