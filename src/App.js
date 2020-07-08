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
  const divHeight = height / 2;
  const divWidth = width / 2;
  return (
    <div
      className="App"
      style={{
        backgroundColor: "red",
        width: divWidth,
        height: divHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <p style={{ margin: 0 }}>
        Window height: {height}
        <br />
        Window width: {width}
        <br />
        Block height: {divHeight}
        <br />
        Block width: {divWidth}
        <br />
      </p>
    </div>
  );
}

export default App;
