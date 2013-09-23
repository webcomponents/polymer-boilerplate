module.exports = function(grunt) {

  "use strict";

  grunt.initConfig({
    connect: {
      demo: {
        options:{
          port: 8000,
          base: '',
          keepalive: true
        }
      }
    },
    jshint:{
      all: [
        'Gruntfile.js',
        'src/*.js'
      ]
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

};
