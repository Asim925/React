import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface postQuery {
  page: number;
  pageSize: number;
}

const usePosts = (query: postQuery) => {
  return useQuery<posts[], Error>({
    queryKey: ["posts", query],
    queryFn: () =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (query.page - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((response) => response.data),

    staleTime: 60 * 1000,
  });
};

export default usePosts;
