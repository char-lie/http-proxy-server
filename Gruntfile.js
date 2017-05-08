const webpackConfig = require('./webpack.config.js');

module.exports = function (grunt) {
  grunt.initConfig({
    webpack: {
      options: webpackConfig,
    },
    watch: {
      app: {
        files: ['index.js', 'proxy.js'],
        tasks: ['webpack:build'],
      }
    },
  });
  grunt.loadNpmTasks('grunt-webpack');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('watch', ['webpack:build', 'watch:app']);
}
