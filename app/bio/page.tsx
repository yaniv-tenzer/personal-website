import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bio — Yaniv Tenzer",
};

export default function Bio() {
  return (
    <div className="space-y-4">
      <h1 className="text-2xl font-semibold text-gray-900">Bio</h1>
      <p className="text-gray-700 leading-relaxed">
        I am a PhD candidate in Computer Science at [University Name], advised
        by [Advisor Name]. My research focuses on [research area], with
        applications to [application domain]. I am broadly interested in the
        theoretical foundations and practical implications of [field].
      </p>
      <p className="text-gray-700 leading-relaxed">
        Before my PhD, I completed my B.Sc. in [field] at [institution]. I
        have interned at [lab/company] and collaborated with researchers at
        [institutions].
      </p>
    </div>
  );
}
