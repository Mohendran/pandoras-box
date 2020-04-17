import { Document, Model } from 'mongoose';

export interface User {
    id: number;
    firstName: string;
    lastName: string;
}

export type UserModel =  Model<User & Document>;