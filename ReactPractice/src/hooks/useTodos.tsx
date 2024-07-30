import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Todo {
  id: number;
  userId: number;
  title: string;
  completed: boolean;
}

const useTodos = () => {
  return useQuery<Todo[], Error>({
    queryKey: ["todos"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => response.data),
  });
};

export default useTodos;
