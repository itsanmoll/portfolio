type Project = { title: string; desc: string; stack: string; url: string };
const projects: Project[] = [
  { title: 'Streamly', desc: 'Streamyard alternative with WebRTC & FFMPEG', stack: 'Node.js, React', url: '#' },
  // ...
];

export default function Projects() {
  return (
    <section id="projects" className="px-8 py-16 bg-base-100">
      <h2 className="text-4xl font-semibold mb-8">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <div key={p.title} className="card bg-base-200 shadow-md">
            <div className="card-body">
              <h3 className="card-title">{p.title}</h3>
              <p>{p.desc}</p>
              <div className="mt-3 text-sm text-gray-600">{p.stack}</div>
              <a href={p.url} className="btn btn-primary btn-sm mt-4">View</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
