module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    sass: {
      dist: {
        files: {"src/994x250/app.css":"src/994x250/src/app.scss","src/320x160/app.css":"src/320x160/src/app.scss","src/640x320/app.css":"src/640x320/src/app.scss","src/300x250/app.css":"src/300x250/src/app.scss","src/336x280/app.css":"src/336x280/src/app.scss","src/728x90/app.css":"src/728x90/src/app.scss","src/300x600/app.css":"src/300x600/src/app.scss","src/160x600/app.css":"src/160x600/src/app.scss"}
      }
    },
    // JS
    uglify: {
      prod: {
        options: {
          beautify: false,
          mangle: true
        },
        files: {"src/994x250/app.js":"src/994x250/src/app.js","src/320x160/app.js":"src/320x160/src/app.js","src/640x320/app.js":"src/640x320/src/app.js","src/300x250/app.js":"src/300x250/src/app.js","src/336x280/app.js":"src/336x280/src/app.js","src/728x90/app.js":"src/728x90/src/app.js","src/300x600/app.js":"src/300x600/src/app.js","src/160x600/app.js":"src/160x600/src/app.js"}
      }
    },
    watch: {
      scripts: {
        files: [
          'src/*/src/*.js',
        ],
        tasks: ['uglify:prod'],
        options: {
          nospawn: true
        }
      },
      css: {
        files: [
          'src/*/src/*.scss',
          'src/*/src/*.css'
        ],
        tasks: ['sass']
      }
    },
    copy: {
      build: {
        files: [
          {
            cwd: 'src/',
            expand: true,
            src: ['**','!assets/*','!*/src/*'],
            dest: 'exports',
            options: {
              process: function (content, srcpath) {
                return content.replace('assets/', '');
              },
            },
            //flatten: true,
            filter: 'isFile'
          },
        ],
      },
    },
  });

  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-sass');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-copy');

  grunt.registerTask('default',['watch']);
  grunt.registerTask('all', ['uglify:prod','sass']);
  grunt.registerTask('build',['copy:build']);

}
