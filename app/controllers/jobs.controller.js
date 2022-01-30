const Jobs = require("../models/jobs.model");

// Create and Save a new Job
exports.create = (req, res) => {

    if (!req.body) {
        res.status(400).send({
            message: "Content can not be empty!"
        });
    }
    const job = new Jobs({
        job_title: req.body.job_title,
        company: req.body.company,
        location: req.body.location,
        post_date: req.body.post_date,
        apply_email: req.body.apply_email,
        leaveType: req.body.leaveType
    });

    Jobs.create(job, (err, data) => {
        if (err)
            res.status(500).send({
                message: err.message || "Some error occured while creating new job."
            });
        else res.send(data);
    });

};

exports.delete = (req, res) => {
    Jobs.remove(req.params.id, (err, data) => {
        if (err) {
            if (err.kind === "not_found") {
                res.status(404).send({
                    message: `Not found Tutorial with id ${req.params.id}.`
                });
            } else {
                res.status(500).send({
                    message: "Could not delete Tutorial with id " + req.params.id
                });
            }
        } else res.send({ message: `Tutorial was deleted successfully!` });
    });
};