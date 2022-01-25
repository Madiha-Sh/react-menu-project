import React, { useState, useEffect } from 'react';
// import items from './data';

const Categories = ({categories, filterItems}) => {

  return (
    <div className='btn-container'>
      {categories.map((category, index) => {
        return (
          <button key={index} className='filter-btn' onClick={() => filterItems(category)}>
            {category}
          </button>
        )
      })}
    </div>
  );
}

export default Categories;