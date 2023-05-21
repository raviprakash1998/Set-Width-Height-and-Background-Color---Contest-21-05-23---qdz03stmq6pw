import React, { useState } from 'react'
import '../styles/App.css';

const App = () => {
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [backgroundColor, setBackgroundColor] = useState("");
  const [boxes, setBoxes] = useState([]);
  
  const handleWidthChange = (e) => {
    setWidth(e.target.value);
  }
  
  const handleHeightChange = (e) => {
    setHeight(e.target.value);
  }
  
  const handleBackgroundColorChange = (e) => {
    setBackgroundColor(e.target.value);
  }
  
  const handleCreateBox = () => {
    const newBox = {
      width,
      height,
      backgroundColor,
    }
    setBoxes(prevBox => [...prevBox, newBox]);
    setWidth;
    setHeight;
    setBackgroundColor;
  }

  return (
    <div id="main">
      <h1>Box Creator</h1>
      <div>
        <label htmlFor="width">Width:</label>
        <input
          id="width"
          type="number"
    value="width"
          onChange={handleWidthChange}
        />
      </div>
      <div>
        <label htmlFor="height">Height:</label>
        <input
          id="height"
          type="number"
    value="height"
          onChange={handleHeightChange}
        />
      </div>
      <div>
        <label htmlFor="backgroundColor">Background Color:</label>
        <input
          id="backgroundColor"
          type="text"
          value="backgroundColor"
          onChange={handleBackgroundColorChange}
        />
      </div>
      <button onClick={handleCreateBox} className='create-btn'>Create Box</button>
      <div id="box-container">
    {boxes.map((box, index) => (
          <div
            key={index}
            className="box"
            style={{
              width: box.width,
              height: box.height,
              backgroundColor: box.backgroundColor,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};


export default App;
