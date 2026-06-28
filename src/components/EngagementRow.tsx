import { ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";
import type { EngagementRowItem } from "@/data/engagements";

interface Props {
  item: EngagementRowItem;
}

const EngagementRow = ({ item }: Props) => {
  const { index, title, category, summary, impact, tech, href, externalHref } =
    item;

  const Wrapper = ({ children }: { children: React.ReactNode }) => {
    if (href) {
      return (
        <Link to={href} className="group block">
          {children}
        </Link>
      );
    }
    if (externalHref) {
      return (
        <a
          href={externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className="group block"
        >
          {children}
        </a>
      );
    }
    return <div className="block">{children}</div>;
  };

  const interactive = !!(href || externalHref);

  return (
    <Wrapper>
      <div className="grid grid-cols-1 gap-4 border-t border-line py-8 transition-colors md:grid-cols-[80px_1fr_auto] md:gap-10 md:py-10 group-hover:bg-surface/40">
        <div className="flex items-baseline gap-3 md:block">
          <p className="font-mono text-sm text-fog">{index}</p>
          <p className="eyebrow text-brand md:mt-2">{category}</p>
        </div>

        <div>
          <h3 className="font-display text-xl font-semibold tracking-tight text-bone md:text-2xl">
            {title}
          </h3>
          <p className="mt-2 text-base leading-relaxed text-fog">{summary}</p>
          <p className="mt-3 text-sm text-bone">
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-brand">
              Impact ·{" "}
            </span>
            {impact}
          </p>
          <p className="mt-3 font-mono text-[0.7rem] uppercase tracking-wider text-fog">
            {tech}
          </p>
        </div>

        {interactive && (
          <div className="flex items-start md:pt-2">
            <span className="inline-flex items-center gap-1 font-mono text-[0.7rem] uppercase tracking-wider text-brand transition-transform group-hover:translate-x-0.5">
              {href ? "View case study" : "Visit site"}
              <ArrowUpRight className="h-4 w-4" />
            </span>
          </div>
        )}
      </div>
    </Wrapper>
  );
};

export default EngagementRow;
