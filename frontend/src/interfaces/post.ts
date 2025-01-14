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