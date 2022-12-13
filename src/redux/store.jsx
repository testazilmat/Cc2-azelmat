import { configureStore} from '@reduxjs/toolkit'
import userSlice from './UserSlice';
import PostsSlice from './PostsSlice';


export const store =configureStore({
    reducer:{
        user:userSlice,
        ListPosts:PostsSlice,
    }
})