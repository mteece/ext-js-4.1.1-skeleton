/*
 * SKEL.util.Configuration
 * Singleton instance of SKEL.util.Configuration.
 */

Ext.define('SKEL.util.Configuration', {
    
    DEBUG: true,
    LANG: 'en',
	ANIMFX: true,
    
    constructor: function(name) {
        return this;
    },

    singleton: true,
	
	handleException: function(response) {
        if (!this.DEBUG) { return false; }
		// Usage: SKEL.util.Configuration.handleException(msg);
		var eWin, eWinHtml;
		
		eWin = Ext.getCmp('exception-window');
		
		if(eWin){
			var err = response;
			var errorMessage = err && err.responseText ? err.responseText : "";
			var errorOptions = err && err.request && err.request.options ? err.request.options.url + " " + (err.request.options.method ? err.request.options.method : "") : "";
			eWinHtml = eWin.body.dom.innerText;
			eWin.update(eWinHtml + '<br/>' + errorOptions + '<br/>' + errorMessage);
		} else {
			eWin = Ext.widget('exception-view' ,{ success: false, error: response}); //id:Ext.id(), success: false, error: response
			eWin.show();
		}
		
		return true;
	}
});