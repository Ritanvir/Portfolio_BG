import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-16 text-center text-sm text-gray-600">
      {/* Logo */}
      <div className="text-4xl font-bold mb-6">
        <span className="text-black">Grid</span>
        <span className="text-blue-600">X</span>
      </div>

      {/* Navigation Links */}
      <div className="flex justify-center space-x-8 mb-6 text-xs tracking-widest">
        <Link href="/" className="hover:text-blue-600 transition">
          HOME
        </Link>
        <Link href="/about" className="hover:text-blue-600 transition">
          ABOUT
        </Link>
        <Link href="/works" className="hover:text-blue-600 transition">
          WORKS
        </Link>
        <Link href="/contact" className="hover:text-blue-600 transition">
          CONTACT
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-xs text-gray-500">
        © All rights reserved by{" "}
        <a
          href="https://wordpressriver.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          WordPressRiver
        </a>
      </p>
    </footer>
  );
}
