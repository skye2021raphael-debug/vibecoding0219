export default function PostList() {
  return (
    <div className="grid md:grid-cols-2 gap-8">
      {posts.map((post) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="rounded-2xl shadow-lg bg-white/80 backdrop-blur-sm">
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-2 text-[#9D6B9F]">
                {post.title}
              </h2>
              <p className="text-sm text-gray-500 mb-3">{post.date}</p>
              <p className="mb-4 leading-relaxed">{post.excerpt}</p>
              <Link to={`/posts/${post.id}`}>
                <Button variant="outline" className="rounded-xl">閱讀更多</Button>
              </Link>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </div>
  );
}