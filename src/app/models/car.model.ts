import { DriverModel } from "./driver.model";

export interface CarModel{
    id?: number;
    driver?: DriverModel
    photo?: string;
    available?: boolean;
    description?: string;

}