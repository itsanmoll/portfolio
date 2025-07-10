import React from "react";
import Image from "next/image";

const roles = [
  {
    title: 'LLM Engineer (Contributor)',
    company: 'UnifyAi',
    date: 'AUG 2024 — OCT 2024',
    location: 'London, United Kingdom (Remote)',
    tech: ['Python', 'AutoGPT', 'NLP', 'Haystack'],
    logo: 'https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=facearea&w=64&q=80',
    bullets: [
      'Integrated UnifyAI Python library with AutoGPT to enhance automated task execution workflows.',
      'Optimized NLP workflows by embedding the UnifyAI library into Haystack’s pipeline architecture.'
    ]
  },
  {
    title: 'Deep Learning & Machine Learning Training',
    company: 'Skill Ocean',
    date: 'June 2024 — July 2024',
    location: 'Alwar, Rajasthan',
    tech: ['Neural Networks', 'NLP', 'Python'],
    logo: 'https://images.unsplash.com/photo-1502767089025-6572583495b4?auto=format&fit=facearea&w=64&q=80',
    bullets: [
      'Designed neural network models to advance text processing efficiency.',
      'Conducted workshops teaching NLP techniques to improve team skills.',
      'Enhanced deep learning model’s accuracy by 15% within a tight project timeline.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-16">
      <h2 className="text-4xl font-bold text-primary mb-10 text-center">Experience</h2>
      <div className="flex flex-col gap-10 max-w-2xl mx-auto">
        {roles.map((r) => (
          <div key={r.title} className="card bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-200 flex flex-col md:flex-row items-center gap-8 p-10 rounded-2xl">
            <Image
              src={r.logo}
              alt={r.company}
              width={64}
              height={64}
              className="w-16 h-16 rounded-full border-2 border-primary"/>
            <div className="flex-1 text-center md:text-left">
              <h3 className="text-2xl font-bold text-base-content mb-1">{r.title} <span className="font-normal text-primary">@ {r.company}</span></h3>
              <div className="flex flex-wrap gap-2 text-base text-base-content/70 mb-1 justify-center md:justify-start">
                <span>{r.date}</span>
                <span>•</span>
                <span>{r.location}</span>
              </div>
              <div className="flex flex-wrap gap-2 mb-2 justify-center md:justify-start">
                {r.tech.map((t) => (
                  <div key={t} className="badge badge-primary badge-outline text-sm px-3 py-1 rounded-full">{t}</div>
                ))}
              </div>
              <ul className="list-disc ml-5 mt-2 text-base-content/80 text-base space-y-1 text-left">
                {r.bullets.map((b, i) => <li key={i}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
