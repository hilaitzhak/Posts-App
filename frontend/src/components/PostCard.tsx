import { Link } from "react-router-dom";
import { IPostCardProps } from "../interfaces/interace";

function PostCard({post}: IPostCardProps) {
    return (
        <Link 
            to={`/posts/${post.id}`} 
            className="block p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
        >
            <h2 className="text-xl font-bold mb-2 text-gray-800">{post.title}</h2>
            <p className="text-gray-600">{post.body}</p>
        </Link>
    );
}

export default PostCard;