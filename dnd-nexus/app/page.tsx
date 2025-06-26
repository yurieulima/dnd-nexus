// app/page.tsx
import { HeroSection } from "./_components/HeroSection";
import { QuickAccess } from "./_components/QuickAccess";

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