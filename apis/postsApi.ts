import { IPost } from "@/types/domain";

export default class PostsApi { 
    async getPosts(): Promise<IPost[]> {
        const response =  await fetch('https://jsonplaceholder.typicode.com/posts');
        return await response.json();
    }
    async getPost(id: number) {
        const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await response.json();
    }
    async deletePost(id: number) {
        const response =  await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
        return await response.json();
    }
}