const express = require('express');
const shopRoutes = require('./src/negozio/routes');
const cors = require('cors');

const app = express();
const port = 3000;


// Aumenta il limite del payload JSON a 10MB
app.use(express.json({ limit: '10mb' }));

app.use(cors());
app.use(express.json());

app.get("/", (req,res)=>{
    res.send("Hello World");
})

app.use('/api/v1/negozio', shopRoutes);

app.listen(port, () => console.log("app listening "));