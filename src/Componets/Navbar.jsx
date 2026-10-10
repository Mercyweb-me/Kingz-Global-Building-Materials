import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full bg-white">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        
        {/* Logo */}
       <Link
  to="/"
  className="group flex shrink-0 items-center"
  aria-label="Kingz Global Building Materials"
>
  <span className="text-2xl font-black tracking-[-0.04em] text-green-700 transition-all duration-300 group-hover:text-green-800">
    KINGZ<span className="text-green-900">GLOB</span>
  </span>
</Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          <Link to="/" className="text-sm font-medium text-gray-800 hover:text-green-700">
            Home
          </Link>

          <Link to="/about" className="text-sm font-medium text-gray-800 hover:text-green-700">
            About
          </Link>

          <Link to="/products" className="text-sm font-medium text-gray-800 hover:text-green-700">
            Products
          </Link>

          <Link to="/contact" className="text-sm font-medium text-gray-800 hover:text-green-700">
            Contact
          </Link>

          <Link
            to="/contact"
            className="rounded-full bg-green-700 px-5 py-3 text-sm font-semibold text-white transition hover:bg-green-800"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg p-2 text-gray-800 transition hover:bg-gray-100 md:hidden"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-gray-100 bg-white transition-all duration-300 md:hidden ${
          isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="flex flex-col px-6 py-5">
          <Link
            to="/"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 py-4 font-medium text-gray-800"
          >
            Home
          </Link>

          <Link
            to="/about"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 py-4 font-medium text-gray-800"
          >
            About
          </Link>

          <Link
            to="/products"
            onClick={() => setIsOpen(false)}
            className="border-b border-gray-100 py-4 font-medium text-gray-800"
          >
            Products
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="py-4 font-medium text-gray-800"
          >
            Contact
          </Link>

          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="mt-3 rounded-full bg-green-700 px-5 py-3 text-center font-semibold text-white transition hover:bg-green-800"
          >
            Get a Quote
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Navbar
