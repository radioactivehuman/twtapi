
const { twitter } = require('betabotz-tools');
// const url = "https://www.instagram.com/p/CzmDXJTvZgq/";
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
app.use(cors());
app.use(bodyParser.json());

app.get('/api/getData', async (req, res) => {
    const queryParameter = req.query.parameter;
    const videodata = await getlink(queryParameter);
    console.log('GET request received with query parameter:', queryParameter);
    console.log(videodata);

    res.json({ message: videodata });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});


async function getlink(url) {
    const dataList = await twitter(url);
    console.log(dataList);
    return new Promise((resolve) => {
        resolve(dataList)

    });;
};

console.log('soy here');
