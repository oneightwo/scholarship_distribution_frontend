import {PREFIX_URL_API} from "./Constants";

export const getScienceDirection = async () => {
    return fetch(PREFIX_URL_API + "/students/fields/science_directions")
        .then(response => response.json());
};

export const getUniversities = async () => {
    return fetch(PREFIX_URL_API + "/students/fields/universities")
        .then(response => response.json());
};

export const getCourse = async () => {
    return fetch(PREFIX_URL_API + "students/fields/courses")
        .then(response => response.json());
};