import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from '../redux/todoSlice';

const FilterButtons = () => {
  const dispatch = useDispatch();
  const filter = useSelector(state => state.todos.filter);

  const filters = ['all', 'completed', 'pending'];

  return (
    <div className="filter-container">
      {filters.map(f => (
        <button
          key={f}
          onClick={() => dispatch(setFilter(f))}
          className={`filter-button ${filter === f ? 'active' : ''}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;