import axios from 'axios';

axios.defaults.baseURL = 'https://service.lenu.cafe/api/json/'

export function getLocations(searchText) {
    return axios.get('/orglocation/list?ImageCode=M&SearchText=&_=1596734785146', {
        SearchText: searchText
    })
}