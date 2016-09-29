var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articleOne= {
  title: 'A1 | MEA',
  heading: 'Article One',
  date: '29 September 2016', 
  content: `<p>
                    The Ministry of External Affairs of India MEA), also known as the Foreign Ministry, is the government agency responsible for the conduct of foreign relations of India. The Ministry comes under Government of India and is responsible for the country's representation in the United Nations. It also advises other Ministries and State Governments when the latter have dealings with foreign governments or institutions
                </p>
                <p>
                    The Ministry of External Affairs was the first government department to have a mobile app for smartphones with the launch of MEAIndia on 29 July 2013. by Foreign Secretary Ranjan Mathai. The app will help users apply for a passport, get visa information, and learn the location of Indian consulates worldwide.
                </p>`
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
return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-one', function (req, res) {
   res.send(createTemplate(articleOne));
});

app.get('/article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
});

app.get('/article-three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-three.html'));
});


app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
