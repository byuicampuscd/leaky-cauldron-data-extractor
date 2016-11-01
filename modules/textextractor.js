var cssTemplate = require('./byuicss.js'),
    fs = require('fs');

function textextractor(data, name) {

    var style = cssTemplate(data, styleToWrite => {
            fs.writeFile(`./text/${name}.css`, styleToWrite, function (err) {
                if (err) {
                    return console.log(err);
                }

                console.log(`${name}.css was saved!`);
            });
        });
}

module.exports = textextractor;
