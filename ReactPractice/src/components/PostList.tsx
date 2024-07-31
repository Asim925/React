import React, { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;

  const {
    data: posts,
    error,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = usePosts({ pageSize });

  if (error) return <p>{error.message}</p>;
  if (isLoading) return <p>Loading....</p>;

  return (
    <>
      <ul className="list-group">
        {posts.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.map((post) => (
              <li className="list-group-item">{post.title}</li>
            ))}
          </React.Fragment>
        ))}
      </ul>

      <button
        onClick={() => fetchNextPage()}
        disabled={isFetchingNextPage}
        className="btn btn-primary my-3 mx-3"
      >
        {isFetchingNextPage ? "Loading..." : "Load More"}
      </button>
    </>
  );
};

export default PostList;
