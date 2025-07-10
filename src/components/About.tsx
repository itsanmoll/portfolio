import React from "react";

const skills = [
  "Data Science", "NLP", "LLMs", "Generative AI", "Python", "Django", "Flask", "ReactJS", "Docker"
];

export default function About() {
  return (
    <section id="about" className="flex items-center justify-center py-16">
      <div className="card w-full max-w-2xl bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-200 mx-auto flex flex-col items-center gap-8 p-12 rounded-2xl">
        <h2 className="text-4xl font-bold text-primary mb-2 text-center">About Me</h2>
        <p className="text-lg text-base-content text-center max-w-xl">
          I’m Anmol Bhardwaj, a passionate LLM Engineer and Data Scientist with a strong background in NLP, Generative AI, and Data Science. I love building intelligent systems that solve real-world problems. Finalist in Smart India Hackathon and NASA SpaceApps Challenge. Always eager to learn, collaborate, and innovate in the AI space.
        </p>
        <div className="flex flex-wrap justify-center gap-2 mt-2">
          {skills.map((skill) => (
            <div key={skill} className="badge badge-primary badge-outline text-base px-4 py-2 rounded-full">
              {skill}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
