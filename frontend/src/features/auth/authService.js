import axios from 'axios';

const API_URL = "/api/users"

// Register user
const register = async (userData) => {
    const response = await axios.post(API_URL, userData);

    if(response.data) {
        localStorage.setItem('user', JSON.Stringify(response.data));
    }

    return response.data;
}

// Logout User
const logout = () => localStorage.removeItem('user');

const authService = {
    register,
    logout,
}

export default authService;