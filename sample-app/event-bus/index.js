const express = require('express')
const BodyParser = require('body-parser')
const axios = require('axios')

const app = express();

app.use(BodyParser.json())

app.post('/events', async (req, res) => {
    try {

        const event = req.body;

        await axios.post('http://post-srv:4000/events', event);
      //  await axios.post('http://localhost:4001/events', event);
      //  await axios.post('http://localhost:4003/events', event);
      //  await axios.post('http://localhost:4006/events', event);

        res.send({ status: 'OK' })

    } catch (e) {
        console.log(e)
    }

})

app.listen(4005, () => {
    console.log("Event service listening at port 4005")
})