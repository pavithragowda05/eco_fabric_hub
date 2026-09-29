
import { Link } from "react-router-dom"
import HowItWorks from "../components/HowItWorks";

function Home() {
  return (
    <main className="bg-[#f8faf5] text-gray-800">

      {/* Hero Section */}
      <section className="min-h-[80vh] flex items-center px-6 md:px-16 py-16">

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

          <div>
            <span className="inline-block bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              Sustainable Fashion • Circular Future
            </span>

            <h1 className="text-4xl md:text-6xl font-bold leading-tight text-gray-900">
              Give Your Clothes
              <span className="text-green-700"> A Second Life.</span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 leading-relaxed max-w-xl">
              Turn unwanted clothing into meaningful opportunities.
              Donate, sell, or redesign your clothes with the help
              of AI-powered recommendations.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">

              <Link
                to="/signup"
                className="bg-green-700 text-white px-7 py-3 rounded-xl font-medium hover:bg-green-800 transition"
              >
                Get Started →
              </Link>

              <a
                href="#how-it-works"
                className="border border-green-700 text-green-800 px-7 py-3 rounded-xl font-medium hover:bg-green-50 transition"
              >
                How It Works
              </a>

            </div>

            <p className="mt-6 text-sm text-gray-500">
              ♻️ Reduce textile waste • Support communities • Encourage creativity
            </p>
          </div>

          {/* Hero visual placeholder */}
          <div className="bg-green-100 rounded-3xl min-h-[320px] md:min-h-[440px] flex items-center justify-center p-8">
            <div className="text-center">
              <div className="text-8xl mb-5">👕</div>
              <h2 className="text-2xl font-semibold text-green-900">
                Fashion With Purpose
              </h2>
              <p className="text-green-800 mt-2">
                Every garment deserves another opportunity.
              </p>
            </div>
          </div>

        </div>
      </section>

      <HowItWorks />

      {/* About section */}
      <section className="bg-green-900 text-white py-16 px-6 md:px-16">

        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold">
            Fashion Shouldn't End in a Landfill.
          </h2>

          <p className="text-green-100 mt-5 leading-relaxed max-w-3xl mx-auto">
            EcoFabric Hub aims to encourage circular fashion by
            connecting clothing owners, NGOs, and designers through
            a technology-enabled platform.
          </p>

          <Link
            to="/about"
            className="inline-block mt-8 bg-white text-green-900 px-7 py-3 rounded-xl font-semibold hover:bg-green-50 transition"
          >
            Learn More About Us
          </Link>
        </div>

      </section>

      {/* Footer */}
      <footer className="bg-gray-950 text-gray-300 py-8 px-6 text-center">
        <h3 className="text-xl font-semibold text-white">
          🌱 EcoFabric Hub
        </h3>

        <p className="mt-2 text-sm">
          Give your clothes a second life.
        </p>

        <p className="mt-5 text-xs text-gray-500">
          © 2026 EcoFabric Hub. Building a more sustainable future.
        </p>
      </footer>

    </main>
  )
}

export default Home