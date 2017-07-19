import { PickOfPost } from "app/user-dashboard/models/pick.interface";

export interface Post {
    Id: number,
    Created_at: string,
    Description: string,
    PostResult: number, 
    Stake: number,
    TotalOdd: number,
    Tipster: string,
    GetAllPickOfPost: PickOfPost[]
}