 // lib/dndApi.ts
import { ApiResource, ApiResourceList, Monster, Spell } from '@/types';

const API_BASE_URL = 'https://www.dnd5eapi.co';

async function fetchResource<T>(url: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${url}`, {
    cache: 'no-store',
  });
  if (!response.ok) {
    throw new Error(`Failed to fetch details from ${url}`);
  }
  return response.json();
}

export async function getRandomMonster(): Promise<Monster> {
  const listResponse = await fetch(`${API_BASE_URL}/api/monsters`, { cache: 'no-store' });
  const list: ApiResourceList = await listResponse.json();
  const randomIndex = Math.floor(Math.random() * list.count);
  const randomMonsterUrl = list.results[randomIndex].url;
  return fetchResource<Monster>(randomMonsterUrl);
}

export async function getRandomSpell(): Promise<Spell> {
  const listResponse = await fetch(`${API_BASE_URL}/api/spells`, { cache: 'no-store' });
  const list: ApiResourceList = await listResponse.json();
  const randomIndex = Math.floor(Math.random() * list.count);
  const randomSpellUrl = list.results[randomIndex].url;
  return fetchResource<Spell>(randomSpellUrl);
}

export async function getAllClasses(): Promise<ApiResource[]> {
  try {
    const response = await fetch('https://www.dnd5eapi.co/api/classes');
    if (!response.ok) {
      throw new Error('Falha ao buscar a lista de classes.');
    }
    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error(error);
    // Retornar um array vazio em caso de erro para não quebrar a página
    return [];
  }
}