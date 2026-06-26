import { Link } from "react-router-dom";

const SiteFooter = () => {
  return (
    <footer className="border-t border-line bg-ink">
      <div className="mx-auto flex max-w-content flex-col items-start justify-between gap-6 px-6 py-10 sm:flex-row sm:items-center">
        <div>
          <div className="font-display font-semibold tracking-tight text-bone">
            Gaurav Godambe
          </div>
          <div className="mt-1 text-sm text-fog">
            Finance leadership + AI builds, end-to-end.
          </div>
        </div>
        <div className="flex flex-wrap gap-6 font-mono text-xs text-fog">
          <Link to="/portfolio" className="hover:text-bone">Portfolio</Link>
          <Link to="/services" className="hover:text-bone">Services</Link>
          <Link to="/about" className="hover:text-bone">About</Link>
          <Link to="/blog" className="hover:text-bone">Blog</Link>
          <Link to="/contact" className="hover:text-bone">Contact</Link>
          <a
            href="https://www.linkedin.com/in/gaurav-godambe-506b41b/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-bone"
          >
            LinkedIn
          </a>
        </div>
      </div>
      <div className="mx-auto max-w-content px-6 pb-8 font-mono text-[0.65rem] text-fog">
        © {new Date().getFullYear()} Gaurav Godambe. All rights reserved.
      </div>
    </footer>
  );
};

export default SiteFooter;
