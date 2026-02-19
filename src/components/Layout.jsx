import { Link } from "react-router-dom"

export default function Layout({ children }) {
  return (
    <div style={{ background: "#F8F5F0", minHeight: "100vh" }}>
      <header style={{ background: "#EEDDD3", padding: "20px" }}>
        <Link to="/">春日手札</Link> |
        <Link to="/posts"> 文章列表</Link>
      </header>

      <main style={{ padding: "40px" }}>
        {children}
      </main>

      <footer style={{ textAlign: "center", padding: "20px" }}>
        © 2026 春日手札
      </footer>
    </div>
  )
}