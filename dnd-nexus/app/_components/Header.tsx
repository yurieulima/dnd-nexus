 // src/components/Header.tsx
import React from 'react';

export const Header: React.FC = () => (
  <header className="container mx-auto px-4 bg-transparent">
    <div className="flex flex-col sm:flex-row justify-between items-center py-6">
      <a href="#" className="font-serif text-3xl font-bold text-primary">
        D&D Nexus
      </a>
      <nav className="flex space-x-6 mt-4 sm:mt-0">
        <a href="#" className="text-text-secondary hover:text-primary transition-colors">Classes</a>
        <a href="#" className="text-text-secondary hover:text-primary transition-colors">Raças</a>
        <a href="#" className="text-text-secondary hover:text-primary transition-colors">Magias</a>
        <a href="#" className="text-text-secondary hover:text-primary transition-colors">Monstros</a>
      </nav>
    </div>
  </header>
);