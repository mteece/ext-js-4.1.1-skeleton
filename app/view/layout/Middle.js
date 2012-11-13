/*
 * SKEL.view.layout.Middle
 * Panel with which central application views are swapped in and out of.
*/

Ext.define('SKEL.view.layout.Middle', {
	extend: 'Ext.panel.Panel',
    alias: 'widget.layout-middle-view',
    uses: [
		'Ext.panel.Panel',
		'Ext.layout.container.Card'
    ],
    baseCls: 'main-content',
    id: 'layout-middle-panel',
    layout: 'card',
    deferredRender: false
});