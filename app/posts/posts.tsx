"use client"

import { IPost } from "../../types/domain";
import { useEffect, useState } from "react";
import PostsTable from "./postsTable";
import PostsApi from "@/apis/postsApi";

export default function Posts({ posts }: { posts: IPost[] }) {
  const api = new PostsApi();
  const pageSize = 25;
  const [allPosts, setAllPosts] = useState(posts);
  const [page, setPage] = useState(0);
  const [previousPage, setPreviousPage] = useState(0);
  const [slicedPosts, setSlicedPosts] = useState(allPosts.slice(page, pageSize));

  const getNextPage = () => {
    return hasNextPage() ? page + 1 : page;
  }

  const hasNextPage = () => {
    return (allPosts.length / pageSize) - page > 1
  }


  const [nextPage, setNextPage] = useState(getNextPage());

  useEffect(() => {
    setNextPage(getNextPage());
    setPreviousPage(page > 0 ? page - 1 : 0);
    const startIndex = pageSize * page;
    setSlicedPosts(allPosts.slice(startIndex, startIndex + pageSize));
  }, [allPosts, page])

  const deletePost = (postId: number) => {
    api.deletePost(postId)
      .then(() => setAllPosts(posts.filter(post => post.id !== postId)))
      .catch((error) => console.log(error))
  }

  const goToNextPage = () => {
    debugger;
    setPage(nextPage);
  }

  const goToPreviousPage = () => {
    setPage(previousPage);
  }

  return <PostsTable posts={slicedPosts} 
    page={page}
    nextPage={nextPage} 
    goToNextPage={goToNextPage} 
    previousPage={previousPage} 
    goToPreviousPage={goToPreviousPage}
    deletePost={deletePost}
  />
}