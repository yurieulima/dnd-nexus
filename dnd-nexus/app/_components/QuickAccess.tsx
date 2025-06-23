 // src/components/QuickAccess.tsx
import React from 'react';
import { Card } from './ui/Card';

const accessItems = [
  { icon: '⚔️', title: 'Classes' },
  { icon: '🛡️', title: 'Raças' },
  { icon: '📜', title: 'Magias' },
  { icon: '🐉', title: 'Monstros' },
];

export const QuickAccess: React.FC = () => (
  <section className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6">
    {accessItems.map((item) => (
      <a href="#" key={item.title} className="group">
        <Card className="text-center transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl group-hover:shadow-primary/10">
          <div className="text-5xl mb-2">{item.icon}</div>
          <h3 className="font-serif text-xl font-bold">{item.title}</h3>
        </Card>
      </a>
    ))}
  </section>
);