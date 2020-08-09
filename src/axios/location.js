import axios from 'axios';

axios.defaults.baseURL = 'https://service.lenu.cafe/api/json/orglocation'

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