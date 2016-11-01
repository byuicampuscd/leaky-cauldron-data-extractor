var fs = require('fs'),
    coursesRef = './resources/courses/';

function base64_decode(base64str, file) {

    var stringr = base64str.substring(0, 30);

    if (stringr.includes("jpeg")) {
        var replace = base64str.replace(/^data:image\/jpeg;base64,/, ""),
            bitmap = new Buffer(replace, 'base64');
        fs.writeFile(file + ".jpg", bitmap);
        console.log('******** JPG created from base64 encoded string ********');
    } else if (stringr.includes("png")) {
        var replace = base64str.replace(/^data:image\/png;base64,/, ""),
            bitmap = new Buffer(replace, 'base64');
        fs.writeFile(file + ".png", bitmap);
        console.log('******** PNG created from base64 encoded string ********');
    } else {
        console.log(file, " not and image bro!");
    }

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
                        base64_decode(banner, `./images/${file.replace(".json", "")}_${j}`);
                    }
                }
            }
        });
    })
})
