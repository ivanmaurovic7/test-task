const { Router } = require('express');
const axios = require('axios');
const router = Router();

router.get('/', (req, res, next) => {
    axios.get("https://www.colr.org/json/color/random", {
        headers: {
            'GET': '/json/color/random HTTP/1.1',
            'Host': 'www.colr.org',
            'User-Agent': 'Mozilla/5.0 (X11; Ubuntu; Linux x86_64; rv:87.0) Gecko/20100101 Firefox/87.0',
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8',
            'Accept-Language': 'en-US,en;q=0.5',
            'Accept-Encoding': 'gzip, deflate, br',
            'Connection': 'keep-alive',
            'Upgrade-Insecure-Requests': '1',
            'Cache-Control': 'max-age=0'
        }
    })
    .then(({ data }) => {
        console.log(data);
        res.json(data);
    })
    .catch(err => {
        console.log(err);
        res.json(err);
    });
});

module.exports = router;