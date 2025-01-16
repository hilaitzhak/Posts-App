export interface IPost {
    userId: number;
    id: number;
    title: string;
    body: string;   
}

export interface IPostCardProps {
    post: IPost;
}

export interface IComment {
    postId: number;
    id: number;
    name: string;
    email: string;
    body: string;   
}

export interface SearchBarProps {
    onSearch: (query: string) => void;
}

export interface CreatePostProps {
    addPost: (post: IPost) => void;
}

export interface PostsPageProps {
    posts: IPost[];
    setPosts: (posts: IPost[]) => void;
}

export interface PostDetailPageProps {
    posts: IPost[]
}

export interface LoadingSpinnerProps {
    message?: string;
}

export interface PaginationProps {
    currentPage: number;
    totalPages: number;
    onPageChange: (page: number) => void;
}