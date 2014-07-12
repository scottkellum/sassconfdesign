module.exports = {
  sass: {
    files: ["<%= paths.src.css %>/**/*.scss"],
    tasks: ["compass"],
    options: {
      "spawn": true
    }
  },
  scripts: {
    files: ["<%= paths.src.js %>/**/*.js"],
    tasks: ["uglify"],
    options: {
      "spawn": true
    }
  },
  html: {
    files: [
      '<%= paths.dest.patterns %>/**/*.mustache',
      '<%= paths.dest.patterns %>/**/*.json',
      '<%= paths.dest.css %>/**/*.css',
      '<%= paths.dest.js %>/**/*.js',
      'source/api/*.json'
    ],
    tasks: ['shell:patternlab'],
    options: {
      "spawn": false
    }
  }
  
};