import mongoose, {Schema} from 'mongoose';
import bcrypt from 'bcrypt';

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

UsesrSchema.methods.esrialize = function(){
    const data = this.toJSON();
    delete data.hashedPassword;
    return data;
}

const User = mongoose.model('User', UsesrSchema);
export default User;