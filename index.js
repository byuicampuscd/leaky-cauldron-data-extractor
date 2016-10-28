var fs = require('fs'),
    coursesRef = './resources/courses/';

function base64_decode(base64str, file) {
    var bitmap = new Buffer(base64str, 'base64');
    fs.writeFileSync(file, bitmap);
    console.log('******** File created from base64 encoded string ********');
}

fs.readdir(coursesRef, (err, files) => {
    files.forEach(file => {

        fs.readFile(`${coursesRef}${file}`, 'utf8', (err, contents) => {
            var jsondata = JSON.parse(contents);

            for (var i in jsondata) {
                if (i === "images") {
                    var data = jsondata[i];
                    for (var j in data) {
                        var banner = data[j];
                        base64_decode(banner, `./images/${file.replace(".json", "")}_${j}.jpg`);
                    }
                }
            }
        });
    })
})
