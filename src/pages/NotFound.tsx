import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import SiteNav from "@/components/SiteNav";
import SiteFooter from "@/components/SiteFooter";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col bg-ink text-bone">
      <SiteNav />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-6">
          <p className="eyebrow mb-4">404</p>
          <h1 className="font-display text-4xl md:text-5xl font-semibold tracking-tight text-bone mb-4">
            Page not found
          </h1>
          <p className="text-fog mb-8">The page you're looking for doesn't exist.</p>
          <a
            href="/"
            className="inline-block rounded-full bg-brand px-6 py-3 text-sm font-medium text-ink hover:-translate-y-0.5 transition-transform"
          >
            Return home
          </a>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
