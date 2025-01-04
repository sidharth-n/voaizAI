import React, { useState, useEffect } from "react"
import { Menu, X } from "lucide-react"
import { useNavigate } from "react-router-dom"

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-200 ${
        isScrolled ? "bg-white shadow-md py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="flex items-center justify-between">
          <button onClick={() => navigate("/")} className="h-8">
            <img
              src="/voaiz_logo_black.png"
              alt="Voaiz.ai Logo"
              className="h-full"
            />
          </button>

          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("features")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="text-slate-600 hover:text-blue-600 transition-colors"
            >
              Impact
            </button>
            <button
              onClick={() => navigate("/demo")}
              className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
            >
              Try Demo
            </button>
          </nav>

          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <nav className="flex flex-col p-4">
            <button
              onClick={() => scrollToSection("features")}
              className="py-2 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("impact")}
              className="py-2 text-slate-600 hover:text-blue-600 transition-colors text-left"
            >
              Impact
            </button>
            <button
              onClick={() => {
                navigate("/demo")
                setIsMenuOpen(false)
              }}
              className="mt-2 px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors text-center"
            >
              Try Demo
            </button>
          </nav>
        </div>
      )}
    </header>
  )
}
