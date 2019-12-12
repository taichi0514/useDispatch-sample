import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';


function App() {
  const count = useSelector(state => state.count)
  const dispatch = useDispatch()
  const handleClick = (() => {
    dispatch({ type: 'INCREMENT' })
  })
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => { handleClick(); }}>
        inc
      </button>
    </div>
  );
};

export default App;