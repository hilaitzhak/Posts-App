import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PostsPage from "./pages/PostsPage"
import CreatePost from "./pages/CreatePost"
import PostDetailPage from "./pages/PostDetailPage"
import { useState } from "react"
import { IPost } from "./interfaces/interace"

function App() {
  const [posts, setPosts] = useState<IPost[]>([]);

  const addNewPost = ( newPost: IPost ) => {
    setPosts(prevPosts => [newPost, ...prevPosts]);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={< PostsPage posts={posts} setPosts={setPosts} />} />
        <Route path="/posts/:id" element={< PostDetailPage posts={posts}/>} />
        <Route path="/create-new-post" element={< CreatePost addPost={addNewPost}/>} />
      </Routes>
    </Router>
  )
}

export default App