import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact — Yaniv Tenzer",
};

export default function Contact() {
  return (
    <div className="space-y-10">
      <section>
        <h1 className="text-2xl font-semibold text-gray-900 mb-4">Contact</h1>
        <p className="text-gray-700 leading-relaxed max-w-xl">
          I am happy to discuss research, potential collaborations, or answer
          questions about my work. The best way to reach me is by email.
        </p>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Get in Touch
        </h2>
        <div className="space-y-3 text-sm text-gray-700">
          <div className="flex gap-4">
            <span className="w-20 text-gray-400 shrink-0">Email</span>
            <a
              href="mailto:yanivt@technion.ac.il"
              className="text-blue-600 hover:underline"
            >
              yanivt@technion.ac.il
            </a>
          </div>
        </div>
      </section>

      <section className="space-y-4">
        <h2 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-2">
          Online Profiles
        </h2>
        <div className="space-y-3 text-sm text-gray-700">
<div className="flex gap-4">
            <span className="w-20 text-gray-400 shrink-0">GitHub</span>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              github.com/yanivtenzer
            </a>
          </div>
<div className="flex gap-4">
            <span className="w-20 text-gray-400 shrink-0">LinkedIn</span>
            <a
              href="https://www.linkedin.com/in/yaniv-tenzer-3617a225/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 hover:underline"
            >
              linkedin.com/in/yanivtenzer
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
