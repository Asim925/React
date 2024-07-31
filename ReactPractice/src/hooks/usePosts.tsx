import { useInfiniteQuery } from "@tanstack/react-query";
import axios from "axios";

interface posts {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface postQuery {
  pageSize: number;
}

const usePosts = (query: postQuery) =>
  useInfiniteQuery<posts[], Error>({
    queryKey: ["posts", query],
    queryFn: ({ pageParam = 1 }) =>
      axios
        .get("https://jsonplaceholder.typicode.com/posts", {
          params: {
            _start: (pageParam - 1) * query.pageSize,
            _limit: query.pageSize,
          },
        })
        .then((response) => response.data),

    keepPreviousData: true,
    staleTime: 60 * 1000,
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.length > 0 ? allPages.length + 1 : undefined;
    },
  });
export default usePosts;
