const app = require('express')();

app.get('/', (req, res) => {
    res.send({
        route: '/',
        status: res.statusCode
    })
})

app.listen(8080, () => {
    console.log('listening on port 8080')
})