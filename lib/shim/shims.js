
// console.log fix for older browsers
var alertFallback = false;
if (typeof console === 'undefined') {
		console = {}; // define it if it doesn't exist already
}
if (typeof console.log === 'undefined') {
		if (alertFallback) { console.log = function(msg) { alert(msg); }; }
		else { console.log = function() {}; }
}
if (typeof console.dir === 'undefined') {
		if (alertFallback) {
				// THIS COULD BE IMPROVED? maybe list all the object properties?
				console.dir = function(obj) { alert('DIR: ' + obj); };
		}
		else { console.dir = function() {}; }
}
if (typeof console.warn === 'undefined') {
		if (alertFallback) { console.warn = function(obj) { alert('warn: ' + obj); }; }
		else { console.warn = function() {}; }
}
if (typeof console.info === 'undefined') {
		if (alertFallback) { console.info = function(obj) { alert('info: ' + obj); }; }
		else { console.info = function() {}; }
}
if (typeof console.error === 'undefined') {
		if (alertFallback) { console.error = function(obj) { alert('error: ' + obj); }; }
		else { console.error = function() {}; }
}

// IE8 does not know of trim()
// @TODO put this somewhere it can be reused as needed
if(typeof String.prototype.trim !== 'function') {
    String.prototype.trim = function() {
        return this.replace(/^\s+|\s+$/g, '');
    };
}

//function.bind() shim courtesy of MDN:
if (!Function.prototype.bind) {
		Function.prototype.bind = function (oThis) {
			if (typeof this !== "function") {
				// closest thing possible to the ECMAScript 5 internal IsCallable function
				throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");
			}

			var aArgs = Array.prototype.slice.call(arguments, 1),
				fToBind = this,
				fNOP = function () { },
				fBound = function () {
					return fToBind.apply(this instanceof fNOP ? this : oThis || window, aArgs.concat(Array.prototype.slice.call(arguments)));
				};

			fNOP.prototype = this.prototype;
			fBound.prototype = new fNOP();

			return fBound;
		};
}
// indexOf shim
if (!Array.prototype.indexOf) {
	Array.prototype.indexOf = function(obj, start) {
			for (var i = (start || 0), j = this.length; i < j; i++) {
					if (this[i] === obj) { return i; }
			}
			return -1;
	};
}

window.loadTemplates = function(templatesHtml, processor, processorArg) {
	var i, key = null, parts = templatesHtml.split("~~~~"), templates = {}, _ref;
	for (i = 0, _ref = parts.length; i < _ref; i += 1) {
		if (i === 0) {
			continue;
		}
		if (i % 2 === 1) {
			key = parts[i];
		} else {
			templates["raw_" + key] = parts[i];
			templates[key] = processor(parts[i], processorArg);
		}
	}
	return templates;
};