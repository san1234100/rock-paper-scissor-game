const validateResult = (move,gameMoves,randomMove) => {
    const you = move;
    const computer = gameMoves[randomMove].move;
    // rock rock - draw
    // paper paper - draw
    // scissor scissor - draw
    // rock paper - computer
    // rock scissor - you
    // paper rock - you
    // paper scissor -computer
    // scissor rock - computer
    // scissor paper - you
    switch (true) {
      case you === computer:
        return "Draw Match";
        break;
      case you === "Rock" && computer === "Paper":
        return "Computer won the game. Better Luck next time";
        break;
      case you === "Rock" && computer === "Scissor":
        return "You won the game🎉";
        break;
      case you === "Paper" && computer === "Rock":
        return "You won the game🎉";
        break;
      case you === "Paper" && computer === "Scissor":
        return "Computer won the game. Better Luck next time";
        break;
      case you === "Scissor" && computer === "Rock":
        return "Computer won the game. Better Luck next time";
        break;
      case you === "Scissor" && computer === "Paper":
        return "You won the game🎉";
        break;
      default:
        return "No result found";
        break;
    }
  };

  export default validateResult;