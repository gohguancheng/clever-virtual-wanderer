//unsplash api key
import urlcat from "urlcat";

export const imageCall = (country) => {
    const apiurl = urlcat('https://api.unsplash.com', '/search/photos', { page: 1, per_page: 20, query: country, client_id: import.meta.env.VITE_UNSPLASH_ID })
    console.log("apikey: ", import.meta.env.VITE_UNSPLASH_ID);
    return apiurl;
}