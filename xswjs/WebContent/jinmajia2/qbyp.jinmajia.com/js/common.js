function dgparams(dg, qform, bgo) {
	var qp = dg.datagrid('options').queryParams = {};
	qform.find('[name]').each(function(index, element) {
		var e = $(element);
		var n = e.attr('name');
		var v = e.val();
		if (v) {
			qp[n] = v;
		}
	});
	if (bgo) {
		dg.datagrid("reload");
	}
}

function getSelectedOne(dg) {
	var data = dg.datagrid("getSelections");
	if (!data || data.length < 1) {
		$.messager.alert('提示', '必须选择一条记录', 'warning');
		return;
	}
	if (data && data.length > 1) {
		$.messager.alert('提示', '只能选择一条记录', 'warning');
		return;
	}
	return data[0];
}
function parseElementDataOptions(_ctl) {
	var t = $(_ctl);
	var _opt = {};
	var s = $.trim(t.attr("data-options"));
	if (s) {
		var _9 = s.substring(0, 1);
		var _a = s.substring(s.length - 1, 1);
		if (_9 != "{") {
			s = "{" + s;
		}
		if (_a != "}") {
			s = s + "}";
		}
		_opt = (new Function("return " + s))();
	}
	return _opt;
}
function copyToClipboard(txt) {
	try {
		if (window.clipboardData) {
			window.clipboardData.clearData();
			window.clipboardData.setData("text", txt);
			alert("数据已经复制到剪贴板");
		}
	} catch (e) {

	}
}
$.extend($.fn.validatebox.defaults.rules, {
	fun : {
		validator : function(value, param) {
			var fn = typeof (param[0]) === 'function' ? param[0]
					: eval(param[0]);
			if (fn) {
				var msg = fn.call(null, value);
				if (msg && typeof (msg) == 'string') {
					this.message = msg;
					return false;
				}
				return true;
			}
			return true;
		},
		message : ''
	},
	regex : {
		validator : function(value, param) {
			var reg = typeof (param[0]) == 'string' ? new RegExp(param[0])
					: param[0];
			var ret = reg.test(value);
			return ret;
		},
		message : '{1}'
	},
	certNo : {
		validator : function(value, param) {
			var v = isNaN(param[0]) ? $(param[0]).val() : param[0];
			if (v == 1) {
				return IdCardValidate(value, param);
			}
			return value ? true : false;
		},
		message : '{1}'
	},
	bankAccount : {
		validator : function(value, param) {
			var v = param[0].charAt(0) == '#' ? $(param[0]).val() : param[0];
			if (v) {
				return value;
			}
			return true;
		},
		message : '{1}'
	},
	mobile : {
		validator : function(value, param) {
			return /^1[3-8]\d{9}$/g.test(value);
		},
		message : '{1}'
	},
	minLength : {
		validator : function(value, param) {
			return value.length >= param[0];
		},
		message : '{1}'
	},
	equals : {
		validator : function(value, param) {
			return value == $(param[0]).val();
		},
		message : '{1}'
	}
});
