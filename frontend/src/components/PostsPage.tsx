import { useEffect, useState } from "react";
import PostCard from "./PostCard";
import { IPost } from "../interfaces/post";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "./SearchBar";

function PostsPage() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const [ posts, setPosts ] = useState<IPost[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [ loading, setLoading ] = useState<boolean>(false);

    useEffect(() => {
        fetchPosts();
    }, [])

    const fetchPosts = async () => {
        try {
            const response = await axios.get(`${BASE_URL}/posts`);
            setPosts(response.data);
            
        } catch (error) {
            console.error('Error fetching posts:', error);
        } finally {
            setLoading(false);
        }
    }

    const filteredPosts = posts.filter(post =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-4">
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-3xl font-bold">Posts List</h1>
                <Link
                    to="/create-new-post"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
                >
                    Create New Post
                </Link>
            </div>
            <SearchBar onSearch={setSearchQuery}/>
            <div className="grid gap-4 md:grid-cols-2">
                {filteredPosts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>
        </div>
    );
}

export default PostsPage;