import React from "react";
// import imgFence from "../assets/fence.png"; // Example import

const SQUARE_SIZE = 114;

const GameSquare = ({ imageSource, onClick, alterWidth = -1, alterHeight = -1 }) => {
  const squareStyle = {
    // Background image get from other folder
    backgroundImage: `url(${imageSource})`,
    backgroundSize: 'cover', // Ensures the image covers the entire square without stretching
    backgroundPosition: 'center', // Centers the image within the square
    height: `${alterHeight > 0 ? alterHeight : SQUARE_SIZE}px`, // Define a square size
    width: `${alterWidth > 0 ? alterWidth : SQUARE_SIZE}px`,
    cursor: 'pointer', // Makes it clear the square is clickable
  };

  return (
    <div style={squareStyle} onClick={onClick}>
      {/* Optional: Add content inside the square if needed */}
    </div>
  );
};

// export SQUARE_SIZE too
export { SQUARE_SIZE , GameSquare };
// export default GameSquare;