/*
 * SKEL.view.home.Home
 * View for home.
*/

Ext.define('SKEL.view.home.Home', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.home-view',
    requires: [
		'SKEL.util.Configuration',
		'SKEL.util.Globalization',
        'Ext.form.field.ComboBox',
        'SKEL.store.Language'
	],
    uses: [
        'Ext.panel.Panel',
        'Ext.layout.container.Fit'
    ],
    id: 'home-panel',
    layout: 'fit',
    autoShow: true,
	initComponent: function() {
        var applyTranslation = SKEL.util.Globalization.applyTranslation;
		this.title = ''
        this.suspendLayout = true;
		this.items = [
			{
                xtype: 'combo',
                name: 'language-combobox',
                itemId: 'ddlLanguage',
                fieldLabel: '',
                emptyText: 'Select a language',
                hideLabel: true,
                store: Ext.data.StoreManager.lookup('Language'),
                queryMode: 'local',
                displayField: 'language',
                valueField: 'code',
                width: 110,
                editable: false
                //size: 20
            },
            {
				xtype: 'dataview',
				id: 'language-dataview',
                itemId: 'dvLanguage',
				store: Ext.data.StoreManager.lookup('Language'),
				tpl: SKEL.Templates.LANGUAGE || SKEL.Templates.EMPTY,
				itemSelector: 'tr.language',
				loadingText: applyTranslation('label.loading'),
				deferEmptyText: false,
				emptyText: applyTranslation('message.no_languages'),
				minHeight: 12,
				flex: 1,
				listeners: {
					itemclick: {
						fn: function(dataview, record, item, index, e) {
							console.log('click item', item);
						}
					},
					viewready:{
						fn: function(dataview) {
							console.log('language-dataview viewready()');
							if(this.store.count() <= 0){
								this.emptyText = applyTranslation('message.no_languages');
							}
						}
					},
					beforeactivate:{
						fn: function(dataview) {
							console.log('language-dataview beforeactivate');
							if(this.store.count() <= 0){
								this.emptyText = applyTranslation('message.no_languages');
							} else {
								this.emptyText = '';
							}
						}
					}
				}
			}
		];
        this.suspendLayout = false;
		this.callParent(arguments);
    }
    

    
});