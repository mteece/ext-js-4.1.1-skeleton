/*
 * SKEL.util.Templates
 * Template manager.
*/

Ext.define('SKEL.util.Templates',
	// use anonymous closure to allow for private vars
	(function(SKEL) {
		// private/internal methods
		function loadTemplates(templatesHtml) {
			if (!templatesHtml || templatesHtml.length===0) { return {}; }
			
			var i, key = null, parts = templatesHtml.split("~~~~"), templates = {}, _ref;
			
			var tplXlatFn = function () { return window.SKEL.util.Globalization.applyTranslation.apply(window, arguments); };
			for (i = 0, _ref = parts.length; i < _ref; i += 1) {
				if (i === 0) {
					continue;
				}
				if (i % 2 === 1) {
					key = parts[i];
				} else {
					templates["raw_" + key] = parts[i];
					templates[key] = new Ext.XTemplate(parts[i], {
						disableFormats: true,
						applyTranslation: tplXlatFn
                });
				}
			}
			console.log('SKEL.Templates loadTemplates');
			return templates;
		}
		
		// return the Ext object
		return {
			singleton: true,
			constructor: function() {
				console.log('SKEL.Templates constructor');
				return this;
			},
			requires : [
				'Ext.XTemplate'
			],
			init: function(tplHtml) {
				SKEL.Templates = loadTemplates(tplHtml);
				SKEL.Templates.EMPTY = new Ext.XTemplate('<span></span>');
				console.log('SKEL.Templates loaded');
				return this;
			}
			
		};
	}(SKEL|| {})) // end of Ext defined object
);