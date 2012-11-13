/*
 * SKEL.view.layout.Footer
 * Container for application footer components.
*/

Ext.define('SKEL.view.layout.Footer', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.layout-footer-view',
    requires: [
        'SKEL.store.Language',
        'SKEL.util.Globalization'
    ],
    uses: [
		'Ext.panel.Panel',
		'Ext.layout.container.Fit'
    ],
    baseCls: 'main-footer',
	id: 'layout-footer-panel',
    layout: 'vbox',
    height: 50,
    collapsible: false,
    margin: '0 0 0 0',

    initComponent: function() {
        // Content
        var d = new Date();
        this.html = SKEL.util.Globalization.applyTranslation('content.copyright', d.getUTCFullYear());

        this.callParent(arguments);
    }
});

