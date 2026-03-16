import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Research — Yaniv Tenzer",
};

type Publication = {
  title: string;
  authors: string;
  venue: string;
  year: number;
};

type Preprint = {
  title: string;
  authors: string;
};

const publications: Publication[] = [
  {
    title: "Crowdsourcing Regression: A Spectral Approach",
    authors: "Y. Tenzer, O. Dror, B. Nadler, E. Bilal, Y. Kluger",
    venue: "Proceedings of Machine Learning Research (PMLR)",
    year: 2022,
  },
  {
    title: "Testing Independence under Biased-Sampling",
    authors: "Y. Tenzer, M. Mandel, O. Zuk",
    venue: "Journal of the American Statistical Association",
    year: 2022,
  },
  {
    title: "Beyond Trees: Classification with Sparse Pairwise Dependencies",
    authors: "Y. Tenzer, A. Moscovich, C. Spiegelman, B. Nadler",
    venue: "Journal of Machine Learning",
    year: 2020,
  },
  {
    title:
      "Discovering non-Gaussian Hidden Variables – The Generalized Ideal Parent Approach",
    authors: "Y. Tenzer, I. Slovetchik, A. Wiesel, G. Elidan",
    venue:
      "International Conference on Artificial Intelligence and Statistics (AISTATS)",
    year: 2016,
  },
  {
    title: "Constraints Based Convex Belief Propagation",
    authors: "Y. Tenzer, K. Gimpel, T. Hazan",
    venue:
      "International Conference on Neural Information Processing Systems (NIPS)",
    year: 2016,
  },
  {
    title: "Efficient Learning of Copula Bayesian Networks",
    authors: "Y. Tenzer, G. Elidan",
    venue: "International Joint Statistical Meeting (JSM)",
    year: 2014,
  },
  {
    title: "HELM: Highly Efficient Learning of Mixed Copula Networks",
    authors: "Y. Tenzer, G. Elidan",
    venue:
      "International Conference on Uncertainty in Artificial Intelligence (UAI)",
    year: 2014,
  },
  {
    title: "Speedy Model Selection (SMS) for Copula Models",
    authors: "Y. Tenzer, G. Elidan",
    venue:
      "International Conference on Uncertainty in Artificial Intelligence (UAI)",
    year: 2013,
  },
  {
    title:
      "A Mathematical Model for Extremely Low Dose Adaptive Computed Tomography Acquisition",
    authors: "Y. Tenzer, O. Barkan, A. Averbuch, S. Dekel",
    venue: "Mathematical Models for Curves and Surfaces (MMCS)",
    year: 2012,
  },
];

const preprints: Preprint[] = [
  {
    title: "Betting on Predictions",
    authors: "Y. Tenzer, E. Tolochinsky, Y. Romano",
  },
  {
    title: "Measures of Dependence are Monotonic in One Another",
    authors: "Y. Tenzer, G. Elidan",
  },
];

const sorted = [...publications].sort((a, b) => b.year - a.year);

export default function Research() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold text-gray-900 mb-2">
          Publications
        </h1>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Journal &amp; Conference Papers
        </h2>
        <div className="space-y-6">
          {sorted.map((pub) => (
            <div key={pub.title} className="space-y-0.5">
              <h3 className="font-medium text-gray-900 leading-snug">
                {pub.title}
              </h3>
              <p className="text-sm text-gray-600">{pub.authors}</p>
              <p className="text-sm text-gray-500 italic">
                {pub.venue}, {pub.year}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="space-y-6">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Preprints
        </h2>
        <div className="space-y-6">
          {preprints.map((p) => (
            <div key={p.title} className="space-y-0.5">
              <h3 className="font-medium text-gray-900 leading-snug">
                {p.title}
              </h3>
              <p className="text-sm text-gray-600">{p.authors}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
