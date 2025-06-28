// src/components/QuickAccess.tsx
import React from 'react';
import { Card } from './ui/Card';

const accessItems = [
  { icon: <img src="/classes/classes-icon.png" alt="Classes" className="inline w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30" />, title: 'Classes', href: '/classes' },
  { icon: <img src="/races-icon.png" alt="Races" className="inline w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30" />, title: 'Races', href: '/races' },
  { icon: <img src="/scroll-icon.png" alt="Spells" className="inline w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30" />, title: 'Spells', href: '/spells' },
  { icon: <img src="/monster-icon.png" alt="Monsters" className="inline w-20 h-20 sm:w-24 sm:h-24 md:w-30 md:h-30" />, title: 'Monsters', href: '/monsters' },
];

export const QuickAccess: React.FC = () => (
  <section className="grid grid-cols-2 gap-4 sm:grid-cols-2 md:grid-cols-4 lg:flex lg:justify-between">
    {accessItems.map((item) => (
      <a href={item.href} key={item.title} className="group">
        <Card className="flex flex-col sm:flex-row items-center justify-center sm:justify-start p-4 transition-all duration-300 group-hover:-translate-y-2 hover:text-[#963d24]">
          <div className="mb-2 sm:mb-0 sm:mr-4 flex-shrink-0">{item.icon}</div>
          <h3 className="font-serif text-lg sm:text-xl md:text-2xl font-bold text-center sm:text-left">{item.title}</h3>
        </Card>
      </a>
    ))}
  </section>
);