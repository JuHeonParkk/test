// KAKAO LOGIN
// KAKAO REST API KEY랑 REDIRECT URI를 넣어줘야 함

const CLIENT_ID = process.env.REACT_APP_K_REST_API;  //REST API KEY
const REDIRECT_URI = process.env.REACT_APP_K_REDIRECT_URI;  //REDIRECT URI

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=code`;