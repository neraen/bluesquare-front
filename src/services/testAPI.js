import React from "react";
import axios from 'axios';

function testApi(){
    axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*'
    console.log(axios.post('http://localhost:8000/'));
}

export default {
    testApi
}