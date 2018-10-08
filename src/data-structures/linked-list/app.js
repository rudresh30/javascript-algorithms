var express = require('express');

const app = express();

const PORT = 5000;

app.use(express.static('./'))

app.get('/', (req, res) => {
    res.send(index.html);
});

app.listen(PORT, () => {
    console.log(`listening on port no ${PORT}`);
})

