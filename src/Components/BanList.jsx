import React from 'react';

const BanList = ({ banList }) => {
  return (
    <div className="right-panel">
      <h2>Ban List</h2>
      <ul>
        {banList.map((attribute, index) => (
          <li key={index}>{renderAttribute(attribute)}</li>
        ))}
      </ul>
    </div>
  );

  function renderAttribute(attribute) {
    const [attributeType, attributeValue] = attribute.split(':').map(part => part.trim());

    switch (attributeType) {
      case 'weight':
        return `${attributeValue} lbs`;
      case 'life_span':
        return `${attributeValue} years`;
      default:
        return attribute;
    }
  }
};

export default BanList;
