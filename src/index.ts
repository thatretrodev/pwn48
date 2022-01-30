const colors = require('./colors');
const socketstealer = require('./exploits/socketstealer');

module.exports = {
	socketstealer
};

function usage() {
	console.log("Usage:");
	console.log("\tpwn48 [exploit] [options]");

	console.log("\nAvailable Exploits:");
	console.log("\tsocketstealer (Options: Server, Session ID, and Delay)");
}

if (require.main == module) {
	const args = process.argv.slice(2);

	if (1 > args.length) {
		usage();
		process.exit(1);
	}

	if (args[0] == "socketstealer" && args.length == 4) {
		socketstealer(args[1], args[2], Number.parseInt(args[3]));
	}
	else {
		usage();
		process.exit(1);
	}
}