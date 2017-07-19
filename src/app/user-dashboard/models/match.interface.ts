import { Team } from "app/user-dashboard/models/team.interface";

export interface Match {
    Id: number,
    GetHomeOfEvent_home: Team,
    GetAwayOfEvent_away: Team,
    Competition: string,
    Sport: string
}