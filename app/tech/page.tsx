import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Tech — Yaniv Tenzer",
};

type Role = {
  company: string;
  logo: string;
  logoWidth: number;
  logoHeight: number;
  title: string;
  period: string;
  description: string;
  highlights: string[];
};

const roles: Role[] = [
  {
    company: "Meta",
    logo: "/logos/meta.svg",
    logoWidth: 120,
    logoHeight: 24,
    title: "Senior Quantitative Researcher",
    period: "2021 – 2024",
    description:
      "Developed and deployed statistical and machine learning methods to optimize advertising products at scale. Worked at the intersection of causal inference, experimentation, and large-scale optimization to improve advertiser outcomes across Meta's platforms.",
    highlights: [
      "Budget allocation optimization across advertising campaigns and channels",
      "Campaign performance modeling and optimization using large-scale behavioral data",
      "Design and analysis of A/B tests and sequential experimentation frameworks",
      "Life-Time-Value (LTV) prediction and optimization for advertiser bidding strategies",
      "Causal inference methods for measuring ad effectiveness",
    ],
  },
  {
    company: "Lightricks",
    logo: "/logos/lightricks-dark.svg",
    logoWidth: 120,
    logoHeight: 26,
    title: "Head of Growth Data Science",
    period: "2016 – 2021",
    description:
      "Led the Growth Data Science team, building the data-driven infrastructure and modeling capabilities behind Lightricks' user acquisition and monetization strategy. Translated statistical methodology into actionable growth levers for a fast-scaling consumer app company.",
    highlights: [
      "Life-Time-Value (LTV) modeling to guide user acquisition investment decisions",
      "Budget allocation optimization across paid marketing channels (iOS, Android, social, search)",
      "End-to-end A/B testing platform design, including sequential testing and early-stopping procedures",
      "Campaign optimization models for improving ROAS across acquisition funnels",
      "Churn prediction and retention modeling to inform subscription pricing and product decisions",
      "Built and mentored the growth data science function from the ground up",
    ],
  },
  {
    company: "General Electric",
    logo: "/logos/ge.svg",
    logoWidth: 40,
    logoHeight: 40,
    title: "Researcher",
    period: "2010 – 2012",
    description:
      "Applied statistical and mathematical modeling to industrial problems, including work on adaptive imaging acquisition methods.",
    highlights: [],
  },
];

export default function Tech() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">
          Industry Experience
        </h1>
        <p className="text-gray-600 leading-relaxed max-w-2xl">
          Alongside my academic career, I have worked in industry on
          data-driven growth and optimization problems. My industry work
          centers on applying rigorous statistical and machine learning methods
          to real-world business challenges — from Life-Time-Value modeling and
          budget allocation to large-scale A/B testing and campaign
          optimization.
        </p>
      </section>

      <section className="space-y-10">
        {roles.map((role) => (
          <div key={role.company} className="space-y-3">
            <div className="border-b border-gray-100 pb-3">
              <div className="flex items-center justify-between flex-wrap gap-2">
                <Image
                  src={role.logo}
                  alt={role.company}
                  width={role.logoWidth}
                  height={role.logoHeight}
                  className="object-contain"
                  style={{ maxHeight: "36px", width: "auto" }}
                />
                <span className="text-sm text-gray-400">{role.period}</span>
              </div>
              <p className="text-sm text-gray-500 mt-2">{role.title}</p>
            </div>
            <p className="text-gray-600 leading-relaxed text-sm">
              {role.description}
            </p>
            {role.highlights.length > 0 && (
              <ul className="space-y-1.5">
                {role.highlights.map((h) => (
                  <li
                    key={h}
                    className="text-sm text-gray-600 flex gap-2"
                  >
                    <span className="text-gray-300 select-none">–</span>
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Areas of Expertise
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">
          {[
            "Life-Time-Value (LTV) Optimization",
            "Budget Allocation & Bid Optimization",
            "A/B Testing & Sequential Experimentation",
            "Campaign Performance Modeling",
            "Causal Inference & Uplift Modeling",
            "Churn & Retention Modeling",
            "User Acquisition Analytics",
            "Large-Scale Statistical Inference",
          ].map((area) => (
            <div key={area} className="flex gap-2 text-sm text-gray-600">
              <span className="text-gray-300 select-none">–</span>
              <span>{area}</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
