module.exports = {
    "dev": {
        "options": {
            "sassDir": "<%= paths.src.css %>",
            "cssDir": "<%= paths.dest.css %>",
            "outputStyle": "compressed",
            "require": [
                "compass-normalize",
                "sass-globbing"
            ]
        }
    }
};