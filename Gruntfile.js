module.exports = function(grunt) {

    grunt.initConfig({
        connect: {
            demo: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');

};
