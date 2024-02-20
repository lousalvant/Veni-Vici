import React from 'react';

const CatDisplay = ({ catData, onAttributeClick, onDiscoverClick }) => {
  console.log('CatDisplay - catData:', catData);

  return (
    <div className="middle-panel">
      {catData && (
        <>
          <p>{catData.name ? `A ${catData.name} cat` : 'A cat'}</p>
          <img src={catData.url} alt="Cat" style={{ width: '100%', maxWidth: '400px' }} />
          <ul>
            <li onClick={() => onAttributeClick('name')}>{catData.breeds[0].name}</li>
            <li onClick={() => onAttributeClick('origin')}>{catData.breeds[0].origin}</li>
            <li onClick={() => onAttributeClick('weight')}>{catData.breeds[0].weight?.imperial} lbs</li>
            <li onClick={() => onAttributeClick('life_span')}>{catData.breeds[0].life_span} years</li>
          </ul>
        </>
      )}
      <button onClick={onDiscoverClick}>Discover</button>
    </div>
  );
};

export default CatDisplay;

