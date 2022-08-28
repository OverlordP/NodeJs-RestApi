import { model, Schema } from "mongoose";

const LibroSchema = new Schema({

    nombre: String,
    email: String,
    password : String,
    direccion : String
},{
    versionKey:false,
    timestamps:true
}
)
export default model("Libro",LibroSchema);