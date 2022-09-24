import {useState} from 'react'

function Square({value,onClick}) {
    
    return (
        <button className="square"
        onClick={()=>onClick()} >
            {value}
        </button>

    )
}
function Board() {
    const [squares,setSquares] = useState(Array(9).fill(null))
    const [xIsNext,setXIsNext] = useState(true)
    function handleClick(i){
        const squares2 = squares.slice();
        if(calculateWiner(squares) || squares[i]){
            return;
        }
        squares2[i]= xIsNext ? 'X':'O';
        setSquares(squares2)
        setXIsNext(!xIsNext)
    }
    function renderSquare(i){
        return <Square
        value={squares[i]} 
        onClick={()=>handleClick(i)} />;
    }
    const winner = calculateWiner(squares);
    let status;
    if(winner){
        status = "wygrywa: "+winner;
    }else{
        status = "Następny gracz: " + (xIsNext ? "X" : "O");
    }
    
    return(
        <div>
        <div className="status">{status}</div>
        <div className="board-row">
            {renderSquare(0)}
            {renderSquare(1)}
            {renderSquare(2)}
        </div>
        <div className="board-row">
            {renderSquare(3)}
            {renderSquare(4)}
            {renderSquare(5)}
        </div>
        <div className="board-row">
            {renderSquare(6)}
            {renderSquare(7)}
            {renderSquare(8)}
        </div>
        </div>
    )

}



export default function Game() {
    return (
        <div className="game">
            <div className="game-board">
                <Board />
            </div>
            <div className="game-info">
                <div>{/* status */}</div>
                <ol>{/* TODO */}</ol>
            </div>
        </div>
    )
}

function calculateWiner(squares){
    const lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6],
    ];
    for (let i = 0; i<lines.length; i++){
        const[a,b,c] = lines[i];
        if (squares[a] && squares[a] === squares[b]&&squares[a] ===squares[c]){
            return squares[a];
        }
    }
    return null;
}


// class Square extends React.Component {
//     render() {
//       return (
//         <button className="square">
//           {/* TODO */}
//         </button>
//       );
//     }
//   }
  
//   class Board extends React.Component {
//     renderSquare(i) {
//       return <Square />;
//     }
  
//     render() {
//       const status = 'Next player: X';
  
//       return (
//         <div>
//           <div className="status">{status}</div>
//           <div className="board-row">
//             {this.renderSquare(0)}
//             {this.renderSquare(1)}
//             {this.renderSquare(2)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(3)}
//             {this.renderSquare(4)}
//             {this.renderSquare(5)}
//           </div>
//           <div className="board-row">
//             {this.renderSquare(6)}
//             {this.renderSquare(7)}
//             {this.renderSquare(8)}
//           </div>
//         </div>
//       );
//     }
//   }
  
//   class Game extends React.Component {
//     render() {
//       return (
//         <div className="game">
//           <div className="game-board">
//             <Board />
//           </div>
//           <div className="game-info">
//             <div>{/* status */}</div>
//             <ol>{/* TODO */}</ol>
//           </div>
//         </div>
//       );
//     }
//   }
  

  