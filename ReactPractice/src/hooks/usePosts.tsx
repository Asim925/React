import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const usePosts = () => {
  return useQuery<posts[], Error>({
    queryKey: ["posts"],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts")
        .then((response) => response.data),

    staleTime: 60 * 1000,
  });
};

export default usePosts;
