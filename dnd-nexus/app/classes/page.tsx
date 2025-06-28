import { ClassCard } from '../_components/ClassCard';
import { getAllClasses, getClassDetails } from '@/lib/dndApi';

export default async function ClassesPage() {
  const classes = await getAllClasses();
  
  const classDetails = await Promise.all(
    classes.map(async (dndClass) => {
      const details = await getClassDetails(dndClass.index);
      return details;
    })
  );

  const validClasses = classDetails.filter((details): details is NonNullable<typeof details> => details !== null);

  return (
    <>
      <div className="relative text-center pt-16 pb-12 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 flex items-center justify-center opacity-10">
          <div className="w-96 h-96 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur-3xl"></div>
        </div>
        
        {/* Decorative borders */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
        
        {/* Decorative corner elements */}
        <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-primary/50"></div>
        <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-primary/50"></div>
        <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-primary/50"></div>
        <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-primary/50"></div>

        {/* Main content */}
        <div className="relative z-10">
          {/* Subtitle */}
          <p className="text-sm font-medium text-primary/80 tracking-widest uppercase mb-4">
            Choose Your Destiny
          </p>
          
          {/* Main title with decorative elements */}
          <div className="relative mb-6">
            <h1 className="font-serif text-6xl sm:text-7xl lg:text-8xl font-bold text-primary relative">
              <span className="relative z-10">Classes</span>
              {/* Text shadow effect */}
              <span className="absolute inset-0 text-primary/20 blur-sm">Classes</span>
            </h1>
            
            {/* Decorative elements around title */}
            <div className="absolute -top-4 -left-8 w-4 h-4 bg-primary/30 rounded-full"></div>
            <div className="absolute -top-2 -right-6 w-3 h-3 bg-purple-500/40 rounded-full"></div>
            <div className="absolute -bottom-2 -left-6 w-2 h-2 bg-primary/50 rounded-full"></div>
            <div className="absolute -bottom-4 -right-8 w-4 h-4 bg-purple-500/30 rounded-full"></div>
          </div>

          {/* Description with enhanced styling */}
          <div className="max-w-3xl mx-auto">
            <p className="text-lg sm:text-xl text-text-secondary leading-relaxed font-medium">
              Every hero comes from a calling. Explore the classes to discover the abilities,
              <span className="text-primary font-semibold"> powers </span>
              and the path your character will follow.
            </p>
            
            {/* Decorative line */}
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="w-12 h-px bg-gradient-to-r from-transparent to-primary/50"></div>
              <div className="w-2 h-2 bg-primary rounded-full"></div>
              <div className="w-12 h-px bg-gradient-to-l from-transparent to-primary/50"></div>
            </div>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-20 left-10 w-2 h-2 bg-primary/40 rounded-full animate-pulse"></div>
        <div className="absolute top-32 right-16 w-1 h-1 bg-purple-500/60 rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-20 left-20 w-1 h-1 bg-primary/50 rounded-full animate-pulse delay-500"></div>
        <div className="absolute bottom-32 right-10 w-2 h-2 bg-purple-500/40 rounded-full animate-pulse delay-1500"></div>
      </div>

      {validClasses.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {validClasses.map((dndClass) => (
            <ClassCard key={dndClass.index} dndClass={dndClass} />
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