const GameResult = () => {
    return (
      <div className="bg-darkBlue h-screen select-none">

         <div className="max-w-lg mx-auto flex items-center space-x-10 pt-16">
           <div className="flex flex-col justify-center">
           <img src="./src/assets/images/rock.png" className="cursor-pointer" alt="rock" />
           <span className="text-center text-2xl font-bold text-yellow">You</span>
           </div>
            <div className="text-white text-6xl anton-regular">VS</div>
           <div className="flex flex-col justify-center items-center">
           <img src="./src/assets/images/paper.png" className="cursor-pointer" alt="paper" />
            <span className="text-center text-white text-2xl font-bold">Computer</span>
           </div>
         </div>
         <div className="text-5xl text-lightBlue exo-regular text-center  mt-10 ms-12">You Won the Game🎉</div>
        <div className="text-center my-20">
        <button className="button-style">Try again</button>
        </div>
      </div>
    );
  };
  
  export default GameResult;
  