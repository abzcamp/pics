import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers:{
        Authorization: 'Client-ID 53aac70789752fe92448f2def7ad6b32ff704f997453e598d01ddbd40a2e2c7c'
    } 
});