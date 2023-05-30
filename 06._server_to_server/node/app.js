import express from "express";
const app = express();
import path from "path";

const __dirname = path.resolve();
app.use(express.static( path.join(__dirname, './static') ))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.get('/', (req, res) => {res.sendFile( path.join(__dirname, '/../static/index.html') )});

app.get("/date", (req, res) => {
    res.send(new Date());
});



app.get("/datefromfastapi", async (req, res) => {
  const response = await fetch("http://127.0.0.1:8000/date");
  const date = await response.json();
  res.send(date);
});

const PORT = 8081;

app.listen(PORT, () => console.log("Server is running on port ", PORT));