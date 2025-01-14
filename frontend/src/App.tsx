import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import PostsPage from "./components/PostsPage"
import CreatePost from "./components/CreatePost"
import PostDetailPage from "./components/PostDetailPage"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={< PostsPage />} />
        <Route path="/post/:id" element={< PostDetailPage />} />
        <Route path="/create-new-post" element={< CreatePost />} />
      </Routes>
    </Router>
  )
}

export default App