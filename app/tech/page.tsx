import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tech — Yaniv Tenzer",
};

export default function Tech() {
  return (
    <div className="space-y-12">
      <section>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Tech</h1>
      </section>
    </div>
  );
}
