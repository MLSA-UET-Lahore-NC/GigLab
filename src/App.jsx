import React from 'react';
import './App.css';
import graphicDesignImg from './assets/images/4.png';
import cartoonanimation from './assets/images/2.png';
import illustration from './assets/images/3.png';
import flyers from './assets/images/8.png';
import logodesigning from './assets/images/1.png';
import socialgraphics from './assets/images/5.png';
import articlewriting from './assets/images/6.png';
import videoediting from './assets/images/7.png';

const categories = [
  { name: 'Graphic & Design', image: graphicDesignImg },
  { name: 'Cartoon Animation', image: cartoonanimation },
  { name: 'Illustration', image: illustration },
  { name: 'Flyers & Vouchers', image: flyers },
  { name: 'Logo Design', image: logodesigning },
  { name: 'Social Graphics', image: socialgraphics },
  { name: 'Article Writing', image: articlewriting },
  { name: 'Video Editing', image: videoediting },
];

function App() {
  return (
    <div className="App">
      <h1>
        Choose Different <span className="highlight">Category</span>
      </h1>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <div key={index} className="category-card">
            <img src={category.image} alt={category.name} />
            <h2>{category.name}</h2>
          </div>
        ))}
      </div>
      <button className="more-categories-button">More Categories</button>
    </div>
  );
}

export default App;
