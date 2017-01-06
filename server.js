var express = require('express');
var app = express();

app.get("/", function(req, res){
	var fileName = path.join(__dirname, 'index.html');
	res.sendFile(fileName, function (err) {
		if (err) {
			console.log(err);
			res.status(err.status).end();
		}
		else {
			console.log('Sent:', fileName);
		}
	});
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Timestamp microservice running !");
});
