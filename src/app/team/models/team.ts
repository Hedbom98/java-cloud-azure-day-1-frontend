import { League } from "../../league/models/league";
import { Manager } from "../../manager/models/manager";
import { Player } from "../../player/models/player";

export interface Team {
    id: number;
    name: string;
    founded: number;
    players: Player[];
    league: League;
    manager: Manager;
}