import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import {
  BlogsPage,
  BlogsPageText,
  createBlog,
  getBlogOne,
  getPageBlog,
} from "./thunk";

interface InitialStateBlogs {
  blogs: BlogsPageText[];
  blogSelected: BlogsPageText | null;
  end: boolean;
}

const initialState: InitialStateBlogs = {
  blogs: [],
  blogSelected: null,
  end: false,
};

const blogsSlice = createSlice({
  name: "blogs",
  initialState,
  reducers: {
    setInitialState: (state) => {
      state = initialState;
    },
  },
  extraReducers: (build) => {
    build
      .addCase(
        getPageBlog.fulfilled,
        (state, action: PayloadAction<false | BlogsPageText[]>) => {
          if (action.payload) {
            state.blogs = action.payload;
          }
        }
      )
      .addCase(getBlogOne.fulfilled, (state, action) => {
        if (action.payload) {
          state.blogSelected = action.payload;
        }
      })

      .addCase(createBlog.fulfilled, (state, action) => {
        if (action.payload) {
          state.end = true;
        }
      });
  },
});

export const blogsReducer = blogsSlice.reducer;

export const {} = blogsSlice.actions;
