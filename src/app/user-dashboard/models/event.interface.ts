import { Team } from "app/user-dashboard/models/team.interface";

export interface Event {
    Id: number,
    GetHomeOfEvent_home: Team,
    GetAwayOfEvent_away: Team,
    Competition: string,
    Sport: string
}