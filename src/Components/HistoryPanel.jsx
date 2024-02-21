import React from 'react';

const HistoryPanel = ({ historyList }) => {
  return (
    <div className="left-panel">
      <h2>History</h2>
      <div className="history-scroll-container">
        {historyList && (
          <div className="history-items">
            {historyList.map((historyCat, index) => (
              <div key={index} className="history-item">
                {historyCat && historyCat.breeds && historyCat.breeds.length > 0 && (
                  <>
                    <img
                      src={historyCat.url}
                      alt={`History Cat ${index}`}
                      style={{ width: '50px', height: '50px' }}
                    />
                    <p>{`A ${historyCat.breeds[0].name} cat from ${historyCat.breeds[0].origin}`}</p>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPanel;
