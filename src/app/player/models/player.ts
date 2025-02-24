import { Team } from "../../team/models/team";

export interface Player {
    id: number;
    firstName: string;
    lastName: string;
    age: number;
    parentClub: string;
    team: Team;
}