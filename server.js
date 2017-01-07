var express = require('express');
var app = express();

app.get("/whoiam", function(req, res){
	var ip=req.connection.remoteAddress.toString().split(":")[3];
	var lang=req.get("Accept-Language").split(",")[0];
	var os=req.get("User-Agent").split("(")[1].split(")")[0];
	
	res.end(JSON.stringify({ipadress:ip,language:lang,software:os}));
});

app.listen(process.env.PORT || 3000, function(){
	console.log("Header parser running !");
});
