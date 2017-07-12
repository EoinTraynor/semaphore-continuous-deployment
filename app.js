require("express")()
    .get("/", (req, res, next) => {
        res.send("Continious Integration")
    })
    .listen(3000)