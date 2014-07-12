module.exports = {
    app: {
        files: {
            '<%= paths.dest.js %>/global.js': [
            	'<%= paths.src.bower %>/jquery/dist/jquery.js',
                '<%= paths.src.js %>/global.js'
            ]
        }
    }
};