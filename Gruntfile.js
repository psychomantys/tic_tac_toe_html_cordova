/*global module:false*/
module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
	pkg: grunt.file.readJSON('package.json'),
	meta: {
		banner: '/*! <%= pkg.title || pkg.name %> - v<%= pkg.version %> - ' +
			'<%= grunt.template.today("yyyy-mm-dd") %>\n' +
			'<%= pkg.homepage ? " * " + pkg.homepage + "\\n" : "" %>' +
			' * Copyright (c) <%= grunt.template.today("yyyy") %> <%= pkg.author.name %>\n' +
			' * Licensed <%= _.pluck(pkg.licenses, "type").join(", ") %>\n */\n'
	},
/*
	concat: {
		dist: {
			src: ['<banner:meta.banner>', '<file_strip_banner:www/js/<%= pkg.name %>.js>', 'www/js/ ** /*.js'],
			dest: 'www/js/<%= pkg.name %>.js'
		}
	},
	min: {
		dist: {
			src: ['<banner:meta.banner>', '<config:concat.dist.dest>'],
			dest: 'www/js/<%= pkg.name %>.min.js'
		}
	},
	jshint: {
		options: {},
		globals: {}
	},
*/
	linter: {
		files: [ 'Gruntfile.js', 'package.json',
			'www/js/**/*.js', 'www/js/spec/**/*.js',
			'!www/js/thirdparty/**/*.js', '!www/js/**/*.min.js'
		],
		globals: {
			jQuery: true,
			$: true,
			describe: true,
			it: true,
			expect: true
		}
	},
	watch: {
		files: ['<config:linter.files>', 'www/spec/**/*.js'],
		tasks: 'linter jasmine'
	},
	jasmine: {
		src: [ 'www/**/*.js', '!www/js/spec/**/*.spec.js' ],
		options: {
			specs : 'www/js/spec/**/*.spec.js'
		}
	},
	shell: {
		options: {
			failOnError: true,
			stdout: true
		},
		debug_ios: {
			command: 'cordova build ios && cordova emulate ios'
		},
		debug_android: {
			command: 'cordova build android && cordova emulate android'
		},
		debug_blackberry: {
			command: 'cordova build blackberry && cordova emulate blackberry'
		}
	},
	uglify: {
		options: {
			mangle: false,
			banner: '<%= meta.banner %>'
		},tic_tac_toe: {
			files: {
				'www/js/<%= pkg.name %>.min.js': [ 'www/js/tic_tac_toe/**/*.js' ]
			}
		}
	} 
	});

	grunt.loadNpmTasks('grunt-contrib-jasmine');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-shell');
	grunt.loadNpmTasks('grunt-linter');

	// Default task
	grunt.registerTask('default', ['linter','jasmine','uglify']);

	// Custom tasks
	grunt.registerTask('test', ['linter','jasmine']);
	grunt.registerTask('debug:ios', ['linter','jasmine','uglify','shell:debug_ios']);
	grunt.registerTask('debug:android', ['linter','jasmine','uglify','shell:debug_android']);
	grunt.registerTask('debug:blackberry', ['linter','jasmine','uglify','shell:debug_blackberry']);
};

