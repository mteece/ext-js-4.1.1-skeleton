/*
 * SKEL.controller.Home
 * Controller for Home view components.
*/

Ext.define('SKEL.controller.Home', {
	extend: 'Ext.app.Controller',
	requires: ['SKEL.util.Globalization'],
	uses: [
		'Ext.app.Controller'
	],
	
	views: ['home.Home'],
	
	// Called when your application boots.
	init: function(app) {
		console.log('SKEL.controller.Home init');
	},
	
	// Like init, but called after the viewport is created.
    onLaunch: function(app){
		console.log('SKEL.controller.Home onLaunch');
	},
	
	index:function(){
		console.log('SKEL.controller.Home index');
		this.render('home.Home');
	}
});