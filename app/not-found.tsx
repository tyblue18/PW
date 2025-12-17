import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4 bg-gradient-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent">
          404
        </h1>
        <p className="text-xl text-gray-400 mb-8">Project not found</p>
        <Link
          href="/#projects"
          className="px-6 py-3 bg-gradient-to-r from-teal-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-teal-700 hover:to-cyan-700 transition-all duration-300 inline-block"
        >
          Back to Projects
        </Link>
      </div>
    </div>
  );
}







