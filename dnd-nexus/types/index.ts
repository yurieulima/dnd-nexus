 // types/index.ts
export interface ApiResource {
    index: string;
    name: string;
    url: string;
  }
  
  export interface ApiResourceList {
    count: number;
    results: ApiResource[];
  }
  
  export interface Monster {
    name: string;
    type: string;
    challenge_rating: number;
    hit_points: number;
    hit_dice: string;
  }
  
  export interface Spell {
    name:string;
    level: number;
    school: { name: string; };
    casting_time: string;
    range: string;
  }