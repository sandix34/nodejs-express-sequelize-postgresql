const tutorials = require("../controllers/tutorial.controller");
module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);
    router.get("/", tutorials.findAll);
    router.get("/published", tutorials.findAllPublished);
    router.get("/:id", tutorials.findOne);
    router.put("/:id", tutorials.update);
    router.delete("/:id", tutorials.delete);
    router.delete("/", tutorials.deleteAll);
    app.use('/api/tutorials', router);
};