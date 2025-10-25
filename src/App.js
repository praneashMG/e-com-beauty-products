// import React, { useState, useEffect, useCallback, useRef } from "react";

// const SnakeGame = () => {
//   const GRID_SIZE = 20;
//   const INITIAL_SPEED = 150;

//   const [gameState, setGameState] = useState("not-started");
//   const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
//   const [food, setFood] = useState({ x: 5, y: 5 });
//   const [direction, setDirection] = useState("RIGHT");
//   const [nextDirection, setNextDirection] = useState("RIGHT");
//   const [score, setScore] = useState(0);
//   const [highScore, setHighScore] = useState(0);
//   const [speed, setSpeed] = useState(INITIAL_SPEED);

//   const gameLoopRef = useRef(null);
//   const directionRef = useRef(direction);
//   const touchStartX = useRef(0);
//   const touchStartY = useRef(0);
//   const boardRef = useRef(null);

//   const initGame = useCallback(() => {
//     setSnake([{ x: 10, y: 10 }]);
//     setDirection("RIGHT");
//     setNextDirection("RIGHT");
//     directionRef.current = "RIGHT";
//     setScore(0);
//     generateFood();
//     setSpeed(INITIAL_SPEED);
//     setGameState("playing");
//   }, []);

//   const generateFood = useCallback(() => {
//     let newFood;
//     let isOnSnake;

//     do {
//       isOnSnake = false;
//       newFood = {
//         x: Math.floor(Math.random() * GRID_SIZE),
//         y: Math.floor(Math.random() * GRID_SIZE),
//       };

//       for (const cell of snake) {
//         if (cell.x === newFood.x && cell.y === newFood.y) {
//           isOnSnake = true;
//           break;
//         }
//       }
//     } while (isOnSnake);

//     setFood(newFood);
//   }, [snake]);

//   useEffect(() => {
//     const handleKeyDown = (e) => {
//       if (gameState !== "playing") return;

//       switch (e.key) {
//         case "ArrowUp":
//         case "w":
//         case "W":
//           if (directionRef.current !== "DOWN") {
//             setNextDirection("UP");
//           }
//           break;
//         case "ArrowDown":
//         case "s":
//         case "S":
//           if (directionRef.current !== "UP") {
//             setNextDirection("DOWN");
//           }
//           break;
//         case "ArrowLeft":
//         case "a":
//         case "A":
//           if (directionRef.current !== "RIGHT") {
//             setNextDirection("LEFT");
//           }
//           break;
//         case "ArrowRight":
//         case "d":
//         case "D":
//           if (directionRef.current !== "LEFT") {
//             setNextDirection("RIGHT");
//           }
//           break;
//       }
//     };

//     window.addEventListener("keydown", handleKeyDown);
//     return () => window.removeEventListener("keydown", handleKeyDown);
//   }, [gameState]);

//   const handleTouchStart = (e) => {
//     touchStartX.current = e.touches[0].clientX;
//     touchStartY.current = e.touches[0].clientY;
//   };

//   const handleTouchMove = (e) => {
//     if (gameState !== "playing") return;

//     e.preventDefault();

//     const touchEndX = e.touches[0].clientX;
//     const touchEndY = e.touches[0].clientY;

//     const diffX = touchStartX.current - touchEndX;
//     const diffY = touchStartY.current - touchEndY;

//     if (Math.abs(diffX) > Math.abs(diffY)) {
//       if (diffX > 0 && directionRef.current !== "RIGHT") {
//         setNextDirection("LEFT");
//       } else if (diffX < 0 && directionRef.current !== "LEFT") {
//         setNextDirection("RIGHT");
//       }
//     } else {
//       if (diffY > 0 && directionRef.current !== "DOWN") {
//         setNextDirection("UP");
//       } else if (diffY < 0 && directionRef.current !== "UP") {
//         setNextDirection("DOWN");
//       }
//     }
//   };

//   const checkCollision = useCallback(
//     (head) => {
//       if (
//         head.x < 0 ||
//         head.x >= GRID_SIZE ||
//         head.y < 0 ||
//         head.y >= GRID_SIZE
//       ) {
//         return true;
//       }

//       for (let i = 1; i < snake.length; i++) {
//         if (head.x === snake[i].x && head.y === snake[i].y) {
//           return true;
//         }
//       }

//       return false;
//     },
//     [snake]
//   );

//   useEffect(() => {
//     if (gameState !== "playing") return;

//     const moveSnake = () => {
//       setDirection(nextDirection);
//       directionRef.current = nextDirection;

//       const head = { ...snake[0] };

//       switch (nextDirection) {
//         case "UP":
//           head.y -= 1;
//           break;
//         case "DOWN":
//           head.y += 1;
//           break;
//         case "LEFT":
//           head.x -= 1;
//           break;
//         case "RIGHT":
//           head.x += 1;
//           break;
//       }

//       if (checkCollision(head)) {
//         setGameState("game-over");
//         if (score > highScore) {
//           setHighScore(score);
//         }
//         return;
//       }

//       const newSnake = [head, ...snake];

//       if (head.x === food.x && head.y === food.y) {
//         setScore((prev) => prev + 10);
//         generateFood();
//         setSpeed((prev) => Math.max(prev - 2, 50));
//       } else {
//         newSnake.pop();
//       }

//       setSnake(newSnake);
//     };

//     gameLoopRef.current = setTimeout(moveSnake, speed);
//     return () => clearTimeout(gameLoopRef.current);
//   }, [
//     gameState,
//     snake,
//     food,
//     direction,
//     nextDirection,
//     speed,
//     checkCollision,
//     generateFood,
//     score,
//     highScore,
//   ]);

//   const calculateCellSize = useCallback(() => {
//     if (!boardRef.current) return 20;

//     const boardWidth = boardRef.current.clientWidth;
//     const boardHeight = boardRef.current.clientHeight;
//     const cellSize = Math.min(boardWidth, boardHeight) / GRID_SIZE;

//     return Math.floor(cellSize);
//   }, []);

//   const [cellSize, setCellSize] = useState(20);

//   useEffect(() => {
//     const updateCellSize = () => {
//       setCellSize(calculateCellSize());
//     };

//     updateCellSize();
//     window.addEventListener("resize", updateCellSize);

//     return () => window.removeEventListener("resize", updateCellSize);
//   }, [calculateCellSize]);

//   const renderBoard = () => {
//     const board = [];

//     for (let y = 0; y < GRID_SIZE; y++) {
//       for (let x = 0; x < GRID_SIZE; x++) {
//         let cellClass = "cell";

//         const isSnake = snake.some(
//           (segment) => segment.x === x && segment.y === y
//         );
//         if (isSnake) {
//           cellClass += " snake";
//           if (snake[0].x === x && snake[0].y === y) {
//             cellClass += " head";
//           }
//         }

//         if (food.x === x && food.y === y) {
//           cellClass += " food";
//         }

//         board.push(
//           <div
//             key={`${x}-${y}`}
//             className={cellClass}
//             style={{
//               width: cellSize,
//               height: cellSize,
//               left: x * cellSize,
//               top: y * cellSize,
//             }}
//           />
//         );
//       }
//     }

//     return board;
//   };

//   return (
//     <div className="snake-game">
//       <div className="header">
//         <h1>🐍 Snake</h1>
//         <div className="scores">
//           <span>Score: {score}</span>
//           <span>Best: {highScore}</span>
//         </div>
//       </div>

//       <div
//         className="board"
//         ref={boardRef}
//         onTouchStart={handleTouchStart}
//         onTouchMove={handleTouchMove}
//       >
//         {renderBoard()}
//       </div>

//       {gameState !== "playing" && (
//         <div className="overlay">
//           {gameState === "not-started" && <h2>Press Start</h2>}
//           {gameState === "game-over" && <h2>Game Over</h2>}
//           <button onClick={initGame}>▶ Start Game</button>
//         </div>
//       )}

//       <style jsx>{`
//         .snake-game {
//           display: flex;
//           flex-direction: column;
//           align-items: center;
//           min-height: 100vh;
//           background: linear-gradient(135deg, #141e30, #243b55);
//           padding: 20px;
//           color: #fff;
//           font-family: "Poppins", sans-serif;
//         }

//         .header {
//           text-align: center;
//           margin-bottom: 15px;
//         }

//         .header h1 {
//           margin: 0;
//           font-size: 2.2rem;
//           letter-spacing: 2px;
//         }

//         .scores {
//           margin-top: 8px;
//           display: flex;
//           gap: 20px;
//           font-weight: 600;
//         }

//         .board {
//           position: relative;
//           width: 90vmin;
//           height: 90vmin;
//           max-width: 500px;
//           max-height: 500px;
//           background: rgba(255, 255, 255, 0.05);
//           border: 2px solid rgba(255, 255, 255, 0.2);
//           border-radius: 12px;
//           box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
//           overflow: hidden;
//         }

//         .cell {
//           position: absolute;
//           box-sizing: border-box;
//         }

//         .snake {
//           background: #4ade80;
//           border-radius: 4px;
//         }

//         .snake.head {
//           background: #22c55e;
//         }

//         .food {
//           background: #facc15;
//           border-radius: 50%;
//         }

//         .overlay {
//           position: absolute;
//           top: 50%;
//           left: 50%;
//           transform: translate(-50%, -50%);
//           text-align: center;
//           background: rgba(0, 0, 0, 0.7);
//           padding: 25px;
//           border-radius: 12px;
//         }

//         .overlay h2 {
//           margin-bottom: 15px;
//           font-size: 1.8rem;
//         }

//         .overlay button {
//           padding: 12px 25px;
//           font-size: 1rem;
//           border: none;
//           border-radius: 8px;
//           background: #22c55e;
//           color: #fff;
//           font-weight: bold;
//           cursor: pointer;
//           transition: 0.3s;
//         }

//         .overlay button:hover {
//           background: #16a34a;
//         }

//         @media (max-width: 600px) {
//           .header h1 {
//             font-size: 1.8rem;
//           }
//           .overlay h2 {
//             font-size: 1.4rem;
//           }
//           .overlay button {
//             padding: 10px 20px;
//             font-size: 0.9rem;
//           }
//         }
//       `}</style>
//     </div>
//   );
// };

// export default SnakeGame;
import React from "react";

function App() {
  const course = [
    { id: 1, name: "React" },
    { id: 2, name: "CSS" },
    { id: 3, name: "HTML" },
  ];

  const developer = [
    {
      name: "Rithika",
      skills: [
        {
          name: "Angular",
          type: "A",
        },
      ],
    },
    {
      name: "Vsha",
      skills: [
        {
          name: "React",
          type: "JS",
        },
      ],
    },
  ];

  return (
    <div>
      <ul>
        {course.map((data) => (
          <li key={data.id}>{data.name}</li>
        ))}
      </ul>

      <div>
        {developer.map((dev, index) => (
          <div key={index}>
            <h1>{dev.name} skills</h1>
            <div>
              {dev.skills.map((skills, index) => (
                <p key={index}>
                  {skills.type} - {skills.name}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
