import express from "express"
const app = express()
import usuariocontroller from "./controller/usuarios-controller.js";
import tarefascontroller from "./controller/tarefas-controller.js";

app.get('/', function (req, res) {
  res.send('Hello World')
})  
app.post('/', function (req, res) {
  res.send('Hello World')
})  
usuariocontroller(app)
tarefascontroller(app)

app.listen(3000)
