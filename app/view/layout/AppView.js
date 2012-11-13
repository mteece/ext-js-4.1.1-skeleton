/*
 * SKEL.view.layout.AppView
 * Container wrapper for application.
*/

Ext.define('SKEL.view.layout.AppView', {
    extend: 'Ext.container.Container',
	alias: 'widget.layout-app-view',
    autoscroll: true,
    uses: ['Ext.layout.container.Border'],
    id: 'layout-app-view-panel',
    items:[
		{ xtype:'layout-header-view' },
		{ xtype:'layout-middle-view' },
		{ xtype:'layout-footer-view' }
    ]
});