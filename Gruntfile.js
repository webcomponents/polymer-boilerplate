module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            demo: {
                options: {
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

};