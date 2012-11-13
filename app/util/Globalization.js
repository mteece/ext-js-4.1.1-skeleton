/*
 * SKEL.util.Globalization
 * Singleton instance of SKEL.globalization. Language or locale formatting. The
 * default will be SKEL.globalization.LANG setting, otherwise overridden by
 * the language selector.
 *
 * Dependencies on JavaScript Date Format: lib/date.format.js
 *
 */
Ext.define('SKEL.util.Globalization', {
    requires: [
        'Ext.Ajax',
        'Ext.window.MessageBox',
		'SKEL.util.Configuration'
    ],
    
    constructor: function() {
        return this;
    },
    
    init: function(){
        return this;
    },
    
    singleton: true,
	
	extractDateAndTime: function(form, dateField, timeField) {
		// ! To get around the weird 2012 and 1912 issue.
		// Dates need to be extracted.
		var rawDate = new Date(form.findField(dateField).getValue());
				
		// Need some Date() objects to interrogate for hours.
		var rawTime = new Date(form.findField(timeField).getValue());
				
		// Get hh:mm.
		var rawHours = rawTime.getHours(),
			rawMin = rawTime.getMinutes();
				
		// Set it.
		rawDate.setHours(rawHours);
		rawDate.setMinutes(rawMin);
		
		// Set the actually searchable date.
		var dateAndTime = new Date(rawDate);
		
		return dateAndTime;
	},
    
	applyTranslation: function (messageKey) {
        try{
            return jQuery.i18n.prop.apply(this, arguments);
            //return jQuery.i18n.prop(messageKey);
        }
        catch(exception){
            return messageKey;
        }
    },
	
	applyTime: function(hours, minutes, seconds, milliseconds) {
		// ! 24 hour format
		// Need to return a valid date for timefields to apply the local AM/PM
		// HACK: Known V8 bug http://code.google.com/p/v8/issues/detail?id=1945
		var dt = new Date();
		var ct = new Date(dt.getFullYear(), dt.getMonth(), dt.getDate(), hours, minutes, seconds, milliseconds);

		console.log(Ext.Date.format(ct, 'h:i A'));
		return ct;
	},
	
	/* formatForService
	 * Format date into service action format that is expected,
	 * Fri, 17 Dec 2010 09:31:25 EST
	 *
	*/
	formatForService: function(date) {
		// http://blog.stevenlevithan.com/archives/date-time-format
		return dateFormat(date, 'ddd, d mmm yyyy HH:MM:ss Z');
	},
	
	/* formatNonLatinTime
	 * Format timefield times.
	*/
	formatNonLatinTime: function() {
		
		var fmt = 'g:i A'; // Default to 12 hr format: e.g.: 11:59 PM
		
		switch(SKEL.util.Configuration.LANG)
		{
			case 'ja':
				fmt = 'H:i';
				break;
			case 'zh-CN':
				fmt = 'H:i';
				break;
			default:
				// Check user preferences for custom time format
				if (SKEL.properties.currentUser.timeDisplay !== null) {

					switch(SKEL.properties.currentUser.timeDisplay) {

						case '24H':
						// 24 hr format: e.g.: 23:59
						fmt = 'H:i';
						break;

						case '12H':
						// 12 hr format: e.g.: 11:59 PM
						fmt = 'g:i A';
						break;

						default:
						break;

					}
				}
				break;
		}
		return fmt;
	}
	
});