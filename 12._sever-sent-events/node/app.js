import express from "express";

const app = express();

const PORT = 3000;

app.use(express.static("public"));

app.get("/synchronized-time", (req, res) => {
    res.writeHead(200, {
        "Content-Type": "text/event-stream",
        "Cache-Control": "no-cache",
        Connection: "keep-alive"
    });

    setInterval(() => sendTimeToClient(), 1000);
});


function sendTimeToClient(res) {
    const time = new Date().toTimeString();
    res.write(`data: ${time}\n\n`);
}



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});
