import * as mongoose from 'mongoose';

export const AuthSchema = new mongoose.Schema({
	firstName: {type: String, required: true},
	lastName: {type: String, required: true},
});