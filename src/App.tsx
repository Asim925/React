import { useState } from "react";

// listgroup
// import ListGroup from "./components/listGroup";

// toggle text example
// import ToggleText from "./components/ToggleText";

// alert
// import Alert from "./components/Alert";

// Exercise 1 : Button
// import Button from "./components/Button.tsx";

// Icon
// import { AiFillAccountBook } from "react-icons/ai";

// like Icon
// import Like from "./components/Like";

// strict Mode
// import Message2 from "./components/Mespersonsage2";

function App() {
  // ===================== listGroup =================== //
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
  // =================== Alert ======================== //
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
  // ========== ++++++++ EXERCISES +++++ ==================== //
  //
  // let [alertVisiblity, setalertVisiblity] = useState(false);
  // return (
  //   <>
  //     {alertVisiblity && (
  //       <Alert onClose={() => setalertVisiblity(false)}>My alert</Alert>
  //     )}
  //     <Button onClick={() => setalertVisiblity(true)} color="secondary">
  //       MY btn
  //     </Button>
  //   </>
  // );
  //
  // ==================== React Icons ======================= //
  //
  // return (
  //   <>
  //     <AiFillAccountBook color="red" size={50} />
  //   </>
  // );
  //
  // ================ LIKE ICON =============== //
  //
  // return (
  //   <>
  //     <Like onClick={() => console.log("CLICKED")} />
  //   </>
  // );
  //
  // =================== EXAMPLE ==================== //
  //
  // return (
  //   <>
  //     <ToggleText />
  //   </>
  // );
  // =================== Strict Mode =================== //
  //
  // return (
  //   <>
  //     <Message2 />
  //   </>
  // );
  //
  // =================== OBJECTS ===================== //
  //
  // let [drink, setDrink] = useState({
  //   title: "pepsi",
  //   price: 5,
  // });
  // let handle = () => {
  //   // let newDrink = {
  //   //   ...drink, // spread operator !
  //   //   price: drink.price + 1,
  //   // };
  //   setDrink({ ...drink, price: drink.price + 1 });
  // };
  // return (
  //   <>
  //     {drink.price}
  //     <button onClick={handle}>Click me </button>
  //   </>
  // );
  //
  // =================== Nested OBJECTS ===================== //
  //
  // const [customer, setCustomer] = useState({
  //   name: "asim",
  //   address: {
  //     city: "karachi",
  //     zipCode: 94991,
  //   },
  // });
  // const handleSelected = () => {
  //   setCustomer({
  //     ...customer,
  //     address: { ...customer.address, zipCode: 33333 },
  //   });
  // };
  // return (
  //   <>
  //     {customer.address.zipCode}
  //     <button onClick={handleSelected}>Click kr</button>
  //   </>
  // );
  //
  // =================== updating Arrays ===================== //
  //
  const [tags, setTags] = useState(["happy", "sad"]);

  const handleSelected = () => {
    // add
    setTags([...tags, "pagal"]);
    // remove
    setTags(tags.filter((tag) => tag !== "sad"));
    // updating
    setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  };

  return (
    <>
      {tags}
      <button onClick={handleSelected}>click kr !</button>
    </>
  );
}
export default App;
