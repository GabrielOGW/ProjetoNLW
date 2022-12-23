import express from "express"

const app = express()

app.get("/test", (req, res) => {
  return res.send("olá")
})

app.post("/test-post", (req, res) => {
  return res.send("Olá metodo Post")
  
})

// http://localhost:3000
app.listen(3000, () => console.log("Servidor rodando"))