const express = require('express');
const multer = require('multer');
const ejs = require('ejs');
const path = require('path');


var VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');
var fs = require('fs');

//set IBM cloud credentials in this section
var visualRecognition = new VisualRecognitionV3({
  version: '2019-05-29',
  iam_apikey: 'HRcJTXO--mTLE9e112frcsVlXRK_Br3G_PoZXcgOyTs0'
});

// Set The Storage Engine
const storage = multer.diskStorage({
  destination: './public/uploads/',
  filename: function(req, file, cb){
    cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

// Init Upload
const upload = multer({
  storage: storage,
  limits:{fileSize: 1000000},
  fileFilter: function(req, file, cb){
    checkFileType(file, cb);
  }
}).single('myImage');

// Check File Type
function checkFileType(file, cb){
  // Allowed ext
  const filetypes = /jpeg|jpg|png|gif/;
  // Check ext
  const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
  // Check mime
  const mimetype = filetypes.test(file.mimetype);

  if(mimetype && extname){
    return cb(null,true);
  } else {
    cb('Error: Solo Imagenes!');
  }
}

// Init app
const app = express();

// EJS
app.set('view engine', 'ejs');

// Public Folder
app.use(express.static('./public'));

app.get('/', (req, res) => res.render('index'));
var x;
app.post('/upload', (req, res) => {


  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: Ningun Archivo Seleccionado!'
        });
      } else {
        var images_file = fs.createReadStream(`./public/uploads/${req.file.filename}`);
        var classifier_ids = ["DefaultCustomModel_1224615642"];
        console.log("datos de la imagen -- " + images_file);
        //
          var params = {
          images_file: images_file,
          classifier_ids: classifier_ids,
          owners: 'IBM,me'
        };
        //aqui tiene que guardar la respuesta de json del clasificador en algnu laod
        //hasata ahorita fucinoa
        visualRecognition.classify(params, function(err, response) {
          if (err)
            console.log(err);
          else{


          //x = JSON.parse(response);
          x= response;
          var whatClass = JSON.stringify(x.images[0].classifiers[0].classes[0].class, null, 2);
          var score = JSON.stringify(x.images[0].classifiers[0].classes[0].score, null, 2);
          var type_hierarchy = JSON.stringify(x.images[0].classifiers[0].classes[0].type_hierarchy, null, 2);
          //xy = JSON.stringify(x.images[0].classifiers[0].classes[0].class, null, 2);
      }



          //console.log(JSON.stringify(response, null, 2))
          res.render('index', {
            msg: 'Archivo subido Correctamente!',
            file: `uploads/${req.file.filename}`,
            clas: whatClass,
            sc: score,
            th: type_hierarchy

          });
        });
        //

      }
    }
  });

});

app.post('/upload2', (req, res) => {


  upload(req, res, (err) => {
    if(err){
      res.render('index', {
        msg: err
      });
    } else {
      if(req.file == undefined){
        res.render('index', {
          msg: 'Error: Ningun archivo seleccionado!'
        });
      } else {
        var images_file = fs.createReadStream(`./public/uploads/${req.file.filename}`);
        var classifier_ids = ["default"];
        console.log("datos de la imagen -- " + images_file);
        //
          var params = {
          images_file: images_file,
          classifier_ids: classifier_ids,
        };
        //aqui tiene que guardar la respuesta de json del clasificador en algnu laod
        //hasata ahorita fucinoa
        visualRecognition.classify(params, function(err, response) {
          if (err)
            console.log(err);
          else{


          //x = JSON.parse(response);
          x= response;
          var whatClass = JSON.stringify(x.images[0].classifiers[0].classes[0].class, null, 2);
          var score = JSON.stringify(x.images[0].classifiers[0].classes[0].score, null, 2);
          var type_hierarchy = JSON.stringify(x.images[0].classifiers[0].classes[0].type_hierarchy, null, 2);
          //xy = JSON.stringify(x.images[0].classifiers[0].classes[0].class, null, 2);
      }



          //console.log(JSON.stringify(response, null, 2))
          res.render('index', {
            msg: 'Archivo subido correctamente!',
            file: `uploads/${req.file.filename}`,
            clas: whatClass,
            sc: score,
            th: type_hierarchy

          });
        });
        //

      }
    }
  });
});

const port = 8080;

app.listen(port, () => console.log(`Server started on port ${port}`));
