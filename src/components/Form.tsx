import { FormEvent, useRef, useState } from "react";

const Form = () => {
  //   using useRef
  let nameRef = useRef<HTMLInputElement>(null);
  let ageRef = useRef<HTMLInputElement>(null);
  //   let person = { name: "", age: 0;

  //using ueState
  let [person, setPerson] = useState({ name: "", age: 0 });

  let handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // if (nameRef.current !== null) person.name = nameRef.current.value;
    // if (ageRef.current !== null) person.age = parseInt(ageRef.current.value);
    console.log(person);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="name" className="form-label">
          name
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, name: event.target.value })
          }
          value={person.name}
          ref={nameRef}
          id="name"
          type="text"
          className="form-control"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="age" className="form-label">
          age
        </label>
        <input
          onChange={(event) =>
            setPerson({ ...person, age: Number(event.target.value) })
          }
          value={person.age}
          ref={ageRef}
          id="age"
          type="number"
          className="form-control"
        />
      </div>
      <button className="btn btn-primary">Submit</button>
    </form>
  );
};

export default Form;
