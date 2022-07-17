const app = require('express')();

app.get('/', (req, res) => {
    res.send({
        route: '/',
        status: res.statusCode
    })
})

const port = process.env.PORT || 8000
app.listen(port, () => {
    console.log(`application running on port ${PORT}`)
})