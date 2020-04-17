import { Document, Model } from 'mongoose';

export interface Auth {
    id: number;
    firstName: string;
    lastName: string;
}

export type AuthModel =  Model<Auth & Document>;
