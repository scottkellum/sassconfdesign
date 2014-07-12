module.exports = function(grunt) {

    var paths = {
        src: {
            bower: 'bower_components',
            css: 'source/css',
            fonts: 'source/fonts',
            js: 'source/js/source'
        },
        dest: {
            css: 'source/css',
            fonts: 'source/fonts',
            js: 'source/js',
            html: 'public/patterns',
            images: 'source/images',
            patterns: 'source/_patterns'
        },
        app: {
            css: 'export/css',
            fonts: 'export/fonts',
            js: 'export/js',
            html: 'export/patterns',
            images: 'export/images'
        }
    };

    require('load-grunt-config')(grunt, {
        config: {
            paths: paths
        }
    });

};