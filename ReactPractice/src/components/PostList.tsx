import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [page, setPage] = useState(1);

  const { data: posts, error, isLoading } = usePosts({ page, pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading....</p>;

  return (
    <>
      <ul className="list-group">
        {posts.map((post) => (
          <li className="list-group-item">{post.title}</li>
        ))}
      </ul>

      <button
        disabled={page === 1}
        onClick={() => setPage(page - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>

      <button
        onClick={() => setPage(page + 1)}
        className="btn btn-primary my-3 mx-3"
      >
        Next
      </button>
    </>
  );
};

export default PostList;