import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PostsPage from "./components/PostsPage"
import CreatePost from "./components/CreatePost"
import PostDetailPage from "./components/PostDetailPage"
import { useState } from "react"
import { IPost } from "./interfaces/post"

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const addNewPost = ( newPost: IPost ) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={< PostsPage posts={posts} setPosts={setPosts} />} />
        <Route path="/post/:id" element={< PostDetailPage />} />
        <Route path="/create-new-post" element={< CreatePost addPost={addNewPost}/>} />
      </Routes>
    </Router>
  )
}

export default App