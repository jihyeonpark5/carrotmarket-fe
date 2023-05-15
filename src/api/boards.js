import axios from 'axios';
import { instance } from './axios';

export const getBoard = ( access_token ) => {
    return instance.get('/api/myboard',{
        headers:{
            'Access_Token': `${access_token}`
        }
    })
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
}