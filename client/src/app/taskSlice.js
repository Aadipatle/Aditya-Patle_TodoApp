import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const API = 'http://localhost:5000/api/tasks';

export const fetchTasks = createAsyncThunk('tasks/fetch', async (params, { getState }) => {
  const token = getState().auth.token;
  const res = await axios.get(API, {
    headers: { Authorization: `Bearer ${token}` },
    params,
  });
  return res.data;
});

export const addTask = createAsyncThunk('tasks/add', async (task, { getState }) => {
  const token = getState().auth.token;
  const res = await axios.post(API, task, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
});

export const updateTask = createAsyncThunk('tasks/update', async ({ id, updates }, { getState }) => {
  const token = getState().auth.token;
  const res = await axios.put(`${API}/${id}`, updates, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return res.data;
});

export const deleteTask = createAsyncThunk('tasks/delete', async (id, { getState }) => {
  const token = getState().auth.token;
  await axios.delete(`${API}/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  return id;
});

const taskSlice = createSlice({
  name: 'task',
  initialState: { tasks: [] },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTasks.fulfilled, (state, action) => {
        state.tasks = action.payload;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.tasks.push(action.payload);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        const index = state.tasks.findIndex(t => t._id === action.payload._id);
        if (index !== -1) {
          state.tasks[index] = action.payload;
        }
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.tasks = state.tasks.filter(t => t._id !== action.payload);
      });
  },
});

export default taskSlice.reducer;
