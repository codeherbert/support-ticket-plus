import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import authService from './authService';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

//Register new user
export const register = createAsyncThunk(
    'auth/register', 
    async (user, thunkAPI) => {  
        try {
            return await authService.register(user);
        } catch (error) {
            const message = (message.response && message.response.data && message.response.data.message) || error.message || error.toString();
        }
    }
);

// Login user
export const login = createAsyncThunk(
    'auth/login', 
    async (user, thunkAPI) => {  
        console.log(user);
    }
);

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        },
    },
    extraReducers: (builder) => {
        builder
            .addCase(register.pending, (state) => {
                state.isLoading = true
            })
            .addCase(register.isFulfilled, (state, action) => {
                state.isLoading = false
                state.isSucess = true
                state.user = action.payload
            })
            .addCase(register.rejected, (state, action) => {
                state.isLoading = false
                state.isError = true
                state.message = action.payload
                state.user =null

            })
    }
})

export const {reset} = authSlice.actions;
export default authSlice.reducer;
