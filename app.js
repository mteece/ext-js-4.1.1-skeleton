/*
 * app.js
 * Every Ext JS 4 application starts with an instance of Application class. The
 * Application contains global settings for your application (such as the app's name),
 * as well as maintains references to all of the models, views and controllers
 * used by the app. An Application also contains a launch function, which is run
 * automatically when everything is loaded.
 *
 * To build on top of the Application class we wrap in an set of anonymous functions
 * so we can fetch any dependencies for our application beforehand, while still
 * adhering to the Ext JS MVC architecture.
 *
 * First an anonymous function serves as a wrapper, then another anonymous function
 * applies language/locale specific properties. Then loadApp() via callback that
 * then goes about the normal Ext JS 4 application process.
 */
 
 
 (function(Ext) {
	
	(function () {
		
        var params = Ext.urlDecode(window.location.search.substring(1));
		console.log(params);
		// Initialize the jquery-i18n-properties plugin
		// http://code.google.com/p/jquery-i18n-properties/
		jQuery.i18n.properties({
			name: 'ApplicationResources',
			path: 'resources/',
			mode: 'map',
			language: !params.lang ? 'en' : params.lang,
			callback: loadApp()
		});
			
		if (params.lang) {
			applyLocale(params.lang);
			return this;
		}
		
        // TODO: Could use a refactor to pass the determined version
        // within a callback instead.
		applyLocale('en');
		
		function applyLocale(lang) {
			// Set the language format under \lib\ext-4.0.7\locale\
			// The resource files use: xx-YY and locale Ext JS files use xx_YY.
            // Version GPL or commericial is determined dynamically.
            $.ajax({
                url:'lib/extjs-4.1.1/ext-4.1.1-commercial/locale/ext-lang-en.js',
                type:'HEAD',
                success: function() {
                     // No commerical Ext JS fallback on GPL version.
                    var locale = lang.replace('-', '_');
                    head = document.getElementsByTagName('head')[0],
                    script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = Ext.util.Format.format('lib/extjs-4.1.1/ext-4.1.1-commercial/locale/ext-lang-{0}.js', locale);
                    head.appendChild(script);
                    
                    console.log('LOCALE APPLIED (commercial)');
                },
                error: function() {
                    // No commerical Ext JS fallback on GPL version.
                    var locale = lang.replace('-', '_');
                    head = document.getElementsByTagName('head')[0],
                    script = document.createElement('script');
                    script.type = 'text/javascript';
                    script.src = Ext.util.Format.format('lib/extjs-4.1.1/ext-4.1.1-gpl/locale/ext-lang-{0}.js', locale);
                    head.appendChild(script);
                    
                    console.log('LOCALE APPLIED (gpl)');
                }
            });
		}
		
		return true;
	})();	
	
	function loadApp() {
	   console.log('BEGIN LOAD APP');
	   
	   // Setup Loader config, caching, path.
	   Ext.Loader.setConfig({
		   disableCaching: true,
		   enabled: true,
		   paths: {
			   'SKEL': 'app',
			   'Ext.ux': 'app/ux'
		   }
	   });
	   
	   // Setup Loader class requirements.
	   Ext.Loader.require([
		   'SKEL.store.Language'
	   ]);
	   
	   // Ext Application initializer
	   Ext.application({
		   id: 'Skeleton',
		   name: 'SKEL',
		   appFolder: 'app',
		   autoCreateViewport: false,
		   
		   // All models in app/models/.
		   models: [
			   'Language'
		   ],
		   
		   // All stores in app/stores/.
		   stores: [
		   /* ####### IMPORTANT #######
		   * ALL STORES MUST BE INCLUDED IN Ext.Loader.require()
		   * ABOVE IN ORDER FOR sencha create TO WORK CORRECTLY!
		   */
			   'Language'
		   ],
		   
		   // All the controllers in app/controller/ (loaded dynamically).
		   controllers: [
			   'Home',
			   'Viewport'
		   ],
		   
		   // User extension source files, use the class names.
		   requires: [
			   'Ext.ux.Router',
			   'SKEL.util.Templates',
			   'SKEL.util.Configuration',
			   'SKEL.util.Globalization'
		   ],
		   
		   // Ext.ux.Router and Initialization
		   // https://github.com/brunotavares/Ext.ux.Router
		   enableRouter: true,
		   
		   routes: {
			   // Alphabetical order
			   '/': 'viewport#index',
			   'not-found': 'system#notFound',
			   'home': 'home#index'
		   },
		   
		   launch: function() {
			   
			   // This is fired as soon as the page is ready. Represents a more
			   // advanced version on Ext.onReady();
			   console.log('SKEL launch');
			   
			   // This image uri represents a 1x1 transparent gif.
			   // This is needed to prevent Ext from pinging http://www.sencha.com/s.gif
			   Ext.BLANK_IMAGE_URL = 'data:image/gif;base64,R0lGODlhAQABAID/AMDAwAAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==';
			   
			   // Enable quick tips
			   Ext.tip.QuickTipManager.init();
			   
			   /* 
				* Override Ext.app.Controller to provide render capability. I believe each application
				* will handle rendering task different (some will render into a viewport, some in tabs, etc...), 
				* so I didn't put this role into Ext.ux.Route responsability.
				*/
			   Ext.override(Ext.app.Controller, {
				   render: function(view) {
					   //take viewport
					   var panel, target = Ext.getCmp('main-viewport');
					   
					   //load view
					   if (Ext.isString(view)) {
						   view = this.getView(view);
					   }
					   
					   //if it already exists, remove
					   panel = target.child(view.xtype);
					   if(panel){
						   target.remove(panel);
					   }    
					   
					   //add to viewport
					   target.add(view);
				   }
			   });
	   
                /* 
                * Ext.ux.Router provides some events for better controlling
                * dispatch flow
                */
                Ext.ux.Router.on({
                   routemissed: function(uri) {
                       Ext.ux.Router.redirect('not-found');
                   },
                   beforedispatch: function(uri, match, params) {
                       console.log('beforedispatch ' + uri);
                   },
                   dispatch: function(uri, match, params, controller) {
                       console.log('dispatch ' + uri);
                       //TIP: you could automize rendering task here, inside dispatch event
                   }
                });			   
			   
               var blueHue = ['rgb(107, 157, 254)'];
               //theme: 'SKEL:gradients',
               Ext.chart.theme.SKEL = Ext.extend(Ext.chart.theme.Base, {
                   constructor: function(config) {
                       Ext.chart.theme.Base.prototype.constructor.call(this, Ext.apply({
                           colors: blueHue
                       }, config));
                   }
               });
               
			   // Loading graphics
			   var hideMask = function() {
				   Ext.get('loading').remove();
				   Ext.fly('loading-mask').animate({
					   opacity: 0,
					   remove: true
				   });
                   
                    
			   };
			   Ext.defer(hideMask, 5);
               
                // XTemplate engine.
               $.ajax({
                    url: 'resources/template/xtemplates.html',
                    cache: false,
                    method: 'GET',
                    async: false, // False by design
                    success: (function(data, textStatus, jqXHR) {
                        console.log('Ext.ux.Templates init()');
                        var tmplHolder = data,
							tmplHtml = tmplHolder ? data : null;
                        SKEL.util.Templates.init(tmplHtml);
					}).bind(this),
					error: (function(jqXHR, textStatus, errorThrown) {
						SKEL.util.Templates.init(null);
					}).bind(this)
                });
			   
				// Manually create the viewport.
				Ext.create('SKEL.view.Viewport');
			}
		});
	}
	
	
	
	
 }(Ext));