// app/page.tsx
import { getRandomMonster, getRandomSpell } from "@/lib/dndApi";
import { HeroSection } from "./_components/HeroSection";
import { QuickAccess } from "./_components/QuickAccess";
import { DynamicContentCard } from "./_components/DynamicContentCard";
import { Suspense } from "react";
import { LoadingSpinner } from "./_components/ui/LoadingSpinner";

// Componentes 'wrapper' para usar com Suspense
async function MonsterCard() {
  const monster = await getRandomMonster();
  return <DynamicContentCard type="monster" initialData={monster} />;
}

async function SpellCard() {
  const spell = await getRandomSpell();
  return <DynamicContentCard type="spell" initialData={spell} />;
}

// Componente de fallback para o Suspense
function CardSkeleton() {
  return (
    <div className="bg-card border border-border rounded-lg p-6 min-h-[200px] flex items-center justify-center">
      <LoadingSpinner />
    </div>
  )
}

// A página principal
export default function HomePage() {
  return (
    <div >
      {/* Overlay para melhorar legibilidade */}
      <div className="min-h-screen bg-black/0">
        <div className="container mx-auto px-4 py-8">
          <HeroSection />
          <QuickAccess />
        </div>
      </div>
    </div>
  );
}