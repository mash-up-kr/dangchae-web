import asyncLocalStorage from 'util/asyncLocalStorage';

import axios from 'axios';

const SERVER_URL = 'http://ysjleader.com:8080';

export async function validateTokenAPI(token) {
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	const resp = await axios.post(`${SERVER_URL}/users/sign-in`, {});
	return resp;
}

export async function signinAPI(oauth) {
	const resp = await axios.post(`${SERVER_URL}/users/sign-in`, oauth);
	const token = resp.data.token;
	await asyncLocalStorage.setItem('token', token);
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
	return resp;
}

export async function signupAPI(file, nickname, oauth) {
	const formData = new FormData();
	formData.append('profile', file);
	formData.append('nickname', nickname);
	formData.append('vendor', oauth.vendor);
	formData.append('code', oauth.code);
	formData.append('token', oauth.token);
	const resp = await axios.post(`${SERVER_URL}/users/sign-up`, formData);
	const token = resp.data.token;
	await asyncLocalStorage.setItem('token', token);
	axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
}
export async function fetchDiaryList() {
	const res = await axios.post(`${SERVER_URL}/diaries`);
	return res.data;
}

export async function getPaperAPI(articleId: string, diaryId: string) {
	return await axios.get<getPaperResponse>(`${SERVER_URL}/articles/${articleId}?diaryId=${diaryId}`);
}

export async function postPaperAPI(articleId: string, diaryId: string) {
	return await axios.get<getPaperResponse>(`${SERVER_URL}/articles/${articleId}?diaryId=${diaryId}`);
}

export async function putPaperAPI(articleId: string, diaryId: string) {
	return await axios.get<getPaperResponse>(`${SERVER_URL}/articles/${articleId}?diaryId=${diaryId}`);
}

export type getPaperResponse = {
	articleId: number;
	body: string;
	date: Date;
	diaryId: number;
	img: string;
	thumbImg: string;
	title: string;
	writerId: number;
};
