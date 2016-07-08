// Generated on 2015-12-01 using generator-angular 0.14.0
'use strict';

// # Globbing
// for performance reasons we're only matching one level down:
// 'test/spec/{,*/}*.js'
// use this if you want to recursively match all subfolders:
// 'test/spec/**/*.js'

module.exports = function (grunt) {

  // Configurable paths for the application
  var appConfig = {
    app: require('./bower.json').appPath || 'app',
    dist: 'dist',
    dev: 'dev'
  };

  // Define the configuration for all the tasks
  grunt.initConfig({
    watch: {
      styles: {
        files: ['src/**/.css'],
        tasks: ['build'],
        options: {
          livereload: 9666
        }
      },
      gruntfile: {
        files: ['Gruntfile.js']
      }
    },
    clean: {
      dist: {
        files: [{
          dot: true,
          src: [
            'dist/*'
          ]
        }]
      },
      dev: {
        files: [{
          dot: true,
          src: [
            'dev/*'
          ]
        }]
      }
    },
    connect: {
      server: {
        options: {
          port: 9001,
          base: './',
          livereload: 9666
        }
      }
    },
    concat: {
      dist: {
        src: ['src/**/*.css'],
        dest: 'dist/ui-framework.css'
      },
      dev: {
        src: ['src/**/*.css'],
        dest: 'dev/ui-framework.css'
      }
    },
    // Add vendor prefixed styles
    postcss: {
      options: {
        processors: [
          require('autoprefixer-core')({browsers: ['last 1 version']})
        ]
      },
      dist: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: '*.css',
          dest: 'dist/'
        }]
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          dest: 'dist/',
          src: [
            '**/*css'
          ]
        }]
      },
      dev: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/',
          dest: 'dev/',
          src: [
            '**/*css'
          ]
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/',
          src: ['*.css'],
          dest: 'dist/',
          ext: '.min.css'
        }]
      }
    },
    filerev: {
      dist: {
        src: ['dist/*.css','dev/**/*.css']
      }
    },
    sass: {                              // Task
      dist: {                            // Target
        options: {                       // Target options
          style: 'compact'
        },
        files: {                         // Dictionary of files
          'dist/ui-framework.css': 'src/ui-framework.scss'// 'destination': 'source'
        }
      }
    }
  });
  grunt.registerTask('build', [
    'clean:dist',
    'sass:dist',
    'postcss:dist',
    'cssmin'
  ]);
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-filerev');
};
