import React from 'react';

const BanList = ({ banList }) => {
  return (
    <div className="right-panel">
      <h2>Ban List</h2>
      <ul>
        {banList.map((attribute, index) => (
          <li key={index}>{attribute}</li>
        ))}
      </ul>
    </div>
  );
};

export default BanList;
