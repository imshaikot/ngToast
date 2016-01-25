module.exports = function(grunt) {

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            less: {
                files: ['**/*.less'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            },
            jshint: {
                files: ['src/*.js'],
                tasks: ['jshint']
            }
        },

        less: {
            all: {
                options: {},
                files: {
                    "style.css" : "src/style.less"
                }
            }
        },
        bower: {
            dev: {
                dest: 'library'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-less');
    grunt.loadNpmTasks('grunt-bower');

    grunt.registerTask('default', ['bower', 'less']);
};