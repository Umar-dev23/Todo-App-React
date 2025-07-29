import React from 'react';


const FilterButtons = () => {


  const filters = ['all', 'completed', 'pending'];

  return (
    <div className="filter-container">
      {filters.map(f => (
        <button
          key={f}
          className={`filter-button ${f ? 'active' : ''}`}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
};

export default FilterButtons;