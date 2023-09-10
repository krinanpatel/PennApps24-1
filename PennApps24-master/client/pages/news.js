import React from 'react';

function App() {
  const containerStyle = {
    display: 'flex',
    flexDirection: 'column', 
    alignItems: 'center', 
    backgroundColor: 'lightblue',
    padding: '20px',
    borderRadius: '10px',
  };

  const boxStyle = {
    textAlign: 'center',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '10px',
    backgroundColor: 'white',
    marginBottom: '20px', 
    maxWidth: '50%', 
  };

  return (
    
    <div style={containerStyle}>
      <div style={boxStyle}>
        <h1><b>News Customized Just for You! </b></h1>
      </div>
      <div style={boxStyle}>
        <h1>Top Box</h1>
        <p><b>This is the top box with some text for the name.</b></p>
      </div>
     
      <div style={boxStyle}>
        <p><b>This is the bottom box with a few sentences worth of text. It will be a small description of the article.</b></p>
      </div>
    </div>
  );
}

export default App;
