type Role = { title: string; company: string; date: string; tech: string[] };
const roles: Role[] = [
  { title: 'Full Stack Engineer', company: 'Swifey AI', date: '2023–Present', tech: ['Next.js', 'FastAPI', 'Rust'] },
  // add more
];

export default function Experience() {
  return (
    <section id="experience" className="px-8 py-16">
      <h2 className="text-4xl font-semibold mb-8">Experience</h2>
      <div className="space-y-6">
        {roles.map((r) => (
          <div key={r.title} className="border-l-2 border-primary pl-4">
            <h3 className="text-2xl">{r.title} @ {r.company}</h3>
            <time className="text-gray-500">{r.date}</time>
            <p className="mt-1 text-sm text-gray-700">Tech: {r.tech.join(', ')}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
