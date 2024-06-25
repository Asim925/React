// listgroup
// import ListGroup from "./components/listGroup";

// Alert
// import Alert from "./components/Alert";

// Exercise 1 : Button
import Button from "./components/Button.tsx";

function App() {
  // ===================== listGroup
  //
  // const cities = ["karachi", "lahore", "india", "pakistan"];
  // let colors = ["green", "orange"];
  // let handleSelected = (item: String) => {
  //   console.log(item);
  // };
  // return (
  //   <>
  //     <ListGroup items={cities} heading="cites" onSelectItem={handleSelected} />
  //     <ListGroup items={colors} heading="color" onSelectItem={handleSelected} />
  //   </>
  // );
  //
  // =================== Alert
  //
  // return (
  //   <>
  //     <Alert>
  //       Hello <span>world</span>
  //     </Alert>
  //   </>
  // );
  //
  //
  //==========++++++++ EXERCISE 1 : Buttons+++++====================//
  return (
    <>
      <Button onClick={() => console.log("clicked")} color="secondary">
        MY btn
      </Button>
    </>
  );
}
export default App;
