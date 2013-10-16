var Mocha = require('mocha'),
    path = require('path'),
    fs = require('fs');

var mocha = new Mocha({
    reporter: 'dot',
    ui: 'bdd',
    timeout: 500000
});

var testDir = './test/';

//mocha.addFile("./html-compress/test/test.js");
//mocha.addFile("./fis-parser-haml-html/test/ut/haml-html.js");
//mocha.addFile("./fis-preprocessor-extlang/test/ut/preprocessor-extlang.js");
//mocha.addFile("./fis-optimizer-uglify-js/test/ut/uglify-max_line_len.js");
//mocha.addFile("./test/ut/cache.js");
//mocha.addFile("./test/ut/file.js");
//mocha.addFile("./test/ut/compile.js");
mocha.addFile("./test/ut/util.js");
//mocha.addFile("./test/ut/uri.js");
//mocha.addFile("./test/ut/util.js");
//mocha.addFile("./test/ut/tmp.js");
//mocha.addFile("./test/ut/project.js");

    var runner = mocha.run(function () {
        console.log('finished');
    });

    runner.on('pass', function (test) {
        console.log('... %s passed', test.title);
    });

    runner.on('fail', function (test) {
        console.log('... %s failed', test.title);
    });
//});