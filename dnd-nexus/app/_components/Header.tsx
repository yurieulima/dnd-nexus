 // src/components/Header.tsx
import Link from 'next/link';
import React from 'react';

export const Header: React.FC = () => (
  <header className="container mx-auto px-4 py-4 bg-transparent">
    <div className="flex flex-col sm:flex-row justify-between items-center">
      <Link href="/">
        <img src="/logo-fantasy.png" alt="D&D Logo" className="inline w-50 h-40" />
      </Link>
      <p className="text-text-secondary">
           Data provided by <a href="https://5e-bits.github.io/docs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">5e-bits API</a>.
      </p>
    </div>

  </header>
);