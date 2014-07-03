module.exports = function(grunt) {

    grunt.initConfig({
        'connect': {
            demo: {
                options: {
                    open: true,
                    keepalive: true
                }
            }
        },
        'gh-pages': {
            options: {
                clone: 'bower_components/my-repo'
            },
            src: [
                'bower_components/**/*',
                '!bower_components/my-repo/**/*',
                'demo/*', 'src/*', 'index.html'
            ]
        },
        'replace': {
            path: {
                src: ['src/*'],
                dest: 'dist/',
                replacements: [{
                    from: 'bower_components',
                    to: '..'
                }]
            },
            rename: {
                src: ['dist/*', 'src/*', 'index.html', 'Gruntfile.js', 'README.md', 'bower.json'],
                overwrite: true,
                replacements: [{
                    from: 'my-repo',
                    to: 'my-repo' // write your repository
                },
                {
                    from: 'my-user',
                    to: 'my-user' // write your name
                },
                {
                    from: 'my-element',
                    to: 'my-element' // write your element
                }]
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-gh-pages');
    grunt.loadNpmTasks('grunt-text-replace');

    grunt.registerTask('build',  ['replace:path']);
    grunt.registerTask('deploy', ['gh-pages']);
    grunt.registerTask('server', ['connect']);
    grunt.registerTask('rename', ['replace:rename']);

};
