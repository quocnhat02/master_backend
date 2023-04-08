import React, { useReducer, useState } from 'react';

const initialState = {
  count: 0,
};

const countReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.count += 1;
      return newState;
    }
    case 'DECREMENT': {
      const newState = JSON.parse(JSON.stringify(state));
      newState.count -= 1;
      return newState;
    }

    default:
      break;
  }
  return state;
};

const Count = () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  const handleIncrement = () => {
    dispatch({
      type: 'INCREMENT',
    });
  };

  const handleDecrement = () => {
    dispatch({
      type: 'DECREMENT',
    });
  };

  return (
    <div className='count'>
      <div>Count: {state.count}</div>
      <button onClick={handleIncrement}>Increment</button>
      <button onClick={handleDecrement}>Decrement</button>
    </div>
  );
};

export default Count;
