import React from "react";
import { GameSquare, SQUARE_SIZE } from "../Components/GameSquare";
import boardBg from "../assets/game-background.svg";
import placeholderSquare from "../assets/fence.png";
import accioImg from "../assets/accio.png";
import albusDumbledoreImg from "../assets/albus-dumbledore.png";
import argusFilchImg from "../assets/argus-filch.png";
import depulsoImg from "../assets/depulso.png";
import locomotorMortisImg from "../assets/locomotor-mortis.png";
import owlImg from "../assets/owl.png";
import newtImg from "../assets/newt.png";
import wombatImg from "../assets/wombat.png";
import diceRollImg from "../assets/dice-roll.png";
import titleImg from "../assets/title.png";

// Board parameters
const COLS = 8;
const ROWS = 6;
const BOARD_WIDTH = SQUARE_SIZE * COLS;
const BOARD_HEIGHT = SQUARE_SIZE * ROWS;

// Store the source and positions for each type of image
const imgInfo = {
  accio: { src: accioImg, positions: [10,15] },
  albusDumbledore: { src: albusDumbledoreImg, positions: [19] },
  argusFilch: { src: argusFilchImg, positions: [1] },
  depulso: { src: depulsoImg, positions: [8,17] },
  locomotorMortis: { src: locomotorMortisImg, positions: [12] },
  owl: { src: owlImg, positions: [2,3,5,7] },
  newtImg: { src: newtImg, positions: [4,6,11,16] },
  wombatImg: { src: wombatImg, positions: [9,13,14,18] },
};

const Home = () => {
  // Prepare images by position array for quick lookup
  const imgsByPosition = [];
  for (var i = 0; i < COLS * 2 + 3; ++i) {
    imgsByPosition.push(placeholderSquare);  
  }

  for (const key in imgInfo) {
    const info = imgInfo[key];
    info.positions.forEach((pos) => {
      imgsByPosition[pos - 1] = info.src;
    });
  }

  console.log("imgsByPosition:", imgsByPosition);

  // Helper function to transform square id to corresponding position index
  const getPositionById = (id) => {
    const [side, index] = id.split("-");
    if (side === "top") {
      var c = parseInt(index, 10);
      return COLS + 2 + c;
    } else if (side === "bottom") {
      var c = parseInt(index, 10);
      return COLS - c - 1;
    } else if (side === "left") {
      var r = parseInt(index, 10);
      return COLS + (r - 1);
    } else if (side === "right") {
      return COLS * 2 + 2;
    }
    return -1;
  };

  // console.log("Test getPositionById:", getPositionById("top-0"), getPositionById("bottom-7"), getPositionById("left-2"), getPositionById("right-2"));

  // Contains all the squares to render
  const squares = [];

  // top row (row 1)
  for (let c = 0; c < COLS; c++) {
    squares.push({
      id: `top-${c}`,
      left: c * SQUARE_SIZE,
      top: SQUARE_SIZE,
      role: "top",
    });
  }

  // bottom row (row 4)
  for (let c = 0; c < COLS; c++) {
    const isStart = c === COLS - 1; // rightmost bottom square is the start
    squares.push({
      id: `bottom-${c}`,
      left: c * SQUARE_SIZE,
      top: (ROWS - 2) * SQUARE_SIZE,
      role: isStart ? "start" : "bottom",
    });
  }

  // left side: two squares in the left column at row 2 and row 3
  for (let r = 2; r <= 3; r++) {
    squares.push({
      id: `left-${r}`,
      left: 0,
      top: r * SQUARE_SIZE,
      role: "left",
    });
  }

  // right side: single square in right column between top and bottom (choose row 2 here)
  const rightRow = 2; // you can change to 1 if you prefer it higher
  squares.push({
    id: `right-${rightRow}`,
    left: (COLS - 1) * SQUARE_SIZE,
    top: rightRow * SQUARE_SIZE,
    role: "destination",
  });

  // Handle square click
  // TODO: pop up the corresponding question or action for the square
  const handleClick = (id) => {
    console.log("clicked square:", id);
  };

  // Board style
  const boardStyle = {
    position: "relative",
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    backgroundImage: `url(${boardBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    margin: "0 auto",
    // ensure squares are inside the visible background area
    boxSizing: "content-box",
  };

  // Wrap for all play squares
  const wrapperStyle = {
    position: "absolute",
    top: 0,
    left: 0,
    width: BOARD_WIDTH,
    height: BOARD_HEIGHT,
    pointerEvents: "none", // allow clicks only on squares (they will enable pointer events)
  };

  // Dice roll style
  const diceRollStyle = {
    position: "absolute",
    left: (COLS / 2) * SQUARE_SIZE - (SQUARE_SIZE / 2),
    top: SQUARE_SIZE * 3 - SQUARE_SIZE / 4
  };

  // Title style
  const titleStyle = {
    position: "absolute",
    left: (COLS / 4) * SQUARE_SIZE + SQUARE_SIZE / 2,
    top: SQUARE_SIZE * 2 - SQUARE_SIZE / 4
  };

  return (
    <div style={{ padding: 20 }}>
      <div style={boardStyle}>
        <div style={wrapperStyle}>
          {squares.map((sq) => (
            <div
              key={sq.id}
              style={{
                position: "absolute",
                left: sq.left,
                top: sq.top,
                width: SQUARE_SIZE,
                height: SQUARE_SIZE,
                pointerEvents: "auto",
              }}
            >
              <GameSquare
                imageSource={imgsByPosition[getPositionById(sq.id)]}
                onClick={() => handleClick(sq.id)}
              />
            </div>
          ))}
        </div>
        <div style={diceRollStyle}>
          {/* Placeholder for dice roll component */}
          <GameSquare
            imageSource={diceRollImg}
            onClick={() => console.log("Dice rolled!")}
            alterHeight={136}
            alterWidth={129}
          />
        </div>
        <div style={titleStyle}>
          <GameSquare
            imageSource={titleImg}
            onClick={() => console.log("Title clicked!")}
            alterHeight={120}
            alterWidth={400}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;