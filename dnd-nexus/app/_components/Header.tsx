 // src/components/Header.tsx
import React from 'react';

export const Header: React.FC = () => (
  <header className="container mx-auto px-4 bg-transparent">
    <div className="flex flex-col sm:flex-row justify-start items-center">
      <img src="/logo-fantasy.png" alt="D&D Logo" className="inline w-50 h-40" />
    </div>
  </header>
);