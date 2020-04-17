var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://dev123:dev123@cluster0-e9qc8.mongodb.net/test?retryWrites=true&w=majority";
const dbName = 'myproject';

MongoClient.connect(url, {useNewUrlParser: true, useUnifiedTopology: true });   

module.exports = MongoClient;