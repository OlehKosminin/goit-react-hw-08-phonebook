import { createSlice } from '@reduxjs/toolkit';
import { singup, login } from './auth-operation';

const initialState = {
  user: {},
  token: '',
  loading: false,
  isLogin: false,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(singup.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(singup.fulfilled, (store, { payload }) => {
        store.loading = false;
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(singup.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      })
      .addCase(login.pending, store => {
        store.loading = true;
        store.error = null;
      })
      .addCase(login.fulfilled, (store, { payload }) => {
        console.log('payload: ', payload);
        store.loading = false;
        store.user = payload.user;
        store.token = payload.token;
        store.isLogin = true;
      })
      .addCase(login.rejected, (store, { payload }) => {
        store.loading = false;
        store.error = payload;
      });
  },
});
export default authSlice.reducer;
