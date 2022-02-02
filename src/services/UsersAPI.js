import axios from 'axios';

function register(user){
    return axios.post('http://localhost:8000/api/register', user)
}

export default {
    register,
}