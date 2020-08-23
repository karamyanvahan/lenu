import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://menyou-service.ogmastage.com/api/json/orglocation'
});

export function getLocations(searchText) {
    return axios.get('/list', {
        params: {
            ImageCode: 'M',
            SearchText: searchText
        }
    })
}

export function getLocationDetails(id) {
    return axios.get('/detail', {
        params: {
            ImageCode: 'M',
            id: id
        }
    })
}