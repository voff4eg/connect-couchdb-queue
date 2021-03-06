'use strict';
var connect = require('connect');

if (process.argv.length < 3) {
    console.error('Usage : $ node put_options.js <database_name> <rev_limits> [username] [password]');
    process.exit(1);
}

var opts = {"name": process.argv[2],
    "revs_limit": process.argv[3]};
if (process.argv.length >= 5) {
    opts.username = process.argv[4];
}
if (process.argv.length >= 6) {
    opts.password = process.argv[5];
}

var connect_couchdb = new (require(__dirname + '/../lib/connect-couchdb.js')(connect))(opts);

connect_couchdb.setupOptions(opts, function (err) {
    if (err) {
        process.exit(1);
        return;
    }
    console.log('ok !');
    process.exit(0);
});

