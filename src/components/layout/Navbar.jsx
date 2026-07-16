import React, { useState } from "react";
import logo from "../../assets/images/logo.jpg";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b bg-white/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto h-20 px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-10 rounded-lg object-cover"
          />
          <h1 className="text-xl font-bold">ProjectCamp</h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <ul className="flex items-center gap-8 text-sm font-medium text-gray-600">
            <li className="hover:text-violet-600 cursor-pointer">Features</li>
            <li className="hover:text-violet-600 cursor-pointer">About</li>
            <li className="hover:text-violet-600 cursor-pointer">Contact</li>
          </ul>

          <div className="flex items-center gap-3">
            <Button variant="ghost">Login</Button>
            <Button>Get Started</Button>
          </div>
        </nav>

        {/* Mobile Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden border-t bg-white">
          <div className="flex flex-col px-6 py-5 space-y-4">
            <a href="#" className="hover:text-violet-600">Features</a>
            <a href="#" className="hover:text-violet-600">About</a>
            <a href="#" className="hover:text-violet-600">Contact</a>

            <Button variant="outline" className="w-full">
              Login
            </Button>

            <Button className="w-full">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;