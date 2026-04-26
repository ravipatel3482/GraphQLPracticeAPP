const express = require('express')
const { graphqlHTTP } = require('express-graphql');
const store = require('./Src/GraphQLType/store')
const app = express()
const mongoose = require('mongoose');

// Replace 'myStoreDB' with whatever you want to name your database
const mongoURI = 'mongodb://localhost:27017/myStoreDB'

mongoose.connect(mongoURI)
  .then(() => console.log("✅ Successfully connected to MongoDB locally"))
  .catch(err => console.error("❌ MongoDB connection error:", err));
  
app.use("/graphql", graphqlHTTP({
  schema: store,
  graphiql: true
}));

app.listen(4000, () => {
  console.log("Hello From Express.js")
});