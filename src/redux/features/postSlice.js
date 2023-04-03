import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";


export const getPost = createAsyncThunk("post/getPost", async ({ id }) => 
{
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) => res.json())
})