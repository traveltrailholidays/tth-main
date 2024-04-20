import mongoose, { Schema, Document } from 'mongoose';

export interface User extends Document {
    username: string;
    fName: string;
    lName:string,
    email: string;
    password: string;
    isAdmin: boolean;
    verifyCode: string;
    verifyCodeExpiry: Date;
    isVerified: boolean;
    createdAt: Date;
    updatedAt: Date;
}

const UserSchema: Schema<User> = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        minlength: 3,
        maxlength: 30,
        lowercase: true
    },
    fName: {
        type: String,
        required: true,
        trim: true
    },
    lName: {
        type: String,
        required: true,
        trim: true
    },
    email: {
        type: String,
        required: [true, "Email is required"],
        unique: true,
        trim: true,
        lowercase: true,
        match:[/^[^\s@]+@[^\s@]+\.[^\s@]+$/ ,"please use a valid email address"]
    },
    password: {
        type: String,
        required: true,
        minlength: 6
    },
    isAdmin: {
        type: Boolean,
        default: false
    },
    verifyCode: {
        type: String,
        required: true
    },
    verifyCodeExpiry: {
        type: Date,
        required: true
    },
    isVerified: {
        type: Boolean,
        default: false
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

// Indexes
UserSchema.index({ username: 1, email: 1 });

const UserModel = (mongoose.models.User as mongoose.Model<User> || mongoose.model<User>('User', UserSchema));

export default UserModel;