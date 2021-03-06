var winston = require('winston');

var logger = new (winston.Logger)({
	transports: [
		new (winston.transports.Console)({ json: false, timestamp: true, colorize: true }),
		new winston.transports.File({ filename: __dirname + '/debug.log', json: false })
	],
	exceptionHandlers: [
		new (winston.transports.Console)({ json: true, timestamp: true, colorize: true }),
		new winston.transports.File({ filename: __dirname + '/exceptions.log', json: true, prettyPrint: true })
	],
	exitOnError: false
});

module.exports = logger;
