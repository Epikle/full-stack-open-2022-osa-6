import { Fragment } from 'react';
import { connect } from 'react-redux';

import { createAnecdote } from '../reducers/anecdoteReducer';
import { setNotification } from '../reducers/notificationReducer';

const AnecdoteForm = ({ createAnecdote, setNotification }) => {
  const formSubmitHandler = async (event) => {
    event.preventDefault();
    const value = event.target.anecdote.value;
    createAnecdote(value);
    setNotification(`you added '${value}'`, 5);
    event.target.anecdote.value = '';
  };

  return (
    <Fragment>
      <h2>create new</h2>
      <form onSubmit={formSubmitHandler}>
        <div>
          <input type="text" name="anecdote" required />
        </div>
        <button>create</button>
      </form>
    </Fragment>
  );
};

const mapDispatchToProps = {
  createAnecdote,
  setNotification,
};

const ConnectedAnecdoteForm = connect(null, mapDispatchToProps)(AnecdoteForm);

export default ConnectedAnecdoteForm;
