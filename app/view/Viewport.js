/*
 * SKEL.view.Viewport
 * Specialized container representing the viewable application area
 * (the browser viewport).
*/

// 
Ext.define('SKEL.view.Viewport', {
	extend: 'Ext.container.Viewport',
	
	uses: [
		'Ext.container.Container',
		'Ext.container.Viewport',
		'Ext.layout.container.Fit'
	],
	
	requires: [
		'SKEL.view.home.Home',
		'SKEL.view.layout.AppView',
		'SKEL.view.layout.Footer',
		'SKEL.view.layout.Header',
		'SKEL.view.layout.Middle'
	],
	
	id: 'main-viewport',
	
	initComponent: function() {
		console.log('SKEL.view.Viewport initComponent()');
		this.callParent(arguments);
	}
});