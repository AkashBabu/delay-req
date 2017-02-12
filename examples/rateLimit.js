










var app = require("express")();


app.use(parsers());


// Use this code exactly from where ever you want to start limiting the rate.
app.use(timeout({
    delay: 500, // delay each request by 500ms before further processing
    maxPendingReq: 3000, // Max number of request that is allowed to be queued by nodejs server
    errStatus: 429, // status code to be sent if the max Pending request crosses the limit
    errMsg: "Too Many Requests" // error message to be sent if max pending request limit is crossed
}))

app.use(furtherProcess());