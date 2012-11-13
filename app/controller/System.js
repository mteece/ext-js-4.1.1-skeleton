Ext.define('SKEL.controller.System', {
	extend: 'Ext.app.Controller',
	uses: ['Ext.app.Controller'],
	views: [
			'system.window.Exception',
			'system.NotFound'
			],
	requires: [
		'SKEL.util.Configuration',
		'SKEL.util.Globalization'
	],
	// Called when your application boots.
	init: function(app) {
		console.log('SKEL.controller.System init');
	},
	
	// Like init, but called after the viewport is created.
	onLaunch: function(app){
		console.log('SKEL.controller.System onLaunch');

		// Controller bound view(s) event(s).
		this.control({
			// Bind view by 'alias:' for component based events.
        });
	},
	
	onPanelRendered: function(panel) {
		console.log('SKEL.controller.System onPanelRendered');
    },
	
	index:function(){
		console.log('SKEL.controller.System index');
	},
	
	notFound: function(){
		this.render('system.NotFound');
	}
});