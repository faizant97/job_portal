module.exports = app => {
    const tutorials = require("../controllers/jobs.controller.js");

    var router = require("express").Router();

    // Create a new Tutorial
    router.post("/", tutorials.create);
    router.delete("/:id", tutorials.delete);
    app.use('/api/jobs', router);
};