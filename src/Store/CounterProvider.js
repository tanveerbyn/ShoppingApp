import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import CounterContext from './CounterContext';

const CounterProvider = ({children}) => {
  const dispatch = useDispatch();
  const count = useSelector(state => state.count);

  const increment = () => {
    dispatch({type: 'INCREMENT'});
  };

  const decrement = () => {
    dispatch({type: 'DECREMENT'});
  };

  var value = {
    count,
    increment,
    decrement,
  };

  return (
    <CounterContext.Provider value={value}>
      {typeof children === 'function' ? children(value) : children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
