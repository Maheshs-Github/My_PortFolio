import React from "react";

const navItems = [
  { label: "about.jsx", href: "#about" },
  { label: "experience.jsx", href: "#experience" },
  { label: "projects.jsx", href: "#projects" },
  { label: "education.jsx", href: "#education" },
  { label: "contact.jsx", href: "#contact" },
];

const Header = () => {
  return (
    <div className="fixed top-0 z-50 w-full bg-panel/95 backdrop-blur border-b border-term-border">
      <div className="flex items-center justify-between px-4 sm:px-8 py-3 font-mono">
        <a href="#" className="flex items-center gap-3">
          <div className="flex gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-primary-red/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/70"></span>
            <span className="w-2.5 h-2.5 rounded-full bg-secondary/70"></span>
          </div>
          <span className="text-term-muted text-xs sm:text-sm">
            mahesh<span className="text-tertiory">@</span>portfolio
            <span className="text-tertiory">:~$</span>
          </span>
        </a>
        <nav className="flex items-center gap-1 overflow-x-auto">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-xs sm:text-sm text-term-muted hover:text-tertiory px-2.5 sm:px-3 py-1.5 rounded-md border-b-2 border-transparent hover:border-tertiory transition-colors whitespace-nowrap"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Header;
