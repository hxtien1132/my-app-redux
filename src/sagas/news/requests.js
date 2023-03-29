import axios from "axios";

export default function requestGetNews(query) {
    console.log(query);
    return axios.request({
        method: "GET",
        url: "https://hn.algolia.com/api/v1/search", //?query='query'
        params: {
        query:query
        }

    });
}