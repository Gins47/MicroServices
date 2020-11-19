import mongoose from 'mongoose'

interface UserAttr{
    email:string,
    password:string
}

interface UserDoc extends mongoose.Document {
    email:string,
    password: string
}

interface UserModel extends mongoose.Model<UserDoc>{
    build(attrs:UserAttr):UserDoc;
}

const userSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

userSchema.statics.build = (attrs: UserAttr) =>{
    return new User(attrs)
}

const User = mongoose.model<UserDoc,UserModel>('User',userSchema)

export {User}