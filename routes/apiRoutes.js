const router = require("express").Router();
const db = "./../db/db.json";
const fs = require("fs");



router.get("/notes", (req, res) => {
    fs.readFile(db, "utf8", function (err, data) {
        if (err) throw err;
        res.json(JSON.parse(data));

    })
})


router.post("/notes", (req, res) => {
    let newNote = req.body;
    fs.readFile(db, "utf8", function (err, data) {
        if (err) throw err;

        res.json(JSON.parse(data));
        newNote.id = jsonDB.length + 1;
        jsonDB.push(newNote);

        fs.writeFile(db, JSON.stringify(jsonDB), err => {
            if (err) throw err;
            res.json({ success: true });
        })
    })
});

router.delete("/notes/:id", (req, res) => {
    let noteID = req.params.id;
    fs.readFile(db, "utf8", function (err, data) {
        if (err) throw err;

        //do stuff

    })
});

module.exports = router;