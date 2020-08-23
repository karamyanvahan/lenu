import Axios from 'axios';

const axios = Axios.create({
    baseURL: 'https://menyou-service.ogmastage.com/api/json/menu'
});

export function getMenuDetails(id) {
    return axios.get('/detail', {
        params: {
            ImageCode: 'M',
            MenuID: id
        }
    })
}