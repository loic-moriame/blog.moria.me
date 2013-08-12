module.exports = function(grunt) {

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    config: {
      html: {
        src: [ // post
                '**/**/**/**/*.html',
                // archives
                'archive/**/**/*.html',
                'archive/*.html',
                // categories
                'categories/**/**/*.html',
                'categories/**/*.html',
                'archive/*.html',
                // tags
                'tags/**/*.html',
                ]
      },
      js: {
        src: 'js/*.js'
      },
      css: {
        src: 'css/*.css'
      },
      font: {
        src: 'css/font/*'
      }
    },

    manifest: {
      generate: {
        options: {
          basePath: 'public/',
          network: ['http://*', 'https://*'],
          preferOnline: true,
          verbose: true,
          timestamp: true,
          hash: true,
          master: ['public/index.html']
        },
        src: [
          '<%= config.html.src %>',
          '<%= config.css.src %>',
          '<%= config.js.src %>',
          '<%= config.font.src %>',
          'fancybox/*'
        ],
        dest: 'public/manifest.appcache'
      }
    },
  });

  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-contrib-concat');
  // grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-manifest');
  //grunt.loadNpmTasks('grunt-contrib-uglify');

  grunt.registerTask('default', ['manifest']);

};