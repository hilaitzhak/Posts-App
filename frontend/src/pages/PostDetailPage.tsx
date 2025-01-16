import { useEffect, useState } from "react";
import { IComment, IPost } from "../interfaces/interace";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import LoadingSpinner from "../components/LoadingSpinner";

function PostDetail() {
    const BASE_URL = 'https://jsonplaceholder.typicode.com';
    const { id } = useParams<{ id: string }>();
    const [post, setPost] = useState<IPost | null>(null);
    const [comments, setComments] = useState<IComment[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string>('');
  
    useEffect(() => {
        fetchPostAndComments();
    }, [id]);
    
    const fetchPostAndComments = async () => {
      try {
        const [postResponse, commentsResponse] = await Promise.all([
          axios.get(`${BASE_URL}/posts/${id}`),
          axios.get(`${BASE_URL}/comments?postId=${id}`)
        ]);

        setPost(postResponse.data);
        setComments(commentsResponse.data);
      } catch (error) {
        setError('Failed to fetch post details');
        console.error('Error fetching post details:', error);
      } finally {
        setLoading(false);
      }
    };

    if (loading) {
      return (
        <LoadingSpinner/>
      );
    }  
  
    if (error || !post) {
      return (
        <div className="max-w-2xl mx-auto p-4">
          <div className="bg-red-100 text-red-700 p-4 rounded-md mb-4">
            {error || 'Post not found'}
          </div>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 group"
            >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
            <span>Back to Posts</span>
          </Link>
        </div>
      );
    }
  
    return (
      <div className="max-w-2xl mx-auto p-4">
        <Link 
        to="/" 
        className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-gray-600 bg-gray-100 rounded-lg hover:bg-gray-200 transition-all duration-200 group"
        >
        <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform duration-200" />
        <span>Back to Posts</span>
        </Link>
  
        <div className="mb-8 bg-white rounded-lg shadow-md p-6">
          <h1 className="text-3xl font-bold mb-4">{post.title}</h1>
          <p className="text-gray-700 text-lg">{post.body}</p>
        </div>
  
        <div>
          <h2 className="text-2xl font-bold mb-4">Comments ({comments.length})</h2>
          <div className="space-y-4">
            {comments.map((comment) => (
              <div 
                key={comment.id} 
                className="bg-gray-50 rounded-lg p-4 shadow-sm"
              >
                <h3 className="font-semibold text-lg">{comment.name}</h3>
                <p className="text-gray-500 text-sm mb-2">{comment.email}</p>
                <p className="text-gray-700">{comment.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
}
  
export default PostDetail;