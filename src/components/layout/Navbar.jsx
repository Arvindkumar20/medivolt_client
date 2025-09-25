import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Brain, Menu, X, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { useAuth } from "../../contexts/AuthContext";

export default function Navbar() {
  const { isAuthenticated, user, logout } = useAuth();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isFeaturesDropdownOpen, setIsFeaturesDropdownOpen] = useState(false);

  const handleLogout = async () => {
    await logout();
  };

  const aiFeatures = [
    { name: "Report Analysis", path: "/report-explainer", icon: "📊" },
    { name: "AI Medicine Information", path: "/medicine-info", icon: "💊" },
    { name: "Health Intelligence", path: "/dashboard", icon: "📈" },
    { name: "Symptom Assessment", path: "/symptom-checker", icon: "🔍" },
    {
      name: "Nutrition Intelligence",
      path: "/nutrition-calculator",
      icon: "🥗",
    },
    { name: "Healthcare Navigator", path: "/govt-schemes", icon: "🏛️" },
  ];

  return (
    <header className="bg-black border-b border-gray-800 sticky top-0 z-50">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 md:px-8">
        {/* Logo - Left Side */}
        <Link className="flex items-center gap-3" to="/">
          <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
            <Brain className="h-5 w-5 text-white" />
          </div>
          <span className="text-xl font-bold text-white">
            MediVolt
          </span>
        </Link>

        {/* Navigation Links - Center */}
        <nav className="hidden lg:flex items-center gap-8">
          <Link
            className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            to="/"
          >
            Home
          </Link>

          {/* Healthcare Intelligence Menu */}
          <div
            className="relative"
            onMouseEnter={() => setIsFeaturesDropdownOpen(true)}
            onMouseLeave={() => setIsFeaturesDropdownOpen(false)}
          >
            <button className="flex items-center gap-1 text-gray-300 hover:text-white transition-colors font-medium text-sm">
              About
              <ChevronDown className="h-3 w-3" />
            </button>

            {isFeaturesDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-64 bg-gray-900 border border-gray-700 rounded-lg shadow-xl py-2">
                {aiFeatures.map((feature, index) => (
                  <Link
                    key={index}
                    to={feature.path}
                    className="flex items-center gap-3 px-4 py-3 text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors"
                  >
                    <span className="text-base">{feature.icon}</span>
                    {feature.name}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link
            className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            to="/pricing"
          >
            Pricing
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            to="/emergency-sos"
          >
            Emergency
          </Link>
          <Link
            className="text-gray-300 hover:text-white transition-colors font-medium text-sm"
            to="/registration"
          >
            Register
          </Link>
          <Link
            className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-4 py-2 rounded-lg hover:from-purple-500 hover:to-purple-600 transition-all duration-300 font-medium text-sm shadow-lg hover:shadow-purple-500/25"
            to="/hire-doctors"
          >
            👨‍⚕️ Hire Doctors & Nurses
          </Link>
        </nav>

        {/* Right Side - Get In Touch Button */}
        <div className="flex items-center gap-4">
          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 text-gray-300 hover:text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
          </button>

          {/* Get In Touch Button - Nubien Style */}
          <Button
            size="sm"
            className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full font-medium text-sm transition-all duration-300 shadow-lg hover:shadow-xl"
            asChild
          >
            <Link to="/dashboard">Get In Touch</Link>
          </Button>

          {isAuthenticated && (
            <div className="hidden md:flex items-center gap-2">
              <span className="text-sm text-gray-300">
                {user?.name || user?.email}
              </span>
              <Button variant="ghost" size="sm" onClick={handleLogout} className="text-gray-300 hover:text-white">
                Logout
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-gray-900 border-t border-gray-700">
          <div className="px-6 py-4 space-y-4">
            <Link
              className="block text-gray-300 hover:text-white transition-colors font-medium"
              to="/"
            >
              Home
            </Link>
            <Link
              className="block text-gray-300 hover:text-white transition-colors font-medium"
              to="/pricing"
            >
              Portfolio
            </Link>
            <Link
              className="block text-gray-300 hover:text-white transition-colors font-medium"
              to="/emergency-sos"
            >
              Contact
            </Link>
            <Link
              className="block text-gray-300 hover:text-white transition-colors font-medium"
              to="/registration"
            >
              Register
            </Link>
            
            {/* Mobile AI Features */}
            <div className="border-t border-gray-700 pt-4">
              <p className="text-gray-400 text-xs uppercase tracking-wider mb-3">AI Features</p>
              {aiFeatures.map((feature, index) => (
                <Link
                  key={index}
                  to={feature.path}
                  className="flex items-center gap-3 py-2 text-gray-300 hover:text-white transition-colors"
                >
                  <span>{feature.icon}</span>
                  <span className="text-sm">{feature.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile Get In Touch */}
            <div className="pt-4">
              <Button
                className="w-full bg-primary hover:bg-primary/90 text-white rounded-full font-medium"
                asChild
              >
                <Link to="/dashboard">Get In Touch</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
