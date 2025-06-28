import React from 'react';
import Link from 'next/link';
import { Card } from './ui/Card';
import { Class } from '@/types';

interface ClassCardProps {
  dndClass: Class;
}

const classBackgroundImages: Record<string, string> = {
  'barbarian': '/classes/class-bg-barbarian.png',
  'bard': '/classes/class-bg-bard.png',
  'cleric': '/classes/class-bg-cleric.png',
  'druid': '/classes/class-bg-druid.png',
  'fighter': '/classes/class-bg-fighter.png',
  'monk': '/classes/class-bg-monk.png',
  'paladin': '/classes/class-bg-paladin.png',
  'ranger': '/classes/class-bg-ranger.png',
  'rogue': '/classes/class-bg-rogue.png',
  'sorcerer': '/classes/class-bg-sorcerer.png',
  'warlock': '/classes/class-bg-warlock.png',
  'wizard': '/classes/class-bg-wizard.png', 
};

const classBackgroundColors: Record<string, string> = {
  'barbarian': 'bg-gradient-to-br from-red-900 to-red-700',
  'bard': 'bg-gradient-to-br from-purple-900 to-purple-700',
  'cleric': 'bg-gradient-to-br from-yellow-900 to-yellow-700',
  'druid': 'bg-gradient-to-br from-green-900 to-green-700',
  'fighter': 'bg-gradient-to-br from-gray-900 to-gray-700',
  'monk': 'bg-gradient-to-br from-orange-900 to-orange-700',
  'paladin': 'bg-gradient-to-br from-blue-900 to-blue-700',
  'ranger': 'bg-gradient-to-br from-emerald-900 to-emerald-700',
  'rogue': 'bg-gradient-to-br from-slate-900 to-slate-700',
  'sorcerer': 'bg-gradient-to-br from-pink-900 to-pink-700',
  'warlock': 'bg-gradient-to-br from-indigo-900 to-indigo-700',
  'wizard': 'bg-gradient-to-br from-cyan-900 to-cyan-700',
};

const classSummaries: Record<string, string> = {
  'barbarian': 'Warriors of primitive lands who combine powerful rage with martial prowess.',
  'bard': 'Inspiring magicians whose power echoes the music of creation.',
  'cleric': 'A priestly champion who wields divine magic in service of a higher power.',
  'druid': 'A priest of the Old Faith, wielding the powers of nature and adopting animal forms.',
  'fighter': 'A master of martial combat, skilled with a variety of weapons and armor.',
  'monk': 'A master of martial arts, harnessing the power of the body in pursuit of physical and spiritual perfection.',
  'paladin': 'A holy warrior bound to a sacred oath to stand against the forces of evil.',
  'ranger': 'A warrior who uses martial prowess and nature magic to combat threats on the edges of civilization.',
  'rogue': 'A scoundrel who uses stealth and trickery to overcome obstacles and enemies.',
  'sorcerer': 'A spellcaster who draws on inherent magic from a gift or bloodline.',
  'warlock': 'A wielder of magic that is derived from a bargain with an extraplanar entity.',
  'wizard': 'A scholarly magic-user capable of manipulating the structures of reality.',
};

export const ClassCard: React.FC<ClassCardProps> = ({ dndClass }) => {
  const backgroundImage = classBackgroundImages[dndClass.index];
  const backgroundColor = classBackgroundColors[dndClass.index] || 'bg-gradient-to-br from-gray-900 to-gray-700';
  const summary = classSummaries[dndClass.index] || 'A powerful adventurer with unique abilities and skills.';

  return (
    <Link href={`/classes/${dndClass.index}`} className="group block">
      <Card className="relative h-80 sm:h-96 overflow-hidden transition-all duration-300 group-hover:-translate-y-2 group-hover:shadow-xl">
        {/* Background Image or Color */}
        <div 
          className={`absolute inset-0 transition-transform duration-300 group-hover:scale-105 ${
            backgroundImage 
              ? 'bg-cover bg-top bg-no-repeat' 
              : backgroundColor
          }`}
          style={backgroundImage ? { backgroundImage: `url(${backgroundImage})` } : {}}
        >
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
        </div>

        {/* Content */}
        <div className="relative h-full flex flex-col justify-end p-6 text-white">
          {/* Class name */}
          <h2 className="font-serif text-3xl sm:text-4xl font-bold mb-3 group-hover:text-primary transition-colors duration-300">
            {dndClass.name}
          </h2>

          {/* Summary */}
          <p className="text-sm sm:text-base text-gray-200 leading-relaxed mb-4 line-clamp-3">
            {summary}
          </p>

          {/* Class details */}
          <div className="flex flex-wrap gap-2 mb-4">
            {/* Hit Die */}
            <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30">
              d{dndClass.hit_die} Hit Die
            </span>

            {/* Spellcasting indicator */}
            {dndClass.spellcasting && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-purple-500/20 text-purple-300 border border-purple-500/30">
                Spellcaster
              </span>
            )}

            {/* Primary ability */}
            {dndClass.spellcasting?.spellcasting_ability && (
              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-blue-500/20 text-blue-300 border border-blue-500/30">
                {dndClass.spellcasting.spellcasting_ability.name}
              </span>
            )}
          </div>

          {/* Hover indicator */}
          <div className="flex items-center text-sm text-gray-300 group-hover:text-primary transition-colors duration-300">
            <span>Learn more</span>
            <svg 
              className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </Card>
    </Link>
  );
}; 