function App() {
  return (
    <div className="min-h-screen bg-green-50">

      {/* Navbar */}
      <nav className="flex items-center justify-between px-8 py-5">
        <h1 className="text-2xl font-bold text-green-800">
          🌱 EcoFabric Hub
        </h1>

        <div className="flex gap-6 text-gray-700">
          <a href="#">Home</a>
          <a href="#">How It Works</a>
          <a href="#">About</a>
          <button className="rounded-lg bg-green-700 px-5 py-2 text-white">
            Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex min-h-[80vh] items-center justify-center px-8">
        <div className="max-w-3xl text-center">

          <p className="mb-4 font-semibold text-green-700">
            ♻️ Give your clothes a second life
          </p>

          <h2 className="text-5xl font-bold leading-tight text-gray-900">
            Turn Textile Waste Into
            <span className="text-green-700"> Sustainable Impact</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            EcoFabric Hub uses AI to understand your unused clothes and
            recommend the best option — Sell, Donate, Recycle or Redesign.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <button className="rounded-xl bg-green-700 px-7 py-3 font-semibold text-white hover:bg-green-800">
              Get Started
            </button>

            <button className="rounded-xl border border-green-700 px-7 py-3 font-semibold text-green-700 hover:bg-green-100">
              How It Works
            </button>
          </div>

        </div>
      </section>

    </div>
  );
}

export default App;