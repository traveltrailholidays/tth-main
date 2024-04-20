import mongoose, { Schema, Document } from 'mongoose';

export interface Destination extends Document{
    content: string;
    createdAt: Date;
}

const DestinationSchema: Schema<Destination> = new Schema({
    
})

