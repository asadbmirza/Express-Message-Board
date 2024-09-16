
module.exports = {
    get: (req, res) => {
        res.render("index", {messages: req.messages});
    },
}