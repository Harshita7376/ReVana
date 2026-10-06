import { useState } from "react";
import { ArrowUpRight, House, Menu, X } from "lucide-react";

const navigation = [
  { label: "Home", href: "#home" },
  { label: "AI Design", href: "#ai-design" },
  { label: "Renovation Teams", href: "#renovation-teams" },
  { label: "Projects", href: "#projects" },
  { label: "How It Works", href: "#how-it-works" },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 z-50 border-b border-stone-200/80 bg-[#faf9f6]/90 backdrop-blur-lg">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 sm:px-8 lg:px-12"
      >
        <a
          href="#home"
          onClick={closeMenu}
          className="flex shrink-0 items-center gap-2.5 text-[#292823]"
          aria-label="Renova AI home"
        >
          <span className="flex size-9 items-center justify-center rounded-xl bg-[#9b5945] text-white">
            <House size={19} strokeWidth={1.8} aria-hidden="true" />
          </span>
          <span className="text-lg font-semibold tracking-tight">Renova AI</span>
        </a>

        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="text-sm font-medium text-stone-600 transition-colors hover:text-[#9b5945]"
            >
              {item.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-5 lg:flex">
          <a
            href="#log-in"
            className="text-sm font-semibold text-stone-700 transition-colors hover:text-[#9b5945]"
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 rounded-full bg-[#292823] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9b5945] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5945]"
          >
            Get Started
            <ArrowUpRight size={15} aria-hidden="true" />
          </a>
        </div>

        <button
          type="button"
          aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((open) => !open)}
          className="flex size-10 items-center justify-center rounded-full border border-stone-200 text-[#292823] transition-colors hover:bg-stone-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#9b5945] lg:hidden"
        >
          {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div id="mobile-navigation" className="border-t border-stone-200 bg-[#faf9f6] px-5 py-4 lg:hidden">
          <div className="mx-auto flex max-w-7xl flex-col">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={closeMenu}
                className="border-b border-stone-200/80 py-3.5 text-sm font-medium text-stone-700 transition-colors hover:text-[#9b5945]"
              >
                {item.label}
              </a>
            ))}
            <div className="flex items-center gap-5 pt-4">
              <a
                href="#log-in"
                onClick={closeMenu}
                className="text-sm font-semibold text-stone-700"
              >
                Log In
              </a>
              <a
                href="#get-started"
                onClick={closeMenu}
                className="inline-flex items-center gap-2 rounded-full bg-[#292823] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#9b5945]"
              >
                Get Started
                <ArrowUpRight size={15} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;