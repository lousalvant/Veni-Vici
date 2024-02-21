import React from 'react';

const CatDisplay = ({ catData, onAttributeClick, onDiscoverClick }) => {
  console.log('CatDisplay - catData:', catData);

  return (
    <div className="middle-panel">
      <h1>Veni Vici!</h1>
      <h3>Discover cats of your wildest dreams!</h3>
      <h4>😺😸😹😻😼😽🙀😿😾🐱</h4>
      {catData && (
        <>
          <p>{catData.name ? `A ${catData.name} cat` : ''}</p>
          <img src={catData.url} alt="Cat" style={{ width: '100%', maxWidth: '400px' }} />
          <div className="attribute-buttons">
            {catData.breeds[0].name && (
              <button onClick={() => onAttributeClick('name', catData.breeds[0].name)}>
                {catData.breeds[0].name}
              </button>
            )}
            {catData.breeds[0].origin && (
              <button onClick={() => onAttributeClick('origin', catData.breeds[0].origin)}>
                {catData.breeds[0].origin}
              </button>
            )}
            {catData.breeds[0].weight?.imperial && (
              <button onClick={() => onAttributeClick('weight', catData.breeds[0].weight?.imperial)}>
                {catData.breeds[0].weight?.imperial} lbs
              </button>
            )}
            {catData.breeds[0].life_span && (
              <button onClick={() => onAttributeClick('life_span', catData.breeds[0].life_span)}>
                {catData.breeds[0].life_span} years
              </button>
            )}
          </div>
        </>
      )}
      <button onClick={onDiscoverClick} className="discover-button">
        Discover
      </button>
    </div>
  );
};

export default CatDisplay;
