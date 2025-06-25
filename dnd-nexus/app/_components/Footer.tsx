 // src/components/Footer.tsx
import React from 'react';

export const Footer: React.FC = () => (
    <footer className="text-center py-8">
        <p className="text-text-secondary">
           Data provided by <a href="https://5e-bits.github.io/docs/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">5e-bits API</a>.
        </p>
    </footer>
);