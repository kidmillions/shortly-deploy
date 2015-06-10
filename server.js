var app = require('./server-config.js');

var port =  process.env.port || 4568;



app.listen(port);

// for (var key in process.env) {
//   console.log(key, " ", process.env[key]);
// }


console.log('Server now listening on port ' + port);
