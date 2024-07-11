import gamesData from "../constants/gamesData";

const GameGrid = () => {
  return (
    <>
      <ul>
        {gamesData.map((game) => (
          <li key={game.id}>{game.title}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
