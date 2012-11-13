Ext.define('SKEL.view.system.window.Exception', {
    extend: 'Ext.window.Window',
    alias: 'widget.exception-view',
	requires: [
		'Ext.form.Panel'
	],
	uses: [
        'Ext.layout.container.Accordion',
        'Ext.window.Window'
    ],
    id: 'exception-window',
    width: 600,
    height: 600,
    autoShow: false,
    buttonAlign: 'right',
    layout: 'fit',
    bodyStyle: 'padding: 0;',
    labelAlign: 'left',
    closable: true,
    draggable: true,
    constrain: true,
    resizable: false,
    modal: true,
    floating: true,
    
	initComponent: function() {
		// Values passed via Ext.widget('exception-view' ,{id:Ext.id(), success:'false', error:'errors'})
		// success, errors are *available*.
		
		console.log('SKEL.view.system.window.Exception');
		
		this.title = SKEL.util.Globalization.applyTranslation('heading.exception');
		
		var err = this.error;
		var errorMessage = err && err.responseText ? err.responseText : "";

		var errorOptions = err && err.request && err.request.options ? err.request.options.url + " " + (err.request.options.method ? err.request.options.method : "") : "";

		this.items = [{
			xtype : 'panel',
			id: 'exception-panel',
			bodyPadding: 25,
			autoScroll: true,
			html: Ext.String.format('<p>Error processing request.</p><ul><li>Trace</li><li>Success: {0}</li><li>Response: {1}</li></ul>', this.success, errorOptions + '<br/>' + errorMessage)
		}];
		
		this.callParent(arguments);
    }
	
});