// init project
const express = require('express');

const app = express();
const multer = require('multer');

const upload = multer({ dest: 'uploads/' });

// http://expressjs.com/en/starter/static-files.html
app.use('/css', express.static('public/css'));

// http://expressjs.com/en/starter/basic-routing.html
app.get('/', (request, response) => {
  response.sendFile(`${__dirname}/views/index.html`);
});

app.post('/upload', upload.single('upfile'), (request, response) => {
  const metadata = {
    name: request.file.originalname,
    mimetype: request.file.mimetype,
    size: request.file.size,
  };
  return response.json(metadata);
});
// listen for requests :)
app.listen(process.env.PORT || 3000);
