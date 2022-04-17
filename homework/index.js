


const express = require("express")

const connectToMongo = require("./config/dbs")


const app = express();

connectToMongo()


app.use(express.json())

const PORT = 8000

app.use('/api/v1',require('./routes/crudroutes'))


app.listen(PORT, () => {
    console.log(`app is listing at  the a port ${PORT}`)
})

