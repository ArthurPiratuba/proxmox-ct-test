import express from "express";
let app = express();

app.get("/", (req, res) => {
    res.send("Hello World Proxmox!");
});

app.listen(4444, () => {
    console.log("Server online: 4444");
});