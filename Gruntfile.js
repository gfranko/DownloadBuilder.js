/*global module:false*/
module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    `pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: '/*! <%= pkg.name %> - v<%= pkg.version %> - ' +
        '<%= grunt.template.today("yyyy-mm-dd") %>\n' +
        '<%= pkg.homepage ? "* " + pkg.homepage + "\\n" : "" %>' +
        '* Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>;' +
        ' Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %> */\n'
    },
    concat: {
      minified: {
        src: ['src/javascripts/DownloadBuilder.js'],
        dest: 'src/javascripts/DownloadBuilder.min.js'
      }
    },
    
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: 'src/javascripts/DownloadBuilder.js',
        dest: 'src/javascripts/DownloadBuilder.min.js'
      }
    },
    
    jasmine: {
      all: {
        src:['test/SpecRunner.html'],
        timeout: 150000 //in milliseconds
      }
    },
    lint: {
      files: ['Gruntfile.js','src/javascripts/DownloadBuilder.js']
    },
    watch: {
      gruntfile: {
        files: '<config:lint.files>',
        tasks: ['jshint:gruntfile']
      },
      src: {
        files: '<config:lint.files>',
        tasks: ['jshint:src', 'jasmine']
      }
    },
    jshint: {
      options: {
        jshintrc: '.jshintrc'
      },
      gruntfile: {
        src: 'Gruntfile.js'
      },
      src: {
        src: 'src/javascripts/DownloadBuilder.js'
      }
    }
  });

  //grunt.loadNpmTasks('grunt-jasmine-task');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  
  // Default task.
  grunt.registerTask('default', [
    'jshint',
    //'jasmine',
    'uglify'
  ]);

};
