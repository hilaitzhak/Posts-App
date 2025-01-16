import { useEffect, useState } from "react";
import PostCard from "../components/PostCard";
import { PostsPageProps } from "../interfaces/interace";
import axios from "axios";
import { Link } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

function PostsPage({ posts, setPosts }: PostsPageProps) {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const [searchQuery, setSearchQuery] = useState('');
    const [ loading, setLoading ] = useState<boolean>(true);
    const [currentPage, setCurrentPage] = useState<number>(1);
    const postPerPage = 20;

    useEffect(() => {
        if (posts.length === 0) {
            fetchPosts();
        } else {
            setLoading(false);
        }
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

    // Pagination logic
    const indexOfLastProduct = currentPage * postPerPage;
    const indexOfFirstProduct = indexOfLastProduct - postPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstProduct, indexOfLastProduct);
    const totalPages = Math.ceil(filteredPosts.length / postPerPage);

    const handlePreviousPage = () => {
        if (currentPage > 1) {
          setCurrentPage(prev => prev - 1);
          window.scrollTo(0, 0);
        }
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(prev => prev + 1);
            window.scrollTo(0, 0);
        }
    };

      
    if (loading) {
        return (
            <LoadingSpinner/>
        );
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
                {currentPosts.map((post) => (
                    <PostCard key={post.id} post={post}/>
                ))}
            </div>

            <div className="flex items-center justify-center gap-4 mt-6">
                <button
                    onClick={handlePreviousPage}
                    className={`flex items-center justify-center gap-1 w-32 px-4 py-2 rounded-lg font-medium transition-all duration-200
                        ${currentPage === 1
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow'
                        }`}
                >
                    <ChevronLeft className="w-5 h-5" />
                    Previous
                </button>
                
                <button
                    onClick={handleNextPage}
                    className={`flex items-center justify-center gap-1 w-32 px-4 py-2 rounded-lg font-medium transition-all duration-200
                        ${currentPage === totalPages
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                            : 'bg-blue-500 text-white hover:bg-blue-600 shadow-sm hover:shadow'
                        }`}
                >
                    Next
                    <ChevronRight className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default PostsPage;