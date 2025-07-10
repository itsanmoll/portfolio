export default function Footer() {
  return (
    <footer className="bg-base-200 text-center py-6">
      <div className="space-x-4">
        <a href="https://github.com/yourname" className="link">GitHub</a>
        <a href="https://medium.com/..." className="link">Medium</a>
        <a href="https://linkedin.com/in/..." className="link">LinkedIn</a>
      </div>
      <p className="mt-4 text-sm text-gray-500">© {new Date().getFullYear()} Anmol.</p>
    </footer>
  );
}
