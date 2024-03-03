import { Link, useParams } from "react-router-dom";
import Celebration from "./Celebration";
import validateResult from "../validateResult";
const GameResult = () => {
  const gameMoves = [
    { id: 1, img: "../../src/assets/images/rock.png", move: "Rock" },
    { id: 2, img: "../../src/assets/images/paper.png", move: "Paper" },
    { id: 3, img: "../../src/assets/images/scissor.png", move: "Scissor" },
  ];
  // get the move made by user
  const { move } = useParams();
  // get the move img url to display the move made by user
  const findMove = gameMoves.find((moves) => moves.move === move);

  const randomMove = Math.floor(Math.random() * 3);

  const gameResult = validateResult(move,gameMoves,randomMove);
  // console.log(gameResult);
  return (
    <div className="bg-darkBlue h-screen select-none">
        {gameResult === 'You won the game🎉'?<Celebration/>:null} 
      <div className="max-w-lg mx-auto flex items-center space-x-10 pt-16">
        <div className="flex flex-col justify-center">
          <img src={findMove.img} className="cursor-pointer" alt="rock" />
          <span className="text-center text-2xl font-bold text-yellow">
            You
          </span>
        </div>
        <div className="text-white text-6xl anton-regular">VS</div>
        <div className="flex flex-col justify-center items-center">
          <img
            src={gameMoves[randomMove].img}
            className="cursor-pointer"
            alt="paper"
          />
          <span className="text-center text-white text-2xl font-bold">
            Computer
          </span>
        </div>
      </div>
      <div className="text-6xl text-lightBlue exo-regular text-center  mt-10 ms-12">
        {gameResult}
      </div>
      <div className="text-center my-20">
        <Link to={"/game"} className="button-style">
          Try again
        </Link>
      </div>
    </div>
  );
};

export default GameResult;
