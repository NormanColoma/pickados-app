import { Match } from "app/user-dashboard/models/match.interface";

export interface PickOfPost {
    Id: number,
    PickResult: number,
    Description: string,
    Odd: number
    GetAllMatchOfPick: Match []
}