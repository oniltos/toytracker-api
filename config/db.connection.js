import mongoose from "mongoose";

const connectDB = async () => {
    //A uri com o endereço do Mongo passou a vir de uma variável de ambiente
    const connection = await mongoose.connect(process.env.MONGODB_URI)
    console.log('Conectado ao mongo! Database name: ', connection.connections[0].name)
}

export default connectDB