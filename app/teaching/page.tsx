import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Teaching — Yaniv Tenzer",
};

export default function Teaching() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Teaching</h1>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          2025/6
        </h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>Statistical Learning <span className="text-gray-400">— Fall</span></li>
          <li>Computational Statistics Seminar <span className="text-gray-400">— Spring</span></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          2023/4
        </h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>Convex Optimization <span className="text-gray-400">— Graduate · Department of Mathematics, Bar-Ilan University</span></li>
        </ul>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          2021/2
        </h2>
        <ul className="space-y-2 text-gray-700 text-sm">
          <li>Introduction to Statistical Inference and Learning <span className="text-gray-400">— Department of Computer Science and Applied Mathematics, Weizmann Institute of Science</span></li>
        </ul>
      </section>
    </div>
  );
}
