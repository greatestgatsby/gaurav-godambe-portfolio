import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const links = [
  { name: "Work", to: "/portfolio" },
  { name: "Services", to: "/services" },
  { name: "About", to: "/about" },
  { name: "Blog", to: "/blog" },
];

const SiteNav = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-300",
        scrolled || pathname !== "/"
          ? "bg-ink/85 backdrop-blur-md border-b border-line"
          : "bg-transparent"
      )}
    >
      <nav className="mx-auto flex max-w-content items-center justify-between px-6 py-4">
        <Link
          to="/"
          className="font-display text-[0.95rem] font-semibold tracking-tight text-bone"
        >
          Gaurav&nbsp;Godambe
        </Link>

        <div className="hidden items-center gap-8 text-sm text-fog md:flex">
          {links.map((l) => (
            <Link
              key={l.to}
              to={l.to}
              className={cn(
                "transition-colors hover:text-bone",
                pathname.startsWith(l.to) && "text-bone"
              )}
            >
              {l.name}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <Link
            to="/contact"
            className="hidden rounded-full bg-brand px-4 py-2 text-sm font-medium text-ink transition-transform hover:-translate-y-0.5 md:inline-block"
          >
            Book a call
          </Link>
          <button
            className="md:hidden text-bone"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </nav>

      {open && (
        <div className="md:hidden border-t border-line bg-ink/95 backdrop-blur-md">
          <div className="mx-auto flex max-w-content flex-col gap-4 px-6 py-6 text-sm">
            {links.map((l) => (
              <Link key={l.to} to={l.to} className="text-fog hover:text-bone">
                {l.name}
              </Link>
            ))}
            <Link
              to="/contact"
              className="mt-2 inline-block rounded-full bg-brand px-4 py-2 text-center text-sm font-medium text-ink"
            >
              Book a call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteNav;
