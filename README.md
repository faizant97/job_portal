
# Job Search Portal

Hello, \
**VERSION**
* Use nodev16.14
**clone this and use this following command** \
*npm install* \
Following application contains controller, routes, config and model folders.

server.js is main file for app. 

**Port**: 8082 Localhost: *http://localhost:8082* \
**Local Mysql server**

**Creating new job API:** *http://localhost:8082/jobs/create* \
**Request body:** \
POST { "job_title": "construction Engineer", "company": "Plambee", "location": "New York", "apply_email": "lcotton0@alibaba.com", "leaveType": "Monthly" }

**Job searching and sorting API:** \
*http://localhost:8082/jobs/search?query=Electrical,computer&page=1&limit=5&sort=post_date* \
**Note:** *pagination parameters are mentioned below) Params: query Electrical,computer page 1 limit 2 sort post_date/id (any column mention in this parameter*

**Delete job API:** *http://localhost:8082/jobs/delete/:id*

**Note:** *delete job according to passed id in API.*

