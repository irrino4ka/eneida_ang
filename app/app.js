var express = require('express');
var cors = require('cors');

var app = express();
const bodyParser     = require('body-parser');
app.use(cors());

app.set('port', process.env.PORT || 4000 );
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.locals.siteTitle = "Енеїда";

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('app/public'));
app.use(require('./routes/index'));

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});