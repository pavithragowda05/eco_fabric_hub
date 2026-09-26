import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="flex items-center justify-between px-8 py-5 bg-white shadow-sm">

      {/* Logo */}
      <Link to="/" className="text-2xl font-bold text-green-700">
        🌱 EcoFabric Hub
      </Link>

      {/* Navigation links */}
      <div className="flex items-center gap-8 text-gray-700">

        <Link to="/" className="hover:text-green-700">
          Home
        </Link>

        <Link to="/about" className="hover:text-green-700">
          About
        </Link>

        <Link to="/login" className="hover:text-green-700">
          Login
        </Link>

        <Link
          to="/signup"
          className="bg-green-700 text-white px-5 py-2 rounded-lg hover:bg-green-800"
        >
          Get Started
        </Link>

      </div>
    </nav>
  )
}

export default Navbar