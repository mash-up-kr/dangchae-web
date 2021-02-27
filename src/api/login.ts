import axios from 'axios';

const SERVER_URL = '';

export function postKakaoToken(a) {
  console.log(JSON.stringify(a));
}

export async function validateUser(accessToken, refreshToken) {
  const res = await axios.post(`${SERVER_URL}/login`, {
    accessToken,
    refreshToken,
  });

  console.log(JSON.stringify(res));
}
