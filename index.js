const express = require("express")
const router = require("./src/router")
const cors = require("cors")

const app = express()
app.use(cors())
const PORT = 5001

app.use("/api", router)

app.listen(PORT, () => {
  console.log(`Sua api iniciou => http://localhost:${PORT}`)
})
