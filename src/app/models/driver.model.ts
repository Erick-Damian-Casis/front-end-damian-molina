import { UserModel } from "./user.model";

export interface DriverModel{
    id?: number;
    user_id?: number;
    photo?: string;
    license?: string;
}