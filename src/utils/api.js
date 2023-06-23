import axios from "axios";

const BASE_URL = "https://www.googleapis.com/customsearch/v1"

const params ={
    key: 'AIzaSyA0C5VOIGtOo6gzb7jttohTVe0HlX3Anms',
    cx: 'f1aec13ff67714b7e'
}
export const fetchDataFromApi = async (payload) => {
    const { data } = await axios.get(BASE_URL, {
        params: {...params, ...payload}
    })
    return data;
};
