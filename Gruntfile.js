const webpackConfig = require('./webpack.config.js');
const path = require('path');

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: {
      options: webpackConfig,
    },
    watch: {
      app: {
        files: ['src/*.js'],
        tasks: ['webpack:build'],
      },
    },
    nodemon: {
      dev: {
        script: path.join(webpackConfig.output.path,
                          webpackConfig.output.filename),
        },
    },
    concurrent: {
      dev: {
        tasks: ['nodemon', 'watch'],
        options: {
          logConcurrentOutput: true,
        }
      }
    },
  });

  grunt.loadNpmTasks('grunt-concurrent');
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-nodemon');
  grunt.loadNpmTasks('grunt-contrib-watch');
}
