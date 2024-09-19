import React, { useState, useEffect } from 'react';
import Clock from './SimpleClock.jsx';


function App() {

  const [width, setWidth] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  useEffect(() => {
    window.addEventListener('resize',handleResize)
    console.log("Event Listener is added")

    return () => {
      window.removeEventListener('resize',handleResize)
      console.log("Event Listener is removed")
    }
  }, []);

  useEffect(() => {
    document.title =`Size ${width} x ${height}`
  }, [width,height]);


  const handleResize = () => {
     setHeight(window.innerHeight)
     setWidth(window.innerWidth)
  };
  return ( <>
  <p>Window width: {width}px</p>
  <p>Window height: {height}px</p>
  <Clock />
  
  </> );
}

export default App;