/*function readhis() {
 var json = eval("(" + $.cookie("packhis") + ")");
 var list = "";
 if (json == null) {
 return;
 }
 for ( var i = 0; i < json.length; i++) {
 list = "<a href='http://qbyp.jinmajia.com/market/s/p/" + json[json.length - i - 1].packid + "/index.shtml' target='_blank' title='"
 + json[json.length - i - 1].packname + "'>"
 + json[json.length - i - 1].packname + "</a>";
 $("#his" + i).html(list);
 }
 }*/
/*function writecookie(packname, packid) {
 var canAdd = true;// 初始可以插入cookie信息
 var packhis = $.cookie("packhis");
 var len = 0;
 if (packhis) {
 packhis = eval("(" + packhis + ")");
 len = packhis.length;
 $(packhis).each(function() {
 if (this.packname == packname) {
 canAdd = false; // 已经存在，不能插入
 return false;
 }
 });
 }

 if (canAdd == true) {
 var json = "[";
 var start = 0;
 if (len > 7) {
 start = 1;
 }
 for ( var i = start; i < len; i++) {
 json = json + "{\"packname\":\"" + packhis[i].packname
 + "\",\"packid\":\"" + packhis[i].packid + "\"},";
 }
 json = json + "{\"packname\":\"" + packname + "\",\"packid\":\""
 + packid + "\"}]";
 $.cookie("packhis", json, {
 expires : 365,
 path : '/'
 });
 }
 }*/

function writecookie(packname, packid, standard, year, code) {
	var packhis = $.cookie("packhis");
	var len = 0;
	var time = new Date().getTime();
	// var newjson = "{\"packname\":\"" + packname + "\",\"packid:\"" + packid
	// + "\",\"time:\"" + time + "\"}";
	var newjson = {
		'packname' : packname,
		'packid' : packid,
		'time' : time,
		'standard' : standard,
		'year' : year,
		'code' : code
	};
	// newjson = eval("(" + newjson + ")");
	if (packhis) {
		packhis = eval("(" + packhis + ")");
		len = packhis.length;
		for ( var i = 0; i < len; i++) {
			if (packhis[i].packname == packname) {
				packhis.splice(i, 1);
				break;
			}
		}
		packhis.unshift(newjson);
		if (packhis.length > 7) {
			packhis = packhis.slice(0, 7);
		}
		var packhis2 = JSON.stringify(packhis);
		$.cookie("packhis", packhis2, {
			expires : 365,
			path : '/'
		});
	} else {
		packhis = new Array();
		packhis.unshift(newjson);
		var packhis2 = JSON.stringify(packhis);
		$.cookie("packhis", packhis2, {
			expires : 365,
			path : '/'
		});
	}
}

function readhis() {
	var json = eval("(" + $.cookie("packhis") + ")");
	var list = "";
	if (json == null) {
		return;
	}
	for ( var i = 0; i < json.length; i++) {
		list = "<a href='http://qbyp.jinmajia.com/market/s/p/" + json[i].packid+ "/index.shtml' target='_blank' title='" + json[i].packname
				+ "'>" + json[i].packname + "</a>";
		$("#his" + i).html(list);
	}
}
function readhis1() {
	var json = eval("(" + $.cookie("packhis") + ")");
	var list = "";
	if (json == null) {
		return;
	}
	for ( var i = 0; i < 6; i++) {
		if (i > json.length-1) {
			$('#c' + i).html("-");
			$('#n' + i).html("-");
			$('#s' + i).html("-");
			$('#y' + i).html("-");
			continue;
		}
		var code = json[i].code;
		var packid = json[i].packid;
		var name = json[i].packname;
		var year = json[i].year;
		var standard = json[i].standard;
		$('#c' + i).html(
				"<a href='http://qbyp.jinmajia.com/market/s/p/" + json[i].packid+ "/index.shtml' target='_blank''>" + code
						+ "</a>");
		$('#n' + i).html(
				"<a href='http://qbyp.jinmajia.com/market/s/p/" + json[i].packid+ "/index.shtml' target='_blank''>" + name
						+ "</a>");
		$('#s' + i).html(standard);
		$('#y' + i).html(year);
	}
}
