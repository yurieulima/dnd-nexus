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
  
  export interface Class {
    index: string;
    name: string;
    hit_die: number;
    proficiency_choices: Array<{
      choose: number;
      type: string;
      from: {
        option_set_type: string;
        options: Array<{
          item: {
            index: string;
            name: string;
            url: string;
          };
        }>;
      };
    }>;
    proficiencies: Array<{
      index: string;
      name: string;
      url: string;
    }>;
    saving_throws: Array<{
      index: string;
      name: string;
      url: string;
    }>;
    starting_equipment: Array<{
      equipment: {
        index: string;
        name: string;
        url: string;
      };
      quantity: number;
    }>;
    class_levels: string;
    multi_classing: {
      prerequisites: Array<{
        ability_score: {
          index: string;
          name: string;
          url: string;
        };
        minimum_score: number;
      }>;
      proficiencies: Array<{
        index: string;
        name: string;
        url: string;
      }>;
    };
    spellcasting: {
      level: number;
      spellcasting_ability: {
        index: string;
        name: string;
        url: string;
      };
      info: Array<{
        name: string;
        desc: string[];
      }>;
    };
    url: string;
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