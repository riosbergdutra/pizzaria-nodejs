const mongoose = require("mongoose")

function ConnectToDatabase() {
    mongoose.connect('mongodb+srv://riosbergduttra:ITT4NWvq89BBJQS6@pizzaria.rt0d9b3.mongodb.net/pizzaria',{
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => console.log("mongo db conectado")
    ).catch((err) => {
        return console.log(`erro na conexão ${err}`)
    })
}

module.exports = ConnectToDatabase