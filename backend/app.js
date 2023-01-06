// import express module
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");

//------------------ data base config--------------------
// connect app with Data Base (sportDB : DB Name)
mongoose.connect('mongodb://localhost:27017/sportDB')
// --------------------------------------------------------

// import axios module
const axios = require("axios");
// import bcrypt module
const bcrypt = require("bcrypt");
// import body parser module 
const bodyParser = require("body-parser");
// creates express application : app 
const app = express();
// ----------------models importation------------------
// import player model
const Player = require("./models/player")
// import match model
const Match = require("./models/match");
// import user model
const User = require("./models/userr");

// import path 
const path = require('path');
// import multer
const multer = require('multer');


app.use('/images', express.static(path.join('backend/images')))





// ---------------------------body-parser Configuration
// 1. Send response with JSON format
app.use(bodyParser.json());
// 2. Parse Request object
app.use(bodyParser.urlencoded({ extended: true }));

// ------------------------------multer configuration
const MIME_TYPE = {
    'image/png': 'png',
    'image/jpeg': 'jpg',
    'image/jpg': 'jpg'
}
const storage = multer.diskStorage({
    // destination
    destination: (req, file, cb) => {
        const isValid = MIME_TYPE[file.mimetype];
        let error = new Error("Mime type is invalid");
        if (isValid) {
            error = null;
        }
        cb(null, 'backend/images')
    },

    filename: (req, file, cb) => {
        const name = file.originalname.toLowerCase().split(' ').join('-');
        const extension = MIME_TYPE[file.mimetype];
        const imgName = name + '-' + Date.now() + '-crococoder-' + '.' +
            extension;
        cb(null, imgName);
    }
});



//-------------------------- Security configuration
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});



// matches = [{ id: "1", teamOne: "fcb", teamTwo: "rmd", scoreOne: "4", scoreTwo: "2", stadium: "camp nou" },
// { id: "2", teamOne: "juv", teamTwo: "roma", scoreOne: "4", scoreTwo: "2", stadium: "camp nou" },
// { id: "3", teamOne: "fcb", teamTwo: "rmd", scoreOne: "7", scoreTwo: "2", stadium: "camp nou" },
// { id: "4", teamOne: "ca", teamTwo: "ess", scoreOne: "4", scoreTwo: "2", stadium: "camp nou" }]
// players = [{ id: 1, playerName: "messi", position: "sa", number: "10", age: "38" },
// { id: 4, playerName: "ronaldo", position: "rwd", number: "7", age: "40" },
// { id: 2, playerName: "neymar", position: "lwd", number: "10", age: "32" },
// { id: 3, playerName: "salah", position: "sa", number: "11", age: "38" }]
teams = [{ id: "1", team: "juv", stadium: "tyu", Foundation: "1970" },
{ id: "2", team: "rmd", stadium: "bernabeiu", Foundation: "1970" },
{ id: "3", team: "fcb", stadium: "camp nou", Foundation: "1970" },
{ id: "4", team: "liverpool", stadium: "tyu", Foundation: "1970" }]


function generateId(T) {
    var max = 0
    if (T.length == 0) {
        return max

    } else {

        for (let i = 0; i < T.length; i++) {
            if (T[i].id > max) {
                max = T[i].id
            }
        }
    }
    return max
}


// all buisness logics

// app.ACTION-HTTPS("path,(req,res)=>"{
// here buisness logic
// })
// arrow function


// ---------------------------------------------matches-----------------------------------------
// display all matches
app.get("/matches", (req, res) => {
    Match.find().then((docs) => {
        if (docs) {
            res.json({ matchTable: docs })
        }
    })

    // console.log("works");
});
// find match by id
app.get("/matches/:id", (req, res) => {
    console.log("here into get match by id", req.params.id);

    //  static test
    // matches (tableau d objet)
    // for (let i = 0; i < matches.length; i++) {
    //    if (matches[i].id==req.params.id) {
    //     res.json({match:matches[i].id});
    //     break;
    //    }

    // }
    // DB process
    Match.findOne({ _id: req.params.id }).then((doc) => {
        if (doc) {
            res.json({ match: doc })
        }
    })
});
// add match bussiness model
app.post("/matches", (req, res) => {
    console.log("here match body", req.body);

    // essaie aal statique
    // matches=[];
    // matches.push(req.body);
    // res.json({message:"added succesfully"});

    // DB process
    let match = new Match({
        scoreOne: req.body.scoreOne,
        scoreTwo: req.body.scoreTwo,
        teamOne: req.body.teamOne,
        teamTwo: req.body.teamTwo,
        stadium: req.body.stadium,
    })
    match.save((err, doc) => {
        if (err) {
            res.json({ message: "here err", err })
        } else {
            res.json({ message: "added succesfully" })
        }
    })
})
// delete match by ID
app.delete("/matches/:id", (req, res) => {
    console.log("here into delete match", req.params.id);

    // static test
    // for (let i = 0; i < matches.length; i++) {
    //     if (matches[i].id==req.params.id) {
    //         matches.splice(i,1)
    //         res.json({message:"deleted succesfully"})
    //         break;
    //     }  
    // }

    // DB process
    Match.deleteOne({ _id: req.params.id }).then(
        (response) => {
            console.log("here response after delet", response);
            res.json({ message: "match deleted succesfully" })

        })

})

// edit match 
app.put("/matches/:id", (req, res) => {

    // static test
    // for (let i = 0; i < matches.length; i++) {
    //    if (matches[i].id==req.params.id) {
    //         matches[i]=req.body;
    //         res.json({message:"edited succesfully"});
    //         break;
    //    }

    // }


    // DB process
    Match.updateOne({ _id: req.params.id }, req.body).then((data) => {
        res.json({ message: "updated succesfully" })
    }
    )
})

//---------------------------------------------- players-----------------------------------------------
// display all players
app.get("/players", (req, res) => {
    // find cest le retour de la recherche , then pour enregistrer le resultat dans docs
    Player.find().then((docs) => {
        console.log("here data ", docs);
        if (docs) {
            res.json({ playersTable: docs })
        }
    })

    // console.log("works");
});
// business logic:request post player
app.post('/players', multer({ storage: storage }).single('img'), (req, res) => {
    let player = req.body

    if (req.file) {
        const url = req.protocol + '://' + req.get('host');
        // insert player req.body into database (players)
        let playerObj = new Player({
            playerName: player.playerName,
            position: player.position,
            number: player.number,
            age: player.age,
            img: url + "/images/" + req.file.filename,
        })
        playerObj.save((err, doc) => {
            if (err) {
                res.json({ message: "error adding player" })
            } else {
                res.json({ message: "player added succesfully" })
            }
        });
    }
    // player.id=Number(generateId(players))+1
    // players.push(player)
    // console.log("here into adding player",req.body) 
})
// delete player by id
app.delete("/players/:id", (req, res) => {
    // activateRoute.snapshot.paramMap.get("id")=req.params.id
    console.log("here into delete player", req.params.id);
    Player.deleteOne({ _id: req.params.id }).then((data) => {
        console.log("here data after delete", data);
        if (data.deletedCount == 1) {
            res.json({ message: `player N° ${req.params.id} deleted succesfully` })
        }
    })
});
// display player by id
app.get("/players/:id", (req, res) => {
    // let player
    //     let pos
    //     let findedplayer
    //     let id=req.params.id
    //     for (let i = 0; i < players.length; i++) {
    //         if (players[i].id==id) {
    //             pos=i
    //             findedplayer=players[pos]

    //             break
    //         }

    //     }
    //     res.json({player:findedplayer})
    //
    console.log("here into display player", req.params.id);
    Player.findOne({ _id: req.params.id }).then((doc) => {
        console.log("here data after display", doc);

        res.json({ player: doc })

    })
});
// edit player 
app.put("/players/:id", (req, res) => {
    Player.updateOne({ _id: req.params.id }, req.body).then((doc) => {
        console.log("here data after display", doc);
        res.json({ player: req.body })
    })
});
// ------------------------------------------------teams----------------------------------------------------

// add team buisness logic
app.post('/teams', (req, res) => {
    let team = req.body
    team.id = Number(generateId(teams)) + 1
    teams.push(team)
    console.log("here into adding team", req.body)
    res.json({ message: "team added succesfully" })
})
// display all teams buisness logic
app.get("/teams", (req, res) => {
    res.json({ teamsTable: teams })
    console.log("works");

});

// ------------------------------------------------------search match----------------------------------------
// request search match 
app.post("/search", (req, res) => {
    let findedMatches
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].teamOne == req.body && matches[i].teamTwo == req.body) {
            findedMatches.push(matches[i])
        }

    }
    res.json({ allMatches: findedMatches })
})
// buisness logic : search by score one 
app.get("/search-filter", (req, res) => {
    let foundMatches = []
    for (let i = 0; i < matches.length; i++) {
        if (matches[i].scoreOne == req.body) {
            foundMatches.push(matches[i])
        }

    }
    res.json({ matches: foundMatches })
})

// -------------------------------------------------------stadiums---------------------------------------------
// display stadiums
app.get("/stadium", (req, res) => {
    // find cest le retour de la recherche , then pour enregistrer le resultat dans docs
    Stadium.find().then((docs) => {
        console.log("here data ", docs);
        if (docs) {
            res.json({ stadiumTable: docs })
        }
    })

    // console.log("works");
});
// business logic:request post stadium
app.post('/stadium', (req, res) => {
    let stadium = req.body
    // insert player req.body into database (players)
    let stadiumObj = new Stadium({
        stadiumName: stadium.stadiumName,
        capacity: stadium.capacity,
        foundation: stadium.foundation,
        country: stadium.country,
    })
    stadiumObj.save((err, doc) => {
        if (err) {
            res.json({ message: "error adding stadium" })
        } else {
            res.json({ message: "stadium added succesfully" })
        }
    });

})
// ---------------------------------------------------user sign up and login-------------------------------
// business logic : signup 
app.post("/user/signup", (req, res) => {
    bcrypt.hash(req.body.pwd, 10).then(
        (cryptedPwd) => {
            let user = req.body
            // insert user req.body into database (users)
            let userObj = new User({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: cryptedPwd,

            })

            userObj.save((err, doc) => {
                if (err) {
                    res.json({ message: "error with adding", err })
                } else {
                    let userTosend = {
                        firstName: doc.firstName,
                        lastName: doc.lastName,
                        email: doc.email,
                    }
                    res.json({ message: "WELCOME", object: userTosend.firstName })
                }
            });
        }
    )


})
// business logic : login
app.post("/user/login", (req, res) => {
    User.findOne({ email: req.body.email, password: req.body.password }).then((emailResponse) => {
        if (!emailResponse) {
            res.json({ message: "email error" })
        }
        return bcrypt.compare(req.body.password, req.body.password).then(
            ((responsePwd) => {
                if (!responsePwd) {
                    res.json({ message: "1" })
                }
                User.findOne({ email: req.body.email }).then(
                    (finalResult) => {
                        firstName: finalResult.firstName;
                        lastName: finalResult.lastName;
                        email: finalResult.email;
                    },
                    res.json({ message: "2", user: user })
                )
            })
        );


    })
})
// -----------------------------------------------------------api------------------------
// weather post business logic
app.post("/weather", (req, res) => {
    const country = req.body.country;
    const apiKey = "62ee756a34835483299877a61961cafb";
    const apiUrl =
        "https://api.openweathermap.org/data/2.5/weather?q=" +
        country +
        "&appid=" +
        apiKey + "&units=metric";
    axios
        .get(apiUrl)
        .then((response) => {
            console.log('Here response', response);
            const weather = response.data.main;
            console.log('Here weather main', weather);
            const result = {
                temp: weather.temp,
                pressure: weather.pressure,
                humidity: weather.humidity
            }
            res.status(200).json({
                result: result
            })
        });
});


// app is importable from other files
module.exports = app;