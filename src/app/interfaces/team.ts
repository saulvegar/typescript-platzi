import { Country, Player } from './player';

export interface Team {
  $key?: string;
  name: string;
  country: Country;
  players: Player[];
}