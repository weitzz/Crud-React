const mongoose = require('mongoose')

const connectDB = async() =>{

    try {
        const conn = await mongoose.connect(process.env.MONGO_URI,{ 
            useNewUrlParser: true ,
            useUnifiedTopology: true,
            useCreateIndex:true } )
        console.log('DB Connected')
    } catch (error) {
        console.log(`DB connection error: ${error.message}`)
    }
}
module.exports = connectDB