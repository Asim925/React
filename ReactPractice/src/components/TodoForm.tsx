import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  let queryClient = useQueryClient();
  let addTodo = useMutation<Todo, Error, Todo>({
    mutationFn: (newTodo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then((response) => response.data),

    onSuccess: (savedTodo, newTodo) => {
      // newtodo pass kia saved todo update hoa
      //
      // APPROACH 1 : not applicable for JSON.placeholder
      // queryClient.invalidateQueries({
      //   queryKey: ["todos"],
      // });
      //
      // APPROACH 1: updating cache
      queryClient.setQueriesData<Todo[]>(["todos"], (todos) => [
        savedTodo,
        ...(todos || []),
      ]);
    },
  });

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();

    if (ref.current && ref.current.value)
      addTodo.mutate({
        id: 0,
        title: ref.current.value,
        completed: false,
        userId: 1,
      });
  };

  return (
    <>
      {addTodo.error && (
        <div className="alert alert-danger">{addTodo.error.message}</div>
      )}
      <form className="row mb-3" onSubmit={handleSubmit}>
        <div className="col">
          <input ref={ref} type="text" className="form-control" />
        </div>
        <div className="col">
          <button type="submit" className="btn btn-primary">
            Add Todo
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
