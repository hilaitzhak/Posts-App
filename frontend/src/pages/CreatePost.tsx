import axios from "axios";
import { useState } from "react";
import { CreatePostProps, IPost } from "../interfaces/interace";
import { useNavigate } from "react-router-dom";

function CreatePost({ addPost }: CreatePostProps) {
  const BASE_URL = 'https://jsonplaceholder.typicode.com';
  const navigate = useNavigate();
  const [title, setTitle] = useState<string>('');
  const [body, setBody] = useState<string>('');
  const [loading, setLoading] = useState(false);
  const [notification, setNotification] = useState<{show: boolean; type: 'success' | 'error'; message: string;}>
  ({
    show: false,
    type: 'success',
    message: ''
  });

  const generateId = (): number => {
    return Math.floor(Math.random() * 1000000) + 1;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const newPost: IPost = {
      id: generateId(),
      title,
      body,
      userId: 1,
    };

    try {
      const response = await axios.post(`${BASE_URL}/posts`, newPost);
      addPost(response.data || newPost);
      setNotification({ show: true, type: 'success', message: 'Post created successfully!' });

      setTimeout(() => {
        navigate('/');
      }, 2000);
    } catch (error) {
      setNotification({ show: true, type: 'error', message: 'Failed to create post. Please try again.' });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Create New Post</h1>
      
      {notification.show && (
        <div
          className={`mb-4 p-4 rounded ${
            notification.type === 'success' 
              ? 'bg-green-100 text-green-700 border border-green-400' 
              : 'bg-red-100 text-red-700 border border-red-400'
          }`}
        >
          {notification.message}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Title
          </label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter post title"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Content
          </label>
          <textarea
            value={body}
            onChange={(e) => setBody(e.target.value)}
            rows={6}
            className="w-full px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter post content"
            required
          />
        </div>

        <div className="flex gap-4">
          <button
            type="submit"
            disabled={loading}
            className={`flex-1 bg-blue-500 text-white py-2 px-4 rounded-md font-medium
              ${loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'}
              transition-colors duration-200`}
          >
            {loading ? 'Creating...' : 'Create Post'}
          </button>
          
          <button
            type="button"
            onClick={() => navigate('/')}
            className="flex-1 bg-gray-200 text-gray-800 py-2 px-4 rounded-md font-medium 
              hover:bg-gray-300 transition-colors duration-200"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default CreatePost;