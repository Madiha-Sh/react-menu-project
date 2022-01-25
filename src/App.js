import React, { useState } from 'react';
import './App.css';
import Menu from './component/menu';
import items from './component/data';
import Categories from './component/categories';

const App = () => {
  const allCategories = ['all', ...new Set(items.map(item => item.category))]
  
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === 'all'){
      return setMenuItems(items);
    }
    else {
    const newMenuItems = items.filter(item => category === item.category)
    setMenuItems(newMenuItems);
    }
  }

  return (
    <main>
      <section className='menu-section'>
        <div className="title">
          <h1>our menu</h1>
          <div className="underline"></div>
        </div>
        <Categories categories={categories} filterItems={filterItems}/>
        <Menu items={menuItems}/>
      </section>
    </main>
  );
}

export default App;