let genres = [
  "MMORPG",
  "Shooter",
  "Strategy",
  "Action RPG",
  "Battle Royale",
  "ARPG",
  "MMOARPG",
  "Fighting",
  "MOBA",
  "Card Game",
  "Action",
  "Sports",
  "Racing",
  "MMO",
];

const GenreList = () => {
  return (
    <ul>
      {genres.map((genre) => (
        <li>{genre}</li>
      ))}
    </ul>
  );
};

export default GenreList;
