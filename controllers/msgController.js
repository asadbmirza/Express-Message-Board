module.exports = {
    get: (req, res) => {
        const i = parseInt(req.params.id, 10);
        if (req.messages[i]) res.render("msg", {messages : req.messages, i: i});
        else next();
    }
}