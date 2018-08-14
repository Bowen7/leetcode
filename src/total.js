var process = require("child_process");
process.exec('ls -l |grep "^d"|wc -l', (error, stdout) => {
	console.log(stdout);
});
