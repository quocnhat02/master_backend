/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useReducer, useState } from 'react';

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

  useEffect(() => {
    console.log('Hello');
  }, [initialState.count]);

  return (
    <div className='p-5 flex gap-x-4'>
      <div className='text-2xl'>Count: {state.count}</div>
      <button
        className='inline-block p-3 bg-green-300'
        onClick={handleIncrement}
      >
        Increment
      </button>
      <button className='inline-block p-3 bg-red-300' onClick={handleDecrement}>
        Decrement
      </button>
    </div>
  );
};

export default Count;
