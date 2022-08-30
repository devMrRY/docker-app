const express=require('express');
const app=express();

app.get('/health', (req, res) => {
    res.send('Hi Docker');
})

app.listen(9000, () => {
    console.log('server is running on 9000');
});