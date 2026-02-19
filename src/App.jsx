import { HashRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/Home"
import PostList from "./pages/PostList"
import PostDetail from "./pages/PostDetail"

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posts" element={<PostList />} />
        <Route path="/posts/:id" element={<PostDetail />} />
      </Routes>
    </HashRouter>
  )
}