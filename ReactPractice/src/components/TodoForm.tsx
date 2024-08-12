import {
  QueryClient,
  useMutation,
  useQueryClient,
} from "@tanstack/react-query";
import axios from "axios";
import { useRef } from "react";
import { Todo } from "../hooks/useTodos";

interface AddTodoConetxt {
  previousTodos: Todo[];
}

const TodoForm = () => {
  const ref = useRef<HTMLInputElement>(null);

  let queryClient = useQueryClient();

  let addTodo = useMutation<Todo, Error, Todo, AddTodoConetxt>({
    mutationFn: (newTodo: Todo) =>
      axios
        .post<Todo>("https://jsonplaceholder.typicode.com/todos", newTodo)
        .then((response) => response.data),

    onMutate: (newTodo: Todo) => {
      const previousTodos = queryClient.getQueryData<Todo[]>(["todos"]) || [];

      queryClient.setQueriesData<Todo[]>(["todos"], (todos) => [
        newTodo,
        ...(todos || []),
      ]);
      if (ref.current && ref.current.value) ref.current.value = "";

      // agr to bhand aye to phir purana data use hoga || agr nahi aye to naya wala
      return { previousTodos };
    },

    onSuccess: (savedTodo, newTodo) => {
      queryClient.setQueryData<Todo[]>(["todos"], (todos) =>
        todos?.map((todo) => (todo === newTodo ? savedTodo : todo))
      );
    },

    onError: (error, newTodo, context) => {
      if (!context) return;
      queryClient.setQueryData(["todos"], context.previousTodos);
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
          <button
            disabled={addTodo.isLoading}
            type="submit"
            className="btn btn-primary"
          >
            {addTodo.isLoading ? "Adding" : "Add Todo"}
          </button>
        </div>
      </form>
    </>
  );
};

export default TodoForm;
