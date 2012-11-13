/*
 * SKEL.view.layout.Header
 * Container for branding, logos, user info, and tabbed navigation.
*/

Ext.define('SKEL.view.layout.Header', {
	extend: 'Ext.container.Container',
	alias: 'widget.layout-header-view',
	requires: [
		'Ext.form.field.ComboBox',
		'SKEL.store.Language'
	],
	uses: [
		'Ext.panel.Panel',
		'Ext.tab.Panel',
		'Ext.layout.container.VBox',
		'Ext.layout.container.HBox',
		'Ext.toolbar.Spacer'
	],
	id: 'header-panel',
	autoShow: true,
	baseCls: 'main-header',
	collapsible: false,
	height: 166,
	
	// Arrange child items vertically so each takes up full width.
	layout: {
		type: 'vbox',
		align: 'stretch'
	},
	
	initComponent: function() {
		console.log('SKEL.view.layout.Header initComponent');
		this.suspendLayout = true;

		var applyTranslation = SKEL.util.Globalization.applyTranslation;

		this.items = [
			// Header elements go here.
		];
		
		this.suspendLayout = false;
		this.callParent(arguments);
	}
	
});