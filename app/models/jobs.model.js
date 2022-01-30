const sql = require("./db");

// constructor
const Jobs = function(jobs) {
    this.job_title = jobs.job_title;
    this.company = jobs.company;
    this.location = jobs.location;
    this.post_date = jobs.post_date;
    this.apply_email = jobs.apply_email;
    this.leaveType = jobs.leaveType;
};

Jobs.create = (newJob, result) => {
    sql.query("INSERT INTO jobs SET ?", newJob, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created tutorial: ", { id: res.insertId, ...newJob });
        result(null, { id: res.insertId, ...newJob });

    });
};

Jobs.remove = (id, result) => {
    sql.query("DELETE FROM jobs WHERE id = ?", id, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }

        if (res.affectedRows == 0) {
            //no job id found
            result({ kind: "not_found" }, null);
            return;
        }

        console.log("deleted Job with id: ", id);
        result(null, res);
    });
};
module.exports = Jobs;