import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkAPI) => {  
        console.log(user);
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // add cases
    }
})

export default authSlice.reducer;