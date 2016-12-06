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
      sass: {
        files: ['src/**/*.scss'],
        tasks: ['pre-build', 'copy:dist']
      },
      livereload: {
        options: {
          livereload: 9666
        },
        files: [
          'index.html',
          'styles.css',
          'dist/css/*.css'
        ]
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
          port: 9002,
          hostname: 'localhost',
          base: '.',
          livereload: 9666
        }
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
          cwd: 'dist/css/',
          src: '*.css',
          dest: 'dist/css/'
        }]
      }
    },
    // Copies remaining files to places other tasks can use
    copy: {
      dist: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/fonts/',
          dest: 'dist/fonts/',
          src: [
            '**/*.woff'
          ]
        }]
      },
      dev: {
        files: [{
          expand: true,
          dot: true,
          cwd: 'src/fonts/',
          dest: 'dist/fonts/',
          src: [
            '**/*.woff'
          ]
        }]
      }
    },
    cssmin: {
      target: {
        files: [{
          expand: true,
          cwd: 'dist/css/',
          src: ['*.css'],
          dest: 'dist/css/',
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
          'dist/css/ui-framework.css': 'src/ui-framework.scss'// 'destination': 'source'
        }
      }
    },
    combine_mq: {
      default_options: {
        expand: true,
        cwd: 'dist/css/',
        src: '*.css',
        dest: 'dist/css/'
      }
    }
  });
  grunt.registerTask('build', [
    'clean:dist',
    'sass:dist',
    'postcss:dist',
    'combine_mq',
    'cssmin',
    'copy:dist'
  ]);
  grunt.registerTask('pre-build', [
    'clean:dist',
    'sass:dist'
  ]);
  grunt.registerTask('dev', [
    'connect:server',
    'watch'
  ]);
  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-combine-mq');
  // grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-filerev');
};
