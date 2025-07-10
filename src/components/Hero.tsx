import React from "react";
import Image from "next/image";

export default function Hero() {
  return (
    <section id="hero" className="flex items-center justify-center min-h-[60vh] py-16 bg-gradient-to-br from-primary/10 via-base-100 to-secondary/10 rounded-xl">
      <div className="card w-full max-w-2xl bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-200 mx-auto flex flex-col md:flex-row items-center gap-10 p-12 rounded-2xl">
        <figure></figure>
          <Image
            src="https://randomuser.me/api/portraits/men/32.jpg"
            alt="Anmol Bhardwaj"
            width={144}
            height={144}
            className="rounded-full w-36 h-36 border-4 border-primary shadow-lg object-cover"/>
        
        <div className="card-body flex-1 text-center md:text-left flex flex-col items-center md:items-start justify-center gap-4">
          <h1 className="text-5xl font-extrabold text-primary mb-2">Anmol Bhardwaj</h1>
          <p className="text-2xl text-base-content font-semibold mb-2">LLM Engineer & Data Scientist</p>
          <p className="text-base text-base-content/80 mb-6 max-w-xl">Building AI solutions, NLP, and Generative AI. Finalist in SIH & NASA SpaceApps.</p>
          <a href="#contact" className="btn btn-primary btn-lg shadow-lg">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
