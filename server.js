var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

var app = express();
var PORT = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

var reservations = [
    {
        name: "Carl",
        phone: "111-111-1111",
        email: "carl@carlmail.com",
        persons: "5",
        date: "2/25/2018",
        time: "08:00 PM"
    }
];

var waitList = [
    {
        name: "Random",
        phone: "222-222-2222",
        email: "random@randommail.com",
        persons: "6",
        date: "2/28/2018",
        time: "07:00 PM"
    }
];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/tables", function(req, res) {
    //res.sendFile(path.join(__dirname, "tables.html"));
    res.json(reservations);
    res.json(waitList);
});

app.get("/add", )

// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
    var newReservation = req.body;
    if (reservations.length < 5) {
        reservations.push(newReservation);
    }
    else {
        alert("Sadly, there were no tables left, so you have been placed on our waiting list.");
        waitList.push(newReservation);
    }
});

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});