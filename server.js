var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {
  title: 'A1 | MEA',
  heading: 'Article One',
  date: '29 September 2016', 
  content: `<p>
                    The Ministry of External Affairs of India MEA), also known as the Foreign Ministry, is the government agency responsible for the conduct of foreign relations of India. The Ministry comes under Government of India and is responsible for the country's representation in the United Nations. It also advises other Ministries and State Governments when the latter have dealings with foreign governments or institutions
                </p>
                <p>
                    The Ministry of External Affairs was the first government department to have a mobile app for smartphones with the launch of MEAIndia on 29 July 2013. by Foreign Secretary Ranjan Mathai. The app will help users apply for a passport, get visa information, and learn the location of Indian consulates worldwide.
                </p>`
},
    'article-two' : {title: 'A2 | MHA',
  heading: 'Article Two',
  date: '30 September 2016', 
  content: `<p>
                    The Ministry of Home Affairs (MHA) or Home Ministry is a ministry of the Government of India. An interior ministry, it is mainly responsible for the maintenance of internal security and domestic policy. The Home Ministry is headed by Union Minister of Home Affairs. Shri Rajnath Singh is the present Minister of Home Affairs.
                </p>
                <p>
                    The Home Ministry is also the cadre controlling Authority for the Indian Police Service(IPS), DANIPS and DANICS. Police-I Division of the Ministry is the Cadre Controlling Authority in respect of the Indian Police Service; whereas, the UT Division is the administrative Division for DANIPS and DANICS and the All India Service Officers posted and working in the AGMUT Cadre.
                </p>`},
    'article-three' : {title: 'A3 | MLJ',
  heading: 'Article Three',
  date: '1 October 2016', 
  content: ` <p>
                    The Minister of Law and Justice is head of the Ministry of Law and Justice and one of the Cabinet Ministers of the Government of India. Ravi Shankar Prasad is incumbent Minister of Law and Justice.
                </p>`}
};


function createTemplate (data) {
var title = data.title;
var date = data.date;
var heading = data.heading;
var content = data.content;
var htmlTemp= `
    <html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" content="width=device-width, initial-scale=1 "/> 
          <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class="container">
            <div>
                <a href="/">HOME</a>
            </div>
            <hr/>
            <h3>
               ${heading}
            </h3>
             <div>
               ${date}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>
</html> `;
return htmlTemp;
}



app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter = 0;
app.get('/counter',function (req, res){
    counter = counter + 1 ;
    res.send(counter.toString());
});


app.get('/:articleName', function (req, res) {
    var articleName = req.params.articleName;
   res.send(createTemplate(articles[articleName]));
});

var names = [];
app.get('/submit-name/:name', function (req, res) {
   var name = req.params.name;
   names.push(name);
   res.send(JSON.stringify(names));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
