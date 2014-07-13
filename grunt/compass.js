module.exports = {
    "dev": {
        "options": {
            "sassDir": "<%= paths.src.css %>",
            "cssDir": "<%= paths.dest.css %>",
            "outputStyle": "compressed",
            "require": [
                "toolkit",
                "breakpoint",
                "singularitygs",
                "modular-scale",
                "color-schemer",
                "sass-globbing"
            ]
        }
    }
};
