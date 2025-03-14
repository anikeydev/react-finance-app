import express from 'express'

const app = express()
const PORT = 80

app.use(express.static('./finance-app/dist'))

app.listen(PORT, () => {
    console.log(`Server has been started on port ${PORT}`)
})