export default function Hero() {
  return (
    <section className="hero min-h-[70vh] bg-base-200 flex flex-col lg:flex-row items-center px-8">
      <img src="/your-photo.jpg" alt="Anmol" className="rounded-full w-48 h-48 mb-6 lg:mb-0 lg:mr-12" />
      <div>
        <h1 className="text-5xl font-bold">Hi, I’m Anmol</h1>
        <p className="text-xl mt-2">Full Stack Developer specializing in Next.js and Python</p>
      </div>
    </section>
  );
}
