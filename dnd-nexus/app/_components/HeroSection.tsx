 // src/components/HeroSection.tsx
import React from 'react';

export const HeroSection: React.FC = () => (
  <section className="text-left py-16 sm:py-24">
    <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
      YOUR <br/> PORTAL <br/>TO D&D
    </h1>
    <p className="text-lg text-text-secondary mb-8 max-w-2xl">
      Explore a vast database of Dungeons & Dragons content, from spells and monsters to adventures and settings.
      <br/>
      <br/>
      Find everything you need to make your next D&D campaign unforgettable.
    </p>
  </section>
);