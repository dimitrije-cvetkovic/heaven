import PostsApi from "../../apis/postsApi";
import Posts from "./posts";

export default async function Page() {
  const posts = await getPosts();

  return <Posts posts={posts}></Posts>
}

// This function gets called at build time
export async function getPosts() {
  const api = new PostsApi();
  return await api.getPosts();
}