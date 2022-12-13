import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const GetListPosts = createAsyncThunk('listposts/GetListPosts', async () => {
    const res = await axios.get('https://dummyjson.com/posts')
    return res.data
});

export const postsSlice = createSlice({
    name: "listposts",
    initialState: {
        data: [],
        error: null,
        loading: 'idle'
    },
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(GetListPosts.pending, (state, action) => {
            if (state.loading === 'idle') {
                state.loading = 'loading'
            }
        })
        builder.addCase(GetListPosts.fulfilled, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.data = action.payload
            }
        })
        builder.addCase(GetListPosts.rejected, (state, action) => {
            if (state.loading === 'loading') {
                state.loading = 'idle'
                state.error = "Error"
            }
        })
    }
})

export default postsSlice.reducer;
