const posts = [
  { title: 'When process.env Bites Back', date: 'May 4, 2025', url: '#' },
  // top 3 preview posts
];

export default function Blog() {
  return (
    <section id="blog" className="px-8 py-16">
      <h2 className="text-4xl font-semibold mb-8">Blog</h2>
      <div className="space-y-4">
        {posts.map((p) => (
          <a key={p.title} href={p.url} className="block p-4 rounded-lg bg-base-200 shadow hover:bg-base-300 transition">
            <h3 className="text-2xl">{p.title}</h3>
            <time className="text-gray-500">{p.date}</time>
          </a>
        ))}
      </div>
    </section>
  );
}
