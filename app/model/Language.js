/*
 * SKEL.model.Language
 * Model for language.
*/

Ext.define('SKEL.model.Language', {
    extend: 'Ext.data.Model',
    fields: [
	{ name: 'id', type: 'int' },
	{ name: 'code', type: 'string' },
	{ name: 'language',type: 'string' },
	{ name: 'charset', type: 'string' }
    ],
    idProperty: 'id'
});