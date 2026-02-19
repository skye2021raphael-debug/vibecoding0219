export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center"
    >
      <h1 className="text-4xl font-bold mb-6 text-[#C08497]">在春天裡寫字</h1>
      <p className="text-lg mb-8 leading-relaxed">
        這是一個以春日柔和色調與手繪風格為靈感的部落格。
        <br />
        記錄生活、閱讀與日常片刻。
      </p>
      <Link to="/posts">
        <Button className="rounded-2xl shadow-md">開始閱讀</Button>
      </Link>
    </motion.div>
  );
}