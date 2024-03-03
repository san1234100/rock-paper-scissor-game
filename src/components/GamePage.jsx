import { useState } from "react";
import { Link } from "react-router-dom";

const GamePage = () => {
   const [selectedMove,setSelectedMove] = useState('Rock');
   const handleMove = (e) =>{
    setSelectedMove(e.target.alt);
   }
    return (
      <div className="bg-darkBlue h-screen select-none">

        <h1 className="text-center text-4xl font-semibold text-white pt-10">Choose your move</h1>
         <div className="max-w-2xl mx-auto flex items-center space-x-10 pt-20">
            <img src="./src/assets/images/rock.png" className="cursor-pointer game-move-card" onClick={(e)=>handleMove(e)} alt="Rock" />
            <img src="./src/assets/images/paper.png" className="cursor-pointer game-move-card" onClick={(e)=>handleMove(e)} alt="Paper" />
            <img src="./src/assets/images/scissor.png" className="cursor-pointer game-move-card" onClick={(e)=>handleMove(e)} alt="Scissor" />
         </div>
         <div className="text-2xl text-white anton-regular text-center mt-10">Selected: <span className="font-medium text-yellow">{selectedMove}</span></div>
        <div className="text-center my-20">
        <Link to={'/gameresult'} className="button-style play-button">Play</Link>
        </div>
      </div>
    );
  };
  
  export default GamePage;