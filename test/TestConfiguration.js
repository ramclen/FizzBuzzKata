requirejs(["../Configuration"], function () {
    requirejs.config({
        shim:{
            'jasmine-html': { deps : ['jasmine']},
            'jasmine-boot': { deps : ['jasmine', 'jasmine-html']}
        },
        paths : {
            "jasmine-boot": "../lib/jasmine/boot",
            "jasmine-html": "../lib/jasmine/jasmine-html",
            "jasmine": "../lib/jasmine/jasmine"
        }
    });

    require(['jasmine-boot'], function () {
        require(['test/main'], function () {
            window.onload();
        })
    });


});

