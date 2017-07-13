require("express")()
    .get("/", (req, res, next) => {
        res.send("New Deployment")
    })
    .listen(3000)