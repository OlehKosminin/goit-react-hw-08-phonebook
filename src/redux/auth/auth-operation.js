import { createAsyncThunk } from '@reduxjs/toolkit';

import * as api from '../../services/auth';

export const singup = createAsyncThunk(
  'auth/singup',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.singup(data);

      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);

export const login = createAsyncThunk(
  'auth/login',
  async (data, { rejectWithValue }) => {
    try {
      const { data: result } = await api.login(data);
      console.log('operation: ', result);
      return result;
    } catch ({ responce }) {
      return rejectWithValue(responce);
    }
  }
);
