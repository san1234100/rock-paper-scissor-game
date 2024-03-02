const GamePage = () => {
    return (
      <div className="bg-darkBlue h-screen">

        <h1 className="text-center text-3xl text-white pt-10">Choose your move</h1>
         <div className="max-w-2xl mx-auto flex items-center space-x-10 pt-20">
            <img src="./src/assets/images/rock.png" className="cursor-pointer" alt="rock" />
            <img src="./src/assets/images/paper.png" className="cursor-pointer" alt="paper" />
            <img src="./src/assets/images/scissor.png" className="cursor-pointer" alt="scissor" />
         </div>
         <div className="text-2xl text-white anton-regular text-center mt-10">Selected: <span className="font-medium text-yellow">Paper</span></div>
        <div className="text-center my-20">
        <button className="button-style">Play</button>
        </div>
      </div>
    );
  };
  
  export default GamePage;
  