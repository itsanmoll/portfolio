import React from "react";

const posts = [
  { title: 'Generative AI with Large Language Models', date: 'Dec 2024', url: 'https://www.deeplearning.ai/', image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=400&q=80', badge: 'Certificate' },
  { title: 'Smart India Hackathon Finalist', date: 'Dec 2023', url: '#', image: 'https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=crop&w=400&q=80', badge: 'Finalist' },
  { title: 'NASA SpaceApps Challenge Finalist', date: 'Nov 2023', url: '#', image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?auto=format&fit=crop&w=400&q=80', badge: 'Finalist' },
];

export default function Blog() {
  return (
    <section id="blog" className="py-16">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Certificates & Activities</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {posts.map((p) => (
          <a
            key={p.title}
            href={p.url}
            className="card bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-200 flex flex-col hover:scale-105 transition-transform duration-300 overflow-hidden group rounded-2xl"
            target="_blank"
            rel="noopener noreferrer"
          >
            <figure>
              <img src={p.image} alt={p.title} className="w-full h-36 object-cover group-hover:opacity-90 transition rounded-t-2xl" />
            </figure>
            <div className="card-body flex-1 flex flex-col">
              <div className="flex items-center gap-2 mb-2">
                <div className="badge badge-primary badge-outline text-sm px-3 py-1 rounded-full">{p.badge}</div>
                <time className="text-base-content/70 text-xs">{p.date}</time>
              </div>
              <h3 className="text-lg font-bold mb-2">{p.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
