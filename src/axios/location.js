import axios from 'axios';

axios.defaults.baseURL = 'https://service.lenu.cafe/api/json/'

export function getLocations(searchText) {
    return axios.get('/orglocation/list', {
        params: {
            ImageCode: 'M',
            SearchText: searchText
        }
    })
}