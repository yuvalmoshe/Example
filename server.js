let express = require('express');
let bodyParser = require('body-parser');  

let app = express();
app.listen (3000);

app.use(bodyParser.json());  
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('node_modules'));
app.use(express.static('public'));


app.get('/dogs', function (req, res){
    res.send([{name: 'rexy', age: 4} ,{name: 'pau', age: 3}, {name:'miki', age:2}])
});
