/*
 * SKEL.controller.Viewport
 * Viewport for browser and primary component to which *all* components will
 * attach to. All of the utilities will be launched here.
*/

Ext.define('SKEL.controller.Viewport', {
	extend: 'Ext.app.Controller',
	requires: [
		'SKEL.util.Configuration',
		'SKEL.util.Globalization'
	],
	uses: [
		'Ext.app.Controller',
		'Ext.layout.container.Fit'
	],
	
	views: [
		'Viewport',
		'layout.AppView',
		'layout.Header',
		'layout.Footer',
		'layout.Middle',
		'home.Home'
	],

	defaultItem:{
		id: 'viewport-default',
		layout: 'fit',
		border: 0
	},

	layoutSet: false,

	// Called when your application boots.
	init: function() {
		console.log('SKEL.controller.Viewport init()');

		// Due to the nature of the Viewport in the application we must add
		// control method here.
		this.control({
			'viewport': {				
				'render': {
					fn: this.onViewportRendered,
					single: false
				}
				
			},
			
			'layout-middle-view': {
				// adjust viewport layout
				afterlayout: _.debounce(function(panel){
					var me = this;
					if (!me.layoutSet){
						console.log('Adjust #layout-middle-panel this.layoutSet = False');
						var layoutMiddle = Ext.getCmp('layout-middle-panel');
						layoutMiddle.setHeight();
						me.layoutSet = true;
						Ext.defer(function(){
							// reset this.layoutSet after so many ms
							me.layoutSet = false;

							// Remove any loading mask from middle
							layoutMiddle.getEl().unmask();

						},1000);
					}
				}, 200)
			}
		});
	},
	
	// Like init, but called after the viewport is created.
	onLaunch: function(app){
		console.log('SKEL.controller.Viewport onLaunch()');
	},
	
	index: function() {
		console.log('SKEL.controller.Viewport index');
		
		// Use the render method.
		this.render('home.Home');
		
		// Also can use #hashtag mapped in app.js routes
		//window.location.hash = '#home';
	},

	onViewportRendered: function(component) {
		console.log('SKEL.controller.Viewport onViewportRendered');
	
		// Initialize util.*
		// SKEL.util.*
		
		// Add Default items.
		component.add(this.defaultItem);
	},
	
	onViewportResize: function(component, adjWidth, adjHeight) {
		console.log('SKEL.controller.Viewport onViewportResize()');
		console.log(adjWidth, adjHeight);
	}
});