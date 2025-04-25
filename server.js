import express from 'express';

const app = express();

app.get('/hello', (req, res) => {
    res.send('world');
});

app.listen(8888, () => {
    console.log('[RERQ] LISTENING ... (8888)');
});
