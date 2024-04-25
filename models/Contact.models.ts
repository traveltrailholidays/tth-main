import mongoose, { Schema, Document } from 'mongoose';

export interface ContactData extends Document {
    name: string;
    email: string;
    phone: string;
    subject: string;
    message: string;
    createdAt: Date;
    updatedAt: Date;
}

const ContactSchema: Schema<ContactData> = new Schema({
    name: {
        type: String,
        required: [true, "Name is required."],
        minlength: [2, "Name must be larger than 2 characters."],
        maxlength: [50, "Name must be lesser than 50 characters."],
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,"please use a valid email address"]
    },
    phone: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 15,
    },
    subject: {
        type: String,
        required: true,
        minlength: 5,
        maxlength: 50,
    },
    message: {
        type: String,
        required: true,
        minlength: 10,
        maxlength: 500,
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

const ContactModel = mongoose.models.Contact || mongoose.model<ContactData>('Contact', ContactSchema);

export default ContactModel;
