import "reflect-metadata"
import express from "express"
import { router } from "./routes"

import "./database"
import { AppDataSource } from "../ormconfig"

const app = express()

app.use(express.json())

app.use(router)
AppDataSource.initialize().then(() => {
  app.listen(3000, () => console.log("Servidor rodando"))
})