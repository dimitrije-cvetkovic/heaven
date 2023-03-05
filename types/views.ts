import { IPost } from "./domain"

export interface IPostsTableProps {
    posts: IPost[];
    page: number;
    nextPage: number;
    goToNextPage: () => void;
    previousPage: number;
    goToPreviousPage: () => void;
    deletePost: (id: number) => void;
}