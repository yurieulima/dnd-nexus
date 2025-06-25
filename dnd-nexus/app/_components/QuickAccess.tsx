// src/components/QuickAccess.tsx
import React from 'react';
import { Card } from './ui/Card';

const accessItems = [
  { icon: <img src="/classes-icon.png" alt="Classes" className="inline w-30 h-30" />, title: 'Classes' },
  { icon: <img src="/races-icon.png" alt="Races" className="inline w-30 h-30" />, title: 'Races' },
  { icon: <img src="/scroll-icon.png" alt="Spells" className="inline w-30 h-30" />, title: 'Spells' },
  { icon: <img src="/monster-icon.png" alt="Monsters" className="inline w-30 h-30" />, title: 'Monsters' },
];

export const QuickAccess: React.FC = () => (
  <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
    {accessItems.map((item) => (
      <a href="#" key={item.title} className="group">
        <Card className="flex items-center transition-all duration-300 group-hover:-translate-y-2 p-4 hover:text-[#963d24]">
          <div className="mr-4 flex-shrink-0">{item.icon}</div>
          <h3 className="font-serif text-2xl font-bold">{item.title}</h3>
        </Card>
      </a>
    ))}
  </section>
);