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
        tasks: ['pre-build']
      },
      livereload: {
        options: {
          livereload: 9666
        },
        files: [
          'index.html',
          'styles.css',
          'dist/*.css'
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
    // ,
    // csslint: {
    //   src: ['dist/*.css'],
    //   options: {
    //     'important': false,
    //     // desconsiderado por conta dos utilities que
    //     //utilizam important para sobrescrever os estilos
    //     'adjoining-classes': false,
    //     // desconsiderado pois é um warning relacionado a incompatibilidade com IE6
    //     'unique-headings': false,
    //     // desconsiderado - warning por conta de uma definição OOCSS, de que os
    //     // headings devem ter o mesmo estilo sempre - e no ui-framework temos
    //     // font-size e line-height diferentes para larguras de tela menores.
    //     'font-sizes': false
    //     //desconsiderado, pois invariavelmente os componentes terão diferentes fontes.
    //   }
    // }
  });
  grunt.registerTask('build', [
    'clean:dist',
    'sass:dist',
    'postcss:dist',
    'cssmin'
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
  // grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks('grunt-postcss');
  grunt.loadNpmTasks('grunt-filerev');
};
