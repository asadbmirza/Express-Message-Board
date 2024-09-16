const path = require("node:path");

module.exports = {
    get: (req, res) => {
        res.render("form");
    },

    post: (req, res) => {
        req.messages.push({user: req.body.user, text: req.body.text, added: new Date()})
        res.redirect("/");
    }
}