import { model, Schema } from "mongoose";

const UserSchema = new Schema({

    nombre: String,
    email: String,
    password : String,
    direccion : String
},{
    versionKey:false,
    timestamps:true
}
)
export default model("User",UserSchema);