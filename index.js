const app = require('express')();
require('dotenv').config()

app.get('/', (req, res) => {
    res.send({
        route: '/',
        status: res.statusCode
    })
})

const port = process.env.PORT || 8080
app.listen(port, () => {
    console.log(`application running on port ${port}`)
})