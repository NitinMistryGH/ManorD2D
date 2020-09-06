const BASE_URL = "http://localhost:5000";

const GET_STREETS_API = {
    url: `${BASE_URL}/streets/all`,
    method: 'GET'
}

const POPULATE_API = {
    url: `${BASE_URL}/streets/populate`,
    method: 'GET'
}

export {GET_STREETS_API, POPULATE_API};