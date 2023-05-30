import express from "express";

const app = express();

app.use(express.json());

const PORT = 3000;

app.use(express.urlencoded({ extended: true }));


app.get("/githubwebhook", (req, res) => {
    const payload = JSON.parse(req.body.payload);
    console.log(payload.action);
    res.send({});
});

app.listen(PORT, () => {    
    console.log(`Server listening on port ${PORT}`);
});