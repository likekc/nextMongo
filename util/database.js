import { MongoClient } from 'mongodb'
const url = 'mongodb://localhost:27017'
//const url = 'mongodb+srv://admin:umss0110@cluster0.yw8mhwi.mongodb.net/'
//const url = 'mongodb+srv://admin:umss0110@cluster0.yw8mhwi.mongodb.net/DB지정이름'
//const options = { useNewUrlParser: true }
let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    //global._mongo = new MongoClient(url, options).connect()
    global._mongo = new MongoClient(url).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(url, options).connect()
}
export { connectDB }


