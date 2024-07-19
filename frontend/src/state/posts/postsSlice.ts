import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface PostStateType {
    id: string;
    title: string;
    image: string;
    description: string;
}

interface PostsStateType {
    posts: PostStateType[];
}

const initialState: PostsStateType = {
    posts: [],
}

const postsSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        addPost: (state, action: PayloadAction<PostStateType>) => {
            state.posts = state.posts.concat(action.payload);
        },
        editPost: (state, action: PayloadAction<PostStateType>) => {
            const updtPostIndex = state.posts.findIndex(post => post.id === action.payload.id);
            if (updtPostIndex !== -1) {
                state.posts[updtPostIndex] = action.payload;
            }
        },
        deletePost: (state, action: PayloadAction<string>) => {
            state.posts = state.posts.filter(post => post.id !== action.payload);
        }
    }
});

export const { addPost, editPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;