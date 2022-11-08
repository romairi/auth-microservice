import axios from 'axios';
import { LOGIN_URL } from '../../constants/api';

export const login = async (email, password) => {
    const response = await axios.post(LOGIN_URL, {
        data: {
            email,
            password,
        },
        headers: {
            'Content-Type': 'application/json',
        }
    })
    
    return response;
}