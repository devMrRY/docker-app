const express=require('express');
const app=express();

app.get('/health', (req, res) => {
    res.send(`Hi Docker whats up !!! ${process.env.NODE_ENV}`);
})

app.listen(process.env.PORT, () => {
    console.log('server is running on 9000');
});