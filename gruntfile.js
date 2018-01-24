module.exports = function(grunt) {

    grunt.initConfig({

        /*
        * Sass Compilation
        *
        * Compile our buttons.scss into buttons.css
        *
        */
        sass: {                                         // Task
          dist: {                                       // Target
            options: {                                  // Target options
              style: 'compressed'
            },
            files: {                                    // Dictionary of files
              'css/buttons.css': 'scss/buttons.scss'    // 'destination': 'source'
            }
          }
        }
    });
      
    grunt.loadNpmTasks('grunt-contrib-sass');
      
    grunt.registerTask('default', ['sass']);

};