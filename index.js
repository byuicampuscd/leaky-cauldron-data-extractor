var fs = require('fs'),
    coursesRef = './resources/courses/';

fs.readdir(coursesRef, (err, files) => {
    files.forEach(file => {
        console.log(file);

        fs.readFile(`${coursesRef}${file}`, 'utf8', (err, contents) => {
            var jsondata = JSON.parse(contents);

            for (var i in jsondata) {
                console.log(i);
            }
        });
    })
})
