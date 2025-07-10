import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="flex items-center justify-center py-16">
      <div className="card w-full max-w-2xl bg-base-100/80 backdrop-blur-lg shadow-2xl border border-base-200 mx-auto flex flex-col md:flex-row items-center gap-10 p-12 rounded-2xl">
        <div className="flex-1 w-full">
          <h2 className="text-4xl font-bold text-primary mb-4">Contact</h2>
          <div className="mb-6 space-y-2">
            <div className="flex items-center gap-2">
              <span className="font-semibold">Email:</span>
              <a href="mailto:anmolbhardwaj.official@gmail.com" className="link link-primary">anmolbhardwajinv@gmail.com</a>
            </div>
            <div className="flex items-center gap-2">
              {/* <span className="font-semibold">Phone:</span> */}
              {/* <a href="tel:+918890689890" className="link link-primary">+91-8890689890</a> */}
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">Github:</span>
              <a href="https://github.com/itsannmoll" className="link link-primary" target="_blank" rel="noopener noreferrer">itsanmoll</a>
            </div>
            <div className="flex items-center gap-2">
              <span className="font-semibold">LinkedIn:</span>
              <a href="https://linkedin.com/in/itsanmoll" className="link link-primary" target="_blank" rel="noopener noreferrer">itsanmoll</a>
            </div>
          </div>
          <form className="space-y-4 mt-6">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              placeholder="Your Message"
              className="textarea textarea-bordered w-full"
              rows={4}
            />
            <button
              type="submit"
              className="btn btn-primary w-full"
            >
              Send Message
            </button>
          </form>
        </div>
        <figure>
          <img
            src="https://images.unsplash.com/photo-1465101046530-73398c7f28ca?auto=format&fit=crop&w=256&q=80"
            alt="Contact illustration"
            className="rounded-2xl w-64 h-64 object-cover shadow-lg hidden md:block"
          />
        </figure>
      </div>
    </section>
  );
}
