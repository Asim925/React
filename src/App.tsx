// listgroup
// import ListGroup from "./components/listGroup";

// Alert
import { useState } from "react";
import Alert from "./components/Alert";

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
  //==========++++++++ EXERCISES +++++====================//

  let [alertVisiblity, setalertVisiblity] = useState(false);
  return (
    <>
      {alertVisiblity && (
        <Alert onClose={() => setalertVisiblity(false)}>My alert</Alert>
      )}
      <Button onClick={() => setalertVisiblity(true)} color="secondary">
        MY btn
      </Button>
    </>
  );
}
export default App;
