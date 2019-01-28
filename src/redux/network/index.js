import Api from '../api';

export const login = (params) => {
    return Api.post('https://pure-depths-19690.herokuapp.com/api/v1/login', params).then(res=>res.data);
}