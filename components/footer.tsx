"use client";

export function Footer() {
  return (
    <footer className="bg-gray-footer text-white py-8">
      <div className="max-w-4xl mx-auto px-4 text-center">
        {/* Back to Top */}
        <div className="mb-6">
          <a
            href="#"
            className="text-sm text-gray-400 hover:text-white transition-colors"
          >
            Back to Top
          </a>
        </div>

        {/* Navigation Links */}
        <nav className="flex justify-center items-center space-x-8">
          <a
            href="https://www.bitcoinassociation.ch/privacy"
            className="footer-link text-gray-300 hover:text-white transition-colors"
          >
            Privacy Policy
          </a>
          <a
            href="https://www.bitcoinassociation.ch/terms"
            className="footer-link text-gray-300 hover:text-white transition-colors"
          >
            Terms and Conditions
          </a>
        </nav>
      </div>
    </footer>
  );
}