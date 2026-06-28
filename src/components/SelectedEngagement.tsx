import { motion } from "framer-motion";
import { Check, Minus } from "lucide-react";
import type { Engagement } from "@/data/engagements";

interface Props {
  engagement: Engagement;
}

const Label = ({ children }: { children: React.ReactNode }) => (
  <p className="eyebrow text-fog md:sticky md:top-28">{children}</p>
);

const Block = ({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) => (
  <div className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-[160px_1fr] md:gap-12 md:py-10">
    <Label>{label}</Label>
    <div className="text-bone">{children}</div>
  </div>
);

const SelectedEngagement = ({ engagement }: Props) => {
  const {
    index,
    title,
    industry,
    challengeLead,
    challenge,
    solutionLead,
    solution,
    impact,
    technology,
  } = engagement;

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6 }}
      className="border-t border-line py-16 first:border-t-0 first:pt-8 md:py-24"
    >
      <div className="mx-auto max-w-content px-6">
        <div className="mb-10 md:mb-14">
          <p className="eyebrow text-brand">Case Study {index}</p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-bone md:text-5xl">
            {title}
          </h2>
        </div>

        <Block label="Industry">
          <p className="text-base md:text-lg">{industry}</p>
        </Block>

        <Block label="Challenge">
          {challengeLead && (
            <p className="mb-4 text-base leading-relaxed text-fog md:text-lg">
              {challengeLead}
            </p>
          )}
          {challenge.length > 0 && (
            <ul className="space-y-3">
              {challenge.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Minus className="mt-1.5 h-4 w-4 shrink-0 text-brand" />
                  <span className="text-base text-bone md:text-lg">{item}</span>
                </li>
              ))}
            </ul>
          )}
        </Block>

        <Block label="Solution">
          {solutionLead && (
            <p className="mb-4 text-base leading-relaxed text-fog md:text-lg">
              {solutionLead}
            </p>
          )}
          <ul className="space-y-3">
            {solution.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-base text-bone md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Business Impact">
          <ul className="space-y-3">
            {impact.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1.5 h-4 w-4 shrink-0 text-brand" />
                <span className="text-base text-bone md:text-lg">{item}</span>
              </li>
            ))}
          </ul>
        </Block>

        <Block label="Technology">
          <div className="flex flex-wrap gap-2">
            {technology.map((t) => (
              <span
                key={t}
                className="rounded-full border border-line bg-surface px-3 py-1 font-mono text-[0.65rem] uppercase tracking-wider text-fog"
              >
                {t}
              </span>
            ))}
          </div>
        </Block>
      </div>
    </motion.article>
  );
};

export default SelectedEngagement;
