import {PREFIX_URL_API} from "./Constants";
import {startSubmit} from "../store/registration/actions";

export const getScienceDirection = async () => {
    return fetch(PREFIX_URL_API + "students/fields/science_directions")
        .then(response => response.json());
};

export const getUniversities = async () => {
    return fetch(PREFIX_URL_API + "students/fields/universities")
        .then(response => response.json());
};

export const getCourse = async () => {
    return fetch(PREFIX_URL_API + "students/fields/courses")
        .then(response => response.json());
};

export const submitFormRegistration = async (data) => {
    console.log('submitFormRegistration', data);
    return fetch(PREFIX_URL_API + 'students/registration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
        .then(response => response.json());
};

export const submitFile = async (file) => {
    let body = new FormData();
    body.append('file', file, file.name);
    return fetch(PREFIX_URL_API + 'students/files/upload', {
        method: 'POST',
        body: body
    })
        .then(response => response.json());
};