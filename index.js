const fsc = require("fs-cheerio");
const glob = require ("glob");


glob("**/*.html", function (er, files) {
    'use strict';

    for(var i = 0; i < files.length; i++){
        let filePath = files[i];
        let wholeFilePath = __dirname + '/' + filePath;

        fsc.readFile(wholeFilePath).then(function($){
            let documentBody = $('body').find('*');

            for(var i = 0; i < documentBody.length; i++){
                let node = documentBody[i];
                    if ($(node).is(':empty')){
                        $(node).html('&#160;');
                    }
            } 
            fsc.writeFile(wholeFilePath, $);
        });

    }

});
 