import ListGroup from "./components/listGroup";

function App() {
  const cities = ["karachi", "lahore", "india", "pakistan"];
  let colors = ["green", "orange"];

  let handleSelected = (item: String) => {
    console.log(item);
  };

  return (
    <>
      <ListGroup items={cities} heading="cites" onSelectItem={handleSelected} />
      <ListGroup items={colors} heading="color" onSelectItem={handleSelected} />
    </>
  );
}
export default App;
