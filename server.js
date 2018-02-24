var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [
    {
        routeName: "table1",
        name: "Carl",
        persons: "5",
        date: "2/25/18",
        time: "8pm"
    }
];

var waitList = [
    {
        routeName: "wait1",
        name: "Derek",
        persons: "6",
        date: "2/28/18",
        time: "7pm"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    //res.sendFile(path.join(__dirname, "tables.html"));
    res.json(reservations);
    //res.json(waitList);
});

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    var newReservation = req.body;
    newReservation.routeName = newReservation.name.replace(/\s+/g, "").toLowerCase();
    if (reservations.length < 5) {
        reservations.push(newReservation);
    }
    else {
        waitList.push(newReservation);
    }
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});