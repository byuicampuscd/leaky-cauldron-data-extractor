var fs = require('fs'),
    coursesRef = './resources/courses/',
    base64_decode = require('./modules/base64decode.js'),
    textextractor = require('./modules/textextractor.js');


fs.readdir(coursesRef, (err, files) => {
    files.forEach(file => {

        fs.readFile(`${coursesRef}${file}`, 'utf8', (err, contents) => {
            var jsondata = JSON.parse(contents);

            for (var i in jsondata) {
                if (i === "images") {
                    var data = jsondata[i];

                    /*This is the banner separator and maker*/
                    /*
                    for (var j in data) {
                        var banner = data[j];
                        base64_decode(banner, `./images/${file.replace(".json", "")}_${j}`);
                    }
                    */

                } else if (i === "style"){
                    var style = jsondata[i],
                        name = file.replace(".json", "");

                    textextractor(style, name);
                }
            }
        });
    })
})
