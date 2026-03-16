export default function Footer() {
  return (
    <footer className="border-t border-gray-100 px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
      <p>© {new Date().getFullYear()} Yaniv Tenzer</p>
      <a
        href="mailto:yanivt@technion.ac.il"
        className="hover:text-gray-600 transition-colors"
      >
        yanivt@technion.ac.il
      </a>
    </footer>
  );
}
