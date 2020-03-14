import {ACTIVE_USER, OAUTH2_URL, PREFIX_URL_ADMIN} from "./Constants";
import {student} from "../entity/Student";

export const tokens = async ({username, password}) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ=");

    let urlencoded = new URLSearchParams();
    urlencoded.append("username", username);
    urlencoded.append("password", password);
    urlencoded.append("grant_type", "password");

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded,
        redirect: 'follow'
    };

    return fetch(OAUTH2_URL, requestOptions)
        .then(response => response.json())
        .then(user => {
            console.log(user);
            return user;
        });
};

const updateToken = async (activeUser) => {
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/x-www-form-urlencoded");
    myHeaders.append("Authorization", "Basic ZGV2Z2xhbi1jbGllbnQ6ZGV2Z2xhbi1zZWNyZXQ=");
    let urlencoded = new URLSearchParams();
    urlencoded.append("grant_type", "refresh_token");
    urlencoded.append("refresh_token", activeUser.refresh_token);
    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: urlencoded
    };
    return fetch(OAUTH2_URL, requestOptions)
        .then(response => response.json())
        .then(data => {
            // console.log('in update token', data);
            return data;
        })
        .catch(error => console.log('error', error));
};

export const token = async () => {
    let activeUser = JSON.parse(localStorage.getItem(ACTIVE_USER));
    console.log('token activeUser', activeUser);
    console.log('token activeUser.endDate > Date.now()', activeUser.endDate, Date.now(),activeUser.endDate > Date.now());
    if (activeUser.endDate < Date.now()) {
        return updateToken(activeUser)
            .then(user => {
                user = {
                    ...user,
                    endDate: Date.now() + user.expires_in * 1000
                };
                // console.log('updateToken 1 (for)', user);
                localStorage.setItem(ACTIVE_USER, JSON.stringify(user));
                return user.access_token;
            });
    } else {
        // console.log('else access_token', activeUser.access_token);
        return activeUser.access_token;
    }
};

export const changeSettings = (token, data) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify({"id": 1, "activeRegistration": data});

    let requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw
    };

    return fetch(PREFIX_URL_ADMIN + 'settings', requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            return result
        })
        .catch(error => console.log('error', error));
};

export const changeStudent = (token, data) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    let raw = JSON.stringify(data);

    let requestOptions = {
        method: 'PUT',
        headers: myHeaders,
        body: raw
    };

    return fetch(PREFIX_URL_ADMIN + 'students/' + data.id, requestOptions)
        .then(response => response.json())
        .then(result => {
            console.log(result);
            return result
        })
        .catch(error => console.log('error', error));
};

export const getCurrentParticipants = (token) => {
    let myHeaders = new Headers();
    myHeaders.append("Authorization", "bearer " + token);
    myHeaders.append("Content-Type", "application/json");

    let requestOptions = {
        method: 'GET',
        headers: myHeaders
    };

    return fetch(PREFIX_URL_ADMIN + '/students/current', requestOptions)
        .then(response => response.json())
        .then(result => {
            // console.log(result);
            return result
        })
        .catch(error => console.log('error', error));
};
