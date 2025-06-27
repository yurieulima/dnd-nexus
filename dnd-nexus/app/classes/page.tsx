import Link from 'next/link';
import { Card } from '../_components/ui/Card';
import { getAllClasses } from '@/lib/dndApi';

// O componente da página
export default async function ClassesPage() {
  const classes = await getAllClasses();

  return (
    <>
      <div className="text-center pt-12 pb-8">
        <h1 className="font-serif text-5xl font-bold text-primary">
          Classes
        </h1>
        <p className="text-text-secondary mt-4 max-w-2xl mx-auto">
          Every hero comes from a calling. Explore the classes to discover the abilities,
          powers and the path your character will follow.
        </p>
      </div>

      {classes.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {classes.map((dndClass) => (
            <Link 
              href={`/classes/${dndClass.index}`} 
              key={dndClass.index} 
              className="group"
            >
              <Card className="h-full flex items-center justify-center transition-all duration-300 group-hover:border-primary/50 group-hover:-translate-y-1">
                <h2 className="font-serif text-2xl font-bold text-center">
                  {dndClass.name}
                </h2>
              </Card>
            </Link>
          ))}
        </div>
        ) : (
          <div className="text-center mt-16">
            <p className="text-red-400">Não foi possível carregar as classes no momento. Tente novamente mais tarde.</p> 
          </div>
      )}
    </>
  );
}