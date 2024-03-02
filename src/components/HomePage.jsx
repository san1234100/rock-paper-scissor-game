const HomePage = () => {
    return (
      <div className="bg-darkBlue h-screen">
         <div className="max-w-2xl mx-auto flex items-center space-x-10 pt-24">
            <img src="./src/assets/images/rock.png" className="cursor-pointer" alt="rock" />
            <img src="./src/assets/images/paper.png" className="cursor-pointer" alt="paper" />
            <img src="./src/assets/images/scissor.png" className="cursor-pointer" alt="scissor" />
         </div>
        <div className="text-center my-20">
        <button className="button-style">Let's play</button>
        </div>
      </div>
    );
  };
  
  export default HomePage;
  