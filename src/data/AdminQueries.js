import {setUser} from "../store/login/actions";
import {ACTIVE_USER} from "./Constants";

// export const fetchWithToken = (url, option) => {
//
//     const loginUrl = '/login'; // url страницы для авторизации
//     let tokenData = null; // объявляем локальную переменную tokenData
//
//     if (localStorage.getItem(ACTIVE_USER)) { // если в sessionStorage присутствует tokenData, то берем её
//         tokenData = JSON.parse(localStorage.getItem(ACTIVE_USER));
//     } else {
//         return window.location.replace(loginUrl); // если токен отсутствует, то перенаправляем пользователя на страницу авторизации
//     }
//
//     if (!options.headers) { // если в запросе отсутствует headers, то задаем их
//         options.headers = {};
//     }
//
//     if (tokenData) {
//         if (Date.now() >= tokenData.expires_in * 1000) { // проверяем не истек ли срок жизни токена
//             try {
//                 const newToken = await refreshToken(tokenData.refresh_token); // если истек, то обновляем токен с помощью refresh_token
//                 saveToken(newToken);
//             } catch () { // если тут что-то пошло не так, то перенаправляем пользователя на страницу авторизации
//                 return  window.location.replace(loginUrl);
//             }
//         }
//
//         options.headers.Authorization = `Bearer ${tokenData.token}`; // добавляем токен в headers запроса
//     }
//
//     return fetch(url, options); // возвращаем изначальную функцию, но уже с валидным токеном в headers
// };

export const getTokens = async ({username, password}) => {
    console.log(username, password);
    let client_id = 'devglan-client';
    let client_secret = 'devglan-secret';
    const url = 'oauth/token';
    return fetch(url, {
        method: 'POST',
        headers: new Headers({
            // "Authorization": `Basic ${encode(`${username2}:${password2}`)}`,
            'Content-Type': 'application/x-www-form-urlencoded',
            'client_id': client_id,
            'client_secret': client_secret,
            'grant_type': 'password'
        }),
        body: 'grant_type=password&username=' + username + '&password=' + password,
        mode: 'no-cors'
    })
        .then(response => response.json())
        .then(user => {
            console.log(user);
            return user;
        });
};