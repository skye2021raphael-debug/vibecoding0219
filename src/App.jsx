import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import PostList from "./pages/PostList"
import PostDetail from "./pages/PostDetail"
import Layout from "./components/Layout"

export default function App() {
  return (
    <BrowserRouter basename="/spring-blog">
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}