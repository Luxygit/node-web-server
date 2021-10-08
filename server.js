const express = require('express');
const app = express();
const users = require('./users.json')

// EXPRESSS FUNCTION FOR QUERIES
const getUsersFunction = (req,res) => {
    //getting the parametres
    const page = req.query.page
    const limit = req.query.limit
    const filteredUsers = users.filter((u) => u.id >= page )
    res.send(filteredUsers.slice(0, limit))
}
const getUsersByIdFunction = (req, res) => {
    const userId = parseInt(req.params.userId)
  res.send(users.find((u) => u.id === userId));
}
//SETTING UP ENDPOINTS

app.get('/users', getUsersFunction)

// app.get('/users', function (req, res) {
//   res.send(users);
// });
app.get('/users/:userId', getUsersByIdFunction);


app.listen(3000, () => console.log("Server is up and running"))