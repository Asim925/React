import { useState } from "react";

function ListGroup() {
  const items = ["A", "B", "C"];
  let [selectedIndex, setSelectedIndex] = useState(-1);
  return (
    <>
      <h1>List</h1>
      {/* {items.length === 0 ? <p>suorry</p> : null} */}
      {items.length === 0 && <p>no item</p>}
      {/* upper wali line me agr to pehli condition true to return second ! */}

      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={index}
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => setSelectedIndex(index)}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
