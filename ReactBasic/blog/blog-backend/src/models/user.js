import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const UsesrSchema = new Schema({
    username: String,
    hashedPassword: String
});

UsesrSchema.methods.setPasword = async function(password){
    const hash = await bcrypt.hash(password, 10);
    this.hashedPassword = hash;
}

UsesrSchema.methods.checkPassword = async function(password){
    const result = await bcrypt.compare(password, this.hashedPassword);
    return result;
}

UsesrSchema.statics.findByUsername = function(username){
    return this.findOne({username});
}

UsesrSchema.methods.sesrialize = function(){
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

UsesrSchema.methods.generateToken = function(){
    const token = jwt.sign(
        {
            _id: this.id,
            usesrname: this.username
        },
        process.env.JWT_SECRET,
        {
            expiresIn: '7d'
        }
    );
    return token;
}

const User = mongoose.model('User', UsesrSchema);
export default User;