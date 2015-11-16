var express = require('express');
//to provide static files to web browser
var app = express();
app.use(express.static('api'));

app.get('/', function(req, res) {
  res.send('Welcome to BMI Restful API');
    
});
    
app.get('/bmi/height/:height/weight/:weight', function(req, res) {
	var
		weight = parseFloat(req.query.weight),
		height = parseFloat(req.query.height),
	
        result = BMIService.getResult(weight, height);
	
	res.send(result.toString());
});

var BMIService = {
    
	getResult: function(weight, height) {
        
        var result = [0,0]; 
        
		if(typeof(weight) === 'number' && typeof(height) === 'number') {
    
            //var bmi = weight / (height * height);
            var bmi = 70 / (1.71 * 1.71);
           
    
             result[0]=bmi.toFixed(2);
             //result[1]='teste';
             result[1]= description;
             return result;
            //return bmi;
             var description = getDescription(bmi);
		}
		return null;
	},

getDescription: function(bmi) {
    
    
    
    if(bmi <= 15) {
        return ('very severely underweight');
    }
    else if(bmi > 15 && bmi <= 16) {
        //return "severely underweight";
        return res.send('severely underweight');
    }
    else if(bmi > 16 && bmi <= 18.5) {
        //return "underweight";
        return res.send('underweight');
    }
    else if(bmi > 18.5 && bmi <= 25) {
        //return"Healthy";
        return res.send('Healthy');
    }
    else if(bmi > 25 && bmi <= 30) {
        //return"overweight";
        return res.send('overweight');
    }
    else if(bmi > 30 && bmi <= 35) {
        //return "obese class I";
        return res.send('obese class I');
    }
    else if(bmi > 35 && bmi <= 40) {
        //return "obese class II";
        return res.send('very severely underweight');
    }
    else {
        //return "obese class III";
        return res.send('obese class III');
    }
}
};

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});