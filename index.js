const express = require('express');
const app = express();
const router = express.Router();
const PORT = 4900;
const core = require('./core');


router.get('/withdrawHistory/:from/:to', async (req, res) => {
    try {
        await core.arrayToCsv(req, res);
    } catch (err) {
        return res.status(500).send(controller.errorMsgFormat({
            'message': err.message
        }, 'user', 500));
    }
});


app.listen(PORT, () => {
    console.log('app started on ', PORT);
})