const mysql = require('mysql2');
const con = mysql.createConnection({
    host: "localhost",
    user: "Angad",
    password: "root"
});
con.connect(function(e) {
    if (e) {
        console.log(e);
    }
    console.log("connected!");
})