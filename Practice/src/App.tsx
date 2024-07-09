import { useEffect, useState } from "react";
import apiClient, { CanceledError } from "./services/api-client";
import UserService, { Users } from "./services/user-services";

// import ProductList from "./components/ProductList";

// form
// import Form from "./components/Form";
// import ExpenseList from "./components/Expense-Tracker/ExpenseList";
// import ExpenseFilter from "./components/Expense-Tracker/ExpenseFilter";
// import ExpenseForm from "./components/Expense-Tracker/ExpenseForm";

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

// Immer Library (package)
// import produce from "immer";

// sharing states (carts)
// import NavBar from "./components/NavBar";
// import Cart from "./components/Cart";

// expanded text exercise
// import ExpandedText from "./components/ExpandedText";

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
  // const [tags, setTags] = useState(["happy", "sad"]);
  // const handleSelected = () => {
  //   // add
  //   setTags([...tags, "pagal"]);
  //   // remove
  //   setTags(tags.filter((tag) => tag !== "sad"));
  //   // updating
  //   setTags(tags.map((tag) => (tag === "happy" ? "happiness" : tag)));
  // };
  // return (
  //   <>
  //     {tags}
  //     <button onClick={handleSelected}>click kr !</button>
  //   </>
  // );
  //
  // =================== updating Array of Objects ===================== //
  //
  // const [bugs, setBugs] = useState([
  //   { id: 1, title: "bug 1", fixed: false },
  //   { id: 2, title: "bug 2", fixed: false },
  // ]);
  // let handleSelected = () => {
  //   // setBugs(bugs.map((bug) => (bug.id === 1 ? { ...bug, fixed: true } : bug)));
  //   setBugs(
  //     produce((draft) => {
  //       const bug = draft.find((bug) => bug.id === 1);
  //       if (bug) bug.fixed = true;
  //     })
  //   );
  // };
  // return (
  //   <div>
  //     {bugs.map((bug) => (
  //       <p key={bug.id}>
  //         {bug.title} {bug.fixed ? "fixed" : "not fixed"}
  //       </p>
  //     ))}
  //     <button onClick={handleSelected}>click kr dabbu</button>
  //   </div>
  // );
  //
  // =================== Sharing the states ===================== //
  //
  // const [cartItems, setCartItems] = useState(["product1", "product2"]);
  // return (
  //   <>
  //     <NavBar cartItemCount={cartItems.length} />
  //     <Cart cartItems={cartItems} onClear={() => setCartItems([])} />
  //   </>
  // );
  //
  // =================== Exercise 1: updating states ===================== //
  //
  // const [game, setGame] = useState({
  //   id: 1,
  //   player: { name: "john" },
  // });
  // let handleClick = () => {
  //   setGame({ ...game, player: { ...game.player, name: "Bob" } });
  // };
  // return (
  //   <>
  //     {game.player.name}
  //     <button onClick={handleClick}>Click to change name</button>
  //   </>
  // );
  //
  // =================== Exercise 2: updating states ===================== //
  //
  // const [pizza, setPizza] = useState({
  //   name: "spicy",
  //   toppings: ["mushroom"],
  // });
  // let handleClick = () => {
  //   setPizza({ ...pizza, toppings: [...pizza.toppings, "cheese"] });
  // };
  // return (
  //   <>
  //     <button onClick={handleClick}>Click to add toppings</button>
  //   </>
  // );
  //
  // =================== Exercise 3: updating states ===================== //
  //
  // const [cart, setCart] = useState({
  //   discount: 0.1,
  //   items: [
  //     { id: 1, title: "product1", quantity: 1 },
  //     { id: 1, title: "product1", quantity: 1 },
  //   ],
  // });
  // let handleClick = () => {
  //   setCart({
  //     ...cart,
  //     items: cart.items.map((item) =>
  //       item.id === 1 ? { ...item, quantity: item.quantity + 1 } : item
  //     ),
  //   });
  // };
  // return (
  //   <>
  //     <button onClick={handleClick}>click to increment quantity</button>{" "}
  //   </>
  // );
  //
  // =================== Exercise 4: updating states ===================== //
  //
  // return (
  //   <>
  //     <ExpandedText maxChars={150}>
  //       Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, minima
  //       est repellendus officiis incidunt perferendis consequuntur labore fugit
  //       veritatis odio itaque obcaecati alias numquam molestias sequi cumque.
  //       Maiores, voluptate adipisci eum inventore culpa ut vitae ipsa sapiente
  //       perspiciatis voluptas, molestias quas eaque dolore accusantium
  //       voluptates dignissimos ipsam ipsum earum expedita at quos commodi sequi
  //       hic excepturi! Eaque animi repudiandae delectus distinctio minus nam
  //       odio magni adipisci, repellat nobis, blanditiis praesentium quaerat
  //       rerum molestiae velit culpa! Necessitatibus veritatis, nihil eius earum
  //       praesentium ad distinctio culpa voluptas reprehenderit dolorum,
  //       cupiditate atque aut hic voluptates sequi deserunt unde repudiandae
  //     </ExpandedText>
  //   </>
  // );
  //
  // =================== Form ===================== //
  //
  // return (
  //   <>
  //     <Form />
  //   </>
  // );
  //
  // =================== Form: Project ===================== //
  //
  // let [expenses, setExpenses] = useState([
  //   { id: 1, description: "AAA", amount: 5, category: "Utilities" },
  // ]);
  // let [selectedCategory, setSelectedCategory] = useState("");
  // let visibleExpenses = selectedCategory
  //   ? expenses.filter((expense) => expense.category === selectedCategory)
  //   : expenses;
  // return (
  //   <>
  //     <div className="mb-5">
  //       <ExpenseForm
  //         onSubmit={(data) =>
  //           setExpenses([...expenses, { ...data, id: expenses.length + 1 }])
  //         }
  //       />
  //     </div>
  //     <div className="mb-3">
  //       <ExpenseFilter
  //         onSelectCategory={(category) => setSelectedCategory(category)}
  //       />
  //     </div>
  //     <ExpenseList
  //       expenses={visibleExpenses}
  //       onDelete={(id) =>
  //         setExpenses(expenses.filter((expense) => expense.id !== id))
  //       }
  //     />
  //   </>
  // );
  //
  // =================== useEffect ===================== //
  //
  // let ref = useRef<HTMLInputElement>(null);
  // useEffect(() => {
  //   if (ref.current) ref.current.focus();
  // });
  // useEffect(() => {
  //   document.title = "My App";
  // });
  // return (
  //   <>
  //     <input ref={ref} type="text" className="form-control" />
  //   </>
  // );
  //
  // =================== useEffect; dependencies ===================== //
  //
  // let [category, setCategory] = useState("");
  // return (
  //   <div>
  //     <select
  //       className="form-select"
  //       onChange={(event) => setCategory(event.target.value)}
  //     >
  //       <option value=""></option>
  //       <option value="clothing">clothing</option>
  //       <option value="household">household</option>
  //     </select>
  //     <ProductList category={category} />
  //   </div>
  // );
  //
  // =================== CLEAN UP CODE ===================== //
  //
  // let connect = () => console.log("connecting");
  // let disconnect = () => console.log("disconnecting");
  // useEffect(() => {
  //   connect();
  //   document.title = "my app";
  //   return () => disconnect();
  // });
  // return <div></div>;
  //
  //==================== example
  //
  // const [count, setCount] = useState(0);
  // useEffect(() => {
  //   document.title = `You clicked ${count} times`;
  // }, [count]);
  // return (
  //   <div>
  //     <p>You clicked {count} times</p>
  //     <button onClick={() => setCount(count + 1)}>Click me</button>
  //   </div>
  // );
  //
  // =================== Fetching The Data ===================== //
  //
  // interface "USER" in user-services
  const [users, setUsers] = useState<Users[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  //============= async, await =========//

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     try {
  //       let response = await axios.get(
  //         "https://jsonplaceholder.typicode.com/users"
  //       );
  //       setUsers(response.data);
  //     } catch (err) {
  //       setError((err as AxiosError).message);
  //     }
  //   };

  //   fetchUsers();
  // });

  // ============= normal =========//

  useEffect(() => {
    const { request, cancel } = UserService.getAllUsers();
    request
      .then((response) => {
        setUsers(response.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });

    return () => cancel();
  }, []);

  const orignalUsers = [...users]; // agr kabhi bhand aye to setUsers to orignal

  let deleteUser = (user: Users) => {
    setUsers(users.filter((u) => u.id !== user.id));

    // updating server
    UserService.deleteUser(user.id).catch((err) => {
      setError(err.message);
      setUsers(orignalUsers);
    });
  };

  let addUser = () => {
    let newUser = { id: 0, name: "asim" };
    setUsers([newUser, ...users]);

    UserService.createUser(newUser)
      .then((response) => setUsers([response.data, ...users]))
      .catch((err) => {
        setError(err.message);
        setUsers(orignalUsers);
      });
  };

  let updateUser = (user: Users) => {
    let updatedUser = { ...user, name: user.name + "!" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    UserService.updateUser(updatedUser).catch((err) => {
      setUsers(orignalUsers);
      setError(err.message);
    });
  };

  return (
    <>
      {isLoading && <div className="spinner-border"></div>}
      {error && <p className="text-danger">{error}</p>}

      {!isLoading && (
        <button className="btn btn-primary mb-3" onClick={addUser}>
          Add
        </button>
      )}

      <ul className="list-group">
        {users.map((user) => (
          <li
            className="list-group-item d-flex justify-content-between"
            key={user.id}
          >
            {user.name}
            <div>
              <button
                className="btn btn-outline-secondary mx-2"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
export default App;
