import useTodos from "../hooks/useTodos";

const TodoList = () => {
  const { data: todos, error, isLoading } = useTodos();

  if (isLoading) return <p>Loading...</p>;

  if (error) return <p>{error.message}</p>;

  return (
    <ul className="list-group">
      {todos?.map((item, index) => (
        <li key={index} className="list-group-item">
          {item.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
