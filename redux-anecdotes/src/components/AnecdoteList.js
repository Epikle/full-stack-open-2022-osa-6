import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { voteAnecdoteById } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteList = () => {
  const dispatch = useDispatch();
  const { anecdotes, filter } = useSelector(({ anecdotes, filter }) => {
    return {
      anecdotes: [...anecdotes].sort((a, b) => b.votes - a.votes),
      filter,
    };
  });

  const vote = (anecdote) => {
    dispatch(voteAnecdoteById(anecdote));
    dispatch(setNotification(`you voted '${anecdote.content}'`, 5));
  };

  const filteredAnecdotes = anecdotes.filter((anecdote) =>
    anecdote.content.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <Fragment>
      {filteredAnecdotes.map((anecdote) => (
        <div key={anecdote.id}>
          <div>{anecdote.content}</div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote)}>vote</button>
          </div>
        </div>
      ))}
    </Fragment>
  );
};

export default AnecdoteList;
