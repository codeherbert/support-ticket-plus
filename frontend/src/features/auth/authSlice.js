import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

const initialState = {
    user: null,
    isError: false,
    isSuccess: false,
    isLoading: false,
    message: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        // add cases
    }
})

export default authSlice.reducer;