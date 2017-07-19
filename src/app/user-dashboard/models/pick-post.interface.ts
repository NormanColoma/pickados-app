import { Match } from "app/user-dashboard/models/match.interface";

export interface PickOfPostPublication {
    PickResult: number,
    Description: string,
    Odd: number
    GetAllMatchOfPick: Match []
}