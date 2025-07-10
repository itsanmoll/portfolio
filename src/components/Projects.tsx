import React from "react";

const projects = [
  {
    title: 'Indic Language Translator',
    desc: 'Created an interactive Streamlit application as a prototype for an Indic language converter. Implemented Facebook MBart model to translate multilingual text, reducing translation costs by 40%.',
    stack: ['Python', 'Streamlit', 'Facebook MBart'],
    url: '#',
    image: 'https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: '3D Image Sonification (Galaxy Harmonix)',
    desc: 'Processed over 1 TB of NASA space videos to create rich audio experiences using OpenCV and Python. Achieved 95% accuracy in sound mapping through advanced Fourier Transformation algorithms.',
    stack: ['Python', 'OpenCV', 'PIL', 'Audio Processing'],
    url: '#',
    image: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=400&q=80'
  },
  {
    title: 'Satellite Image Tracking (Orion-Ai)',
    desc: 'Developed a satellite tracking application using Cesium JS for 3D visualization. Implemented precise satellite position estimation with TLE data and real-time updates.',
    stack: ['Cesium JS', 'JavaScript', 'TLE'],
    url: '#',
    image: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=400&q=80'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Projects</h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
        {projects.map((p) => (
          <div key={p.title} className="card bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-200 flex flex-col rounded-2xl">
            <figure>
              <img src={p.image} alt={p.title} className="w-full h-40 object-cover rounded-t-2xl" />
            </figure>
            <div className="card-body flex-1 flex flex-col">
              <h3 className="card-title text-2xl font-bold mb-2">{p.title}</h3>
              <p className="text-base-content/80 mb-2">{p.desc}</p>
              <div className="flex flex-wrap gap-2 mt-2 mb-4">
                {p.stack.map((tech) => (
                  <div key={tech} className="badge badge-primary badge-outline text-sm px-3 py-1 rounded-full">{tech}</div>
                ))}
              </div>
              <a href={p.url} className="btn btn-primary btn-sm mt-auto">View Project</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
