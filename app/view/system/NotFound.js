/*
 * SKEL.view.system.NotFound
 * UI based 404 for no route.
*/

Ext.define('SKEL.view.system.NotFound', {
	extend: 'Ext.panel.Panel',
	alias: 'widget.not-found',
	uses: [
		'Ext.panel.Panel'
	],
	id: 'not-found-panel',
	autoShow: true,
	initComponent: function() {
		
		var applyTranslation = SKEL.util.Globalization.applyTranslation;

		this.title = applyTranslation('heading.404');
		
		this.items = [
			{
				html: applyTranslation('heading.not_found'),
				margin: '0 0 10',
				cls: 'heading-1 border-bottom thick'
			},
			{
			    html: Ext.String.format('<p>{0}{1}</p>', applyTranslation('label.pages', 2), applyTranslation('content.not_found')),
				height: 300
			}
		];
		
		this.callParent(arguments);
	}
});