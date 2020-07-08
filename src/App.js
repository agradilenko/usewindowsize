import React from "react";
import "./App.css";
const { useEffect, useState } = React;

function useWindowSize() {
  const [size, setSize] = useState([window.innerHeight, window.innerWidth]);
  useEffect(() => {
    const handleResize = () => {
      setSize([window.innerHeight, window.innerWidth]);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return size;
}

function App() {
  const [height, width] = useWindowSize();
  return (
    <div
      className="App"
      style={{ backgroundColor: "red", width: width, height: height }}
    >
      <p style={{ margin: 0 }}>
        height: {height}
        <br />
        width: {width}
        <br />
      </p>
    </div>
  );
}

export default App;
