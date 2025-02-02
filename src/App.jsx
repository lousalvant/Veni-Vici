import React, { useState, useEffect } from 'react';
import './App.css';
import CatDisplay from './Components/CatDisplay';
import HistoryPanel from './Components/HistoryPanel';
import BanList from './Components/BanList';

const ACCESS_Key = import.meta.env.REACT_APP_CAT_API_KEY

const App = () => {
  const [catData, setCatData] = useState(null);
  const [banList, setBanList] = useState([]);
  const [historyList, setHistoryList] = useState([]);

  const fetchCatData = async () => {
    try {
      let catWithBreedData;
  
      do {
        const response = await fetch(`https://api.thecatapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=1&api_key=${ACCESS_Key}`);
        const data = await response.json();
  
        if (data && data.length > 0) {
          const catId = data[0].id;
  
          // Fetch additional breed information using the cat's ID
          const breedResponse = await fetch(`https://api.thecatapi.com/v1/images/${catId}`);
          const breedData = await breedResponse.json();
  
          if (breedData && breedData.breeds && breedData.breeds.length > 0) {
            // Combine image and breed information
            catWithBreedData = {
              ...data[0],
              breeds: breedData.breeds,
            };
          } else {
            console.error('No breed data found.');
          }
        } else {
          console.error('No cat data found.');
        }
      } while (catWithBreedData && catWithBreedData.breeds.some(breed => banList.includes(breed.origin)));
  
      setCatData(catWithBreedData);
    } catch (error) {
      console.error('Error fetching cat data:', error);
    }
  };  

  const handleDiscoverClick = () => {
    fetchCatData();
  };

  const handleAttributeClick = (attributeType, attributeValue) => {
    // Check if the attribute type is 'weight' or 'life_span'
    if (attributeType === 'weight' || attributeType === 'life_span') {
      // Append the attribute type along with the value to the ban list
      const fullAttribute = `${attributeType}: ${attributeValue}`;
      // Check if the full attribute is not already in the ban list
      if (!banList.includes(fullAttribute)) {
        setBanList([...banList, fullAttribute]);
      }
    } else {
      // For other attribute types, directly append the value to the ban list
      if (!banList.includes(attributeValue)) {
        setBanList([...banList, attributeValue]);
      }
    }
  };

  useEffect(() => {
    if (catData) {
      setHistoryList([...historyList, catData]);
    }
  }, [catData]);

  return (
    <div className="App">
      <header className="header">
      </header>
      <div className="container">
        <div className="left-panel">
          <HistoryPanel historyList={historyList} />
        </div>
        <div className="middle-panel">
          <CatDisplay catData={catData} onAttributeClick={handleAttributeClick} onDiscoverClick={handleDiscoverClick} />
        </div>
        <div className="right-panel">
          <BanList banList={banList} />
        </div>
      </div>
    </div>
  );
};

export default App;
