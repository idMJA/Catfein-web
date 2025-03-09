import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="container mx-auto px-16 py-24 border-t border-zinc-800 mt-32">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-20 mb-16">
          <div>
            <h3 className="text-2xl font-bold mb-8 text-gray-200">Catfein</h3>
            <p className="text-gray-500 text-lg">The Purr-fect Hosting Solutions.</p>
          </div>
          <div>
            <h4 className="font-semibold mb-8 text-gray-300 text-lg">Links</h4>
            <ul className="space-y-4">
              <li><Link href="/dashboard" className="text-gray-500 hover:text-gray-300 transition-colors text-base">Dashboard</Link></li>
              <li><Link href="/panel" className="text-gray-500 hover:text-gray-300 transition-colors text-base">Panel</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-8 text-gray-300 text-lg">Company</h4>
            <ul className="space-y-4">
              <li><Link href="/team" className="text-gray-500 hover:text-gray-300 transition-colors text-base">Teams</Link></li>
              <li><Link href="/pse" className="text-gray-500 hover:text-gray-300 transition-colors text-base">PSE</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-8 text-gray-300 text-lg">Legal</h4>
            <ul className="space-y-4">
              <li><Link href="/terms" className="text-gray-500 hover:text-gray-300 transition-colors text-base">Terms of Service</Link></li>
              <li><Link href="/privacy" className="text-gray-500 hover:text-gray-300 transition-colors text-base">Privacy Policy</Link></li>
              <li><Link href="/contact" className="text-gray-500 hover:text-gray-300 transition-colors text-base">Contact</Link></li>
            </ul>
          </div>
        </div>
        <div className="text-center text-gray-500 text-base">
          &copy; {`2023 - ${new Date().getFullYear()} Catfein.  All rights reserved.`}
        </div>
        <div className="text-center text-gray-500 text-base font-bold">
          015032.01/DJAI.PSE/08/2024
        </div>
      </div>
    </footer>
  );
} 