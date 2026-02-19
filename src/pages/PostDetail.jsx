import { motion } from "framer-motion"
import { Link } from "react-router-dom"
export default function PostDetail() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return <div>找不到文章</div>;
  }

  return (
    <motion.article
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="prose lg:prose-lg max-w-none"
    >
      <h1 className="text-3xl font-bold text-[#C08497] mb-4">{post.title}</h1>
      <p className="text-sm text-gray-400 mb-8">{post.date}</p>
      <div className="whitespace-pre-line leading-relaxed">
        {post.content}
      </div>
      <div className="mt-10">
        <Link to="/posts">
          <Button variant="ghost">← 返回文章列表</Button>
        </Link>
      </div>
    </motion.article>
  );
}