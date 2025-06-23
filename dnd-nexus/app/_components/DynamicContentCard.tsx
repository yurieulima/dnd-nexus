 // app/_components/DynamicContentCard.tsx
import { Monster, Spell } from "@/types";
import { Card } from "./ui/Card"; // Assumindo que Card.tsx está em /ui

interface MonsterDisplayProps { data: Monster; }
const MonsterDisplay: React.FC<MonsterDisplayProps> = ({ data }) => (
  <>
    <h3 className="font-bold text-xl mb-2">{data.name}</h3>
    <p><span className="font-semibold text-text-secondary">Tipo:</span> {data.type}</p>
    <p><span className="font-semibold text-text-secondary">ND:</span> {data.challenge_rating}</p>
    <p><span className="font-semibold text-text-secondary">PV:</span> {data.hit_points} ({data.hit_dice})</p>
  </>
);

interface SpellDisplayProps { data: Spell; }
const SpellDisplay: React.FC<SpellDisplayProps> = ({ data }) => (
  <>
    <h3 className="font-bold text-xl mb-2">{data.name}</h3>
    <p><span className="font-semibold text-text-secondary">Nível:</span> {data.level} ({data.school.name})</p>
    <p><span className="font-semibold text-text-secondary">Conjuração:</span> {data.casting_time}</p>
    <p><span className="font-semibold text-text-secondary">Alcance:</span> {data.range}</p>
  </>
);

interface DynamicContentCardProps {
  type: 'monster' | 'spell';
  initialData: Monster | Spell;
}

export const DynamicContentCard: React.FC<DynamicContentCardProps> = ({ type, initialData }) => {
  const title = type === 'monster' ? 'Monstro em Foco' : 'Magia do Dia';

  return (
    <Card>
      <h2 className="font-serif text-2xl font-bold text-primary border-b border-border pb-3 mb-4">{title}</h2>
      {type === 'monster'
        ? <MonsterDisplay data={initialData as Monster} />
        : <SpellDisplay data={initialData as Spell} />
      }
    </Card>
  );
};