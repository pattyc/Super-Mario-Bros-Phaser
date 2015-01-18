module.exports = function(grunt) {
  
  grunt.initConfig({
    connect: {
      server: {
        options: {
          base: 'src',
          keepalive: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-connect');
  
  grunt.registerTask();
};

