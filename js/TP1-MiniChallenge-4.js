const axios = require('axios');

// URL API yang mau di consume..
const apiURL = 'https://www.swapi.tech/api/people';

async function fetchAPI() {
    try {
        const response = await axios.get(apiURL);
        const results = response.data.results;
        console.log(results);
    } catch (error) {
        console.error(`Pesan error : ${error}`);
    }
}
fetchAPI();