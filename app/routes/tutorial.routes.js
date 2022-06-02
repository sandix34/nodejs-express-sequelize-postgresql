module.exports = app => {
    const tutorials = require("../controllers/tutorial.controller.js");
    let router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);
    router.get("/", tutorials.findAll);
    router.get("/:id", tutorials.findOne);
    app.use('/api/tutorials', router);
};