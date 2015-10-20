function parseSearchString(url) {
	var resultObj = {};
	var index = url.indexOf("?");
	if (index >= 0 && url.length > index + 1) {
		var ps = url.substring(index + 1).split("&");
		for ( var i = 0; i < ps.length; i++) {
			var pos = ps[i].indexOf('=');
			if (pos > 0) {
				resultObj[ps[i].substring(0, pos)] = decodeURIComponent(ps[i]
						.substring(pos + 1));
			}
		}
	}
	return resultObj;
}
function convertSearchString(param, key) {
	var paramStr = "";
	if (param instanceof String || param instanceof Number
			|| param instanceof Boolean) {
		paramStr += "&" + key + "=" + encodeURIComponent(param);
	} else {
		$.each(param, function(i) {
			var k = key == null ? i : key
					+ (param instanceof Array ? "[" + i + "]" : "." + i);
			paramStr += '&' + convertSearchString(this, k);
		});
	}
	return paramStr.length > 0 ? paramStr.substr(1) : "";
}
function goSearch() {
	var params = {};
	for ( var i = arguments.length - 1; i >= 0; i--) {
		if (typeof arguments[i] == 'object') {
			$.extend(params, arguments[i]);
		}
	}
	var so = parseSearchString(window.location.search);
	for (prop in params) {
		if (!params[prop]) {
			delete so[prop];
		} else {
			so[prop] = params[prop];
		}
	}
	window.location.search = convertSearchString(so);
}
