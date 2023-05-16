
import axios from 'axios'
export const API_URL ="http://localhost:3002";



const API_KEY = "token";

const apiGet = async (url, body) => {
    try {
        let { data } = await axios({
            method: "GET",
            url,
            headers: {
                "x-api-key": localStorage[API_KEY],
            },
            data: body
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

const apiPost = async (url, body) => {
    try {
        let { data } = await axios({
            method: "POST",
            url,
            data: body,
            headers: {
              "x-api-key": localStorage[API_KEY],
            }
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}
const apiPut = async (url, body) => {
    try {
        let { data } = await axios({
            method: "PUT",
            url,
            headers: {
              "x-api-key": localStorage[API_KEY],
            },
            data: body
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}
const apiPatch = async (url, body) => {
    try {
        let { data } = await axios({
            method: "PATCH",
            url,
            headers: {
              "x-api-key": localStorage[API_KEY],
            },
            data: body
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}
const apiDelete = async (url, body) => {
    try {
        let { data } = await axios({
            method: "DELETE",
            url,
            headers: {
              "x-api-key": localStorage[API_KEY],
            },
            data: body
        })
        return data;
    }
    catch (err) {
        throw err;
    }
}

export { apiGet, apiPost, apiPut, apiPatch, apiDelete }