import { ACCESS_TOKEN } from '../constants/sessionStorageConstants';
import { jwtDecode } from 'jwt-decode';

function setAccessToken(accessToken) {
  sessionStorage.setItem(ACCESS_TOKEN, accessToken);
}

function getAccessToken() {
  return sessionStorage.getItem(ACCESS_TOKEN);
}

function getBearerToken() {
  return 'Bearer ' + sessionStorage.getItem(ACCESS_TOKEN);
}

function getUserId() {
  const decoded = jwtDecode(getAccessToken());
  return decoded.sub;
}

export { setAccessToken, getAccessToken, getUserId, getBearerToken };
