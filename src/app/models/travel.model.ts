import { AddressModel } from "./address.model";
import { CarModel } from "./car.model";
import { UserModel } from "./user.model";

export interface TravelModel{
    id?: number;
    user?: UserModel
    car?: CarModel
    address?: AddressModel
    date?: Date;
    cost?: Float32Array;
}