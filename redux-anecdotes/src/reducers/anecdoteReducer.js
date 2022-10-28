import { createSlice } from '@reduxjs/toolkit';

import * as anecdoteServices from '../services/anecdotes';

const initialState = [];

const reducerSlice = createSlice({
  name: 'anecdotes',
  initialState,
  reducers: {
    voteAnecdote: (state, action) => {
      const id = action.payload.id;
      return state.map((anecdote) =>
        anecdote.id !== id ? anecdote : action.payload
      );
    },
    setAnecdotes: (state, action) => action.payload,
    appendAnecdote: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const initializeAnecdotes = () => {
  return async (dispatch) => {
    const anecdotes = await anecdoteServices.getAll();
    dispatch(setAnecdotes(anecdotes));
  };
};

export const createAnecdote = (content) => {
  return async (dispatch) => {
    const newAnecdote = await anecdoteServices.createNew(content);
    dispatch(appendAnecdote(newAnecdote));
  };
};

export const voteAnecdoteById = (anecdote) => {
  const votedAnecdote = {
    ...anecdote,
    votes: anecdote.votes + 1,
  };
  return async (dispatch) => {
    await anecdoteServices.voteById(votedAnecdote);
    dispatch(voteAnecdote(votedAnecdote));
  };
};

export const { voteAnecdote, setAnecdotes, appendAnecdote } =
  reducerSlice.actions;
export default reducerSlice.reducer;
