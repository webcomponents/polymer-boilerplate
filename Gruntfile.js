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
        'src/*.js',
        'spec/*.js'
      ]
    },
    jasmine:{
      src : 'src/*.js',
      options : {
        specs : 'spec/*.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-connect');

  return grunt.registerTask('specs', [
    'jshint',
    'jasmine'
  ]);
};