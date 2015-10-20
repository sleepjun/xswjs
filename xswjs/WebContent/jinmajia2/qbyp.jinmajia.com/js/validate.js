function isEmpty(str) {
	if (str == null || str.length == 0) {
		return true;
	}
	if ($.trim(str).length == 0) {
		return true;
	}
	return false;
}
function redMsg(msg) {
	return "<font color='red'>" + msg + " </font>";
}
function onblur_checkrealname() {
	var boo = false;
	var realname = $("#realname").val();
	if (isEmpty(realname) == true) {
		$("#realname_Span").html(redMsg("ㄨ 请输入真实姓名"));
		boo = false;
	} else {
		var isChinese = /[^\u4E00-\u9FA5]/;
		if (realname.match(isChinese) != null) {
			$("#realname_Span").html(redMsg("ㄨ 只能输入汉字"));
			boo = false;
		} else {
			$("#realname_Span").html(redMsg("√"));
			boo = true;
		}
		;
	}
	return boo;
}

function onblur_checkmobile() {
	var boo = false;
	var sa = $("#mobile");
	if (isEmpty(sa.val()) == true) {
		$("#mobile_Span").html(redMsg("ㄨ 手机号不能为空"));
		boo = false;
	} else {
		if (!isMobel(sa.val())) {
			$("#mobile_Span").html(redMsgW("ㄨ 手机号格式不正确"));
			subflag = false;
		} else {
			$("#mobile_Span").html(redMsg("√"));
			boo = true;
		}
	}
	return boo;
}

function onblur_checkZipCode() {
	var boo = false;
	var sa = $("#zipCode");
	if (isEmpty(sa.val()) == true) {
		$("#zipCode_Span").html(redMsg("ㄨ 邮编不能为空"));
		boo = false;
	} else {
		if (isNumberZSRE(sa.val()) == true) {
			if (sa.val().length != 6) {
				$("#zipCode_Span").html(redMsgW("ㄨ 请输入6位数字"));
				boo = false;
			} else {
				$("#zipCode_Span").html(redMsg("√"));
				boo = true;
			}
		} else {
			$("#zipCode_Span").html(redMsgW("ㄨ 请输入数字"));
			boo = false;
		}
	}
	return boo;
}
/**
 * 身份证15位编码规则：dddddd yymmdd xx p dddddd：地区码 yymmdd: 出生年月日 xx: 顺序类编码，无法确定 p:
 * 性别，奇数为男，偶数为女
 * <p />
 * 身份证18位编码规则：dddddd yyyymmdd xxx y dddddd：地区码 yyyymmdd: 出生年月日
 * xxx:顺序类编码，无法确定，奇数为男，偶数为女 y: 校验码，该位数值可通过前17位计算获得
 * <p />
 * 18位号码加权因子为(从右到左) Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2,1 ]
 * 验证位 Y = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ] 校验位计算公式：Y_P = mod( ∑(Ai×Wi),11 )
 * i为身份证号码从右往左数的 2...18 位; Y_P为脚丫校验码所在校验码数组位置
 * 
 */

var Wi = [ 7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2, 1 ];// 加权因子
var ValideCode = [ 1, 0, 10, 9, 8, 7, 6, 5, 4, 3, 2 ];// 身份证验证位值.10代表X
function IdCardValidate(idCard) {
	if (!/^(\d{15}|\d{18}|\d{17}(?:\d|x|X))$/.test(idCard)) {
		return false;
	}
	if (idCard.length == 15) {
		return isValidityBrithBy15IdCard(idCard);
	} else if (idCard.length == 18) {
		var a_idCard = idCard.split("");// 得到身份证数组
		if (isValidityBrithBy18IdCard(idCard)
				&& isTrueValidateCodeBy18IdCard(a_idCard)) {
			return true;
		} else {
			return false;
		}
	} else {
		return false;
	}
}

// 去掉字符串头尾空格
function trim(str) {
	return str.replace(/(^\s*)|(\s*$)/g, "");
}

/**
 * 判断身份证号码为18位时最后的验证位是否正确
 * 
 * @param a_idCard
 *            身份证号码数组
 * @return
 */
function isTrueValidateCodeBy18IdCard(a_idCard) {
	var sum = 0; // 声明加权求和变量
	if (a_idCard[17].toLowerCase() == 'x') {
		a_idCard[17] = 10;// 将最后位为x的验证码替换为10方便后续操作
	}
	for (var i = 0; i < 17; i++) {
		sum += Wi[i] * a_idCard[i];// 加权求和
	}
	valCodePosition = sum % 11;// 得到验证码所位置
	if (a_idCard[17] == ValideCode[valCodePosition]) {
		return true;
	} else {
		return false;
	}
}

/**
 * 验证18位数身份证号码中的生日是否是有效生日
 * 
 * @param idCard
 *            18位书身份证字符串
 * @return
 */
function isValidityBrithBy18IdCard(idCard18) {
	var year = idCard18.substring(6, 10);
	var month = idCard18.substring(10, 12);
	var day = idCard18.substring(12, 14);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	// 这里用getFullYear()获取年份，避免千年虫问题
	if (temp_date.getFullYear() != parseFloat(year)
			|| temp_date.getMonth() != parseFloat(month) - 1
			|| temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
}
/**
 * 验证15位数身份证号码中的生日是否是有效生日
 * 
 * @param idCard15
 *            15位书身份证字符串
 * @return
 */
function isValidityBrithBy15IdCard(idCard15) {
	var year = idCard15.substring(6, 8);
	var month = idCard15.substring(8, 10);
	var day = idCard15.substring(10, 12);
	var temp_date = new Date(year, parseFloat(month) - 1, parseFloat(day));
	// 对于老身份证中的你年龄则不需考虑千年虫问题而使用getYear()方法
	if (temp_date.getYear() != parseFloat(year)
			|| temp_date.getMonth() != parseFloat(month) - 1
			|| temp_date.getDate() != parseFloat(day)) {
		return false;
	} else {
		return true;
	}
}

function isMobel(value) {
	if (/^1[3-9][0-9]\d{8}$/.test(value)) {
		return true;
	} else {
		return false;
	}
}

function isNumberZSRE(num) {
	var re = /^[-]?\d*\.?\d*$/;
	if (num != null && typeof (num) != 'string') {
		num = num.toString();
	}
	if (!num.match(re)) {
		return false;
	}
	return true;
}

// -----地址-----
function onblur_checkcontactAddress() {
	var boo = false;
	var sa = $("#contactAddress");
	if (isEmpty(sa.val()) == true) {
		$("#contactAddress_Span").html(redMsg("ㄨ 地址不能为空"));
		subflag = false;
	} else {
		if (sa.val().length > 50) {
			$("#contactAddress_Span").html(redMsg("ㄨ 不能超过50个字"));
			subflag = false;
		} else {
			$("#contactAddress_Span").html(redMsg("√"));
			boo = true;
		}
	}
	return boo;
}
function onfocus_checkpasw() {
	$("#password_Span").html(redMsgW("由8-20个英文字母或数字组成"));
}
function onblur_checkpasw() {
	var boo = false;
	var sa = $("#password");
	if (isEmpty(sa.val()) == true) {
		$("#password_Span").html(redMsg("ㄨ 请输入密码"));
		boo = false;
	} else {
		var s = sa.val().match(/^[a-zA-Z0-9]{8,20}$/);
		if (s != null) {
			$("#password_Span").html(redMsgW("√"));
			boo = true;
		} else {
			$("#password_Span").html(redMsgW("ㄨ 密码格式或位数不对"));
			boo = false;
		}
	}
	return boo;
}

function onfocus_checkpasw1() {
	$("#password1_Span").html(redMsgW("请再输入一遍您上面填写的密码"));
}
function onblur_checkpasw1() {
	var boo = false;
	var sa1 = $("#password");
	var sa2 = $("#password1");
	if (isEmpty(sa1.val()) == false && isEmpty(sa2.val()) == false) {
		if (sa1.val() != sa2.val()) {
			$("#password1_Span").html(redMsgW("ㄨ 两次输入的密码不一致"));
			boo = false;
		} else {
			$("#password1_Span").html(redMsgW("√"));
			boo = true;
		}
	} else {
		if (isEmpty(sa1.val()) == true) {
			$("#password1_Span").html(redMsgW("ㄨ 两次输入的密码不一致"));
			boo = false;
		} else {
			$("#password1_Span").html(redMsgW("ㄨ 不能为空"));
			boo = false;
		}

	}
	return boo;
}
function onfocus_checkUsername() {
	$("#username_Span").html(
			redMsgW("会员登录名须以字母开头，由4-16个小写英文字母、数字、下划线组成。登录名不能修改，请谨慎填写"));
}

// -----邮箱-----
function onfocus_checkemail() {
	$("#email_Span").html(redMsgW("请填写您的有效邮箱"));
}
function redMsgW(msgw) {
	return "<font color='red'>" + msgw + " </font>";
}
function onfocus_checkcertificate() {
	$("#certificate_Span").html(redMsgW("请您输入正确的证件号码"));
}
function onfocus_checkmobile() {
	$("#mobile_Span").html(redMsg("请填手机号"));
}
function onfocus_checkZipCode() {
	$("#zipCode_Span").html(redMsg("请输入邮编"));
}
function onfocus_checkcontactAddress() {
	$("#contactAddress_Span").html(redMsg("请输入地址"));
}

// ==========老交易用户==============================================================================
function onfocus_checkoldusername() {
	$("#oldusername_Span").html(redMsgW("请填写您已有的金马甲帐户用户名"));
}
function onblur_checkoldusername() {
	var sa = $("#oldusername");
	if (isEmpty(sa.val()) == true) {
		$("#oldusername_Span").html(redMsg("ㄨ 用户名不能为空"));
	}
}
function onfocus_checkoldpassword() {
	$("#oldpassword_Span").html(redMsgW("请填写您的密码"));
}
function onblur_checkoldpassword() {
	var sa = $("#oldpassword");
	if (isEmpty(sa.val()) == true) {
		$("#oldpassword_Span").html(redMsgW("ㄨ 密码不能为空"));
	}
}
function oldUsernamepaw() {
	var subflag = true;
	var sa = $("#oldusername");
	if (isEmpty(sa.val()) == true) {
		$("#oldusername_Span").html(redMsg("请输入用户名"));
		subflag = false;
	} else {
		$("#oldusername_Span").html(redMsg(""));
	}

	var sa = $("#oldpassword");
	if (isEmpty(sa.val()) == true) {
		$("#oldpassword_Span").html(redMsg("请输入密码"));
		subflag = false;
	} else {
		$("#oldpassword_Span").html(redMsg(""));
	}
	return subflag;
}

// -----交易用户姓名-----
function onfocus_checkrealname() {
	$("#realname_Span").html(redMsgW("请务必填写您的真实姓名(只能输入汉字)"));
}
function onfocus_checkbankaccount() {
	$("#bankAccount_Span").html(redMsgW("请填写银行账号"));
}

function onblur_checkbankaccount() {
	var boo = false;
	var btype = $("#bankType");
	var ba = $("#bankAccount");
	if (btype.val() != "no") {
		if (isEmpty(ba.val()) == true) {
			$("#bankAccount_Span").html(redMsgW("ㄨ 银行账户不能为空"));
			boo = false;
		} else {
			$("#bankAccount_Span").html(redMsgW("√"));
			boo = true;
		}
	}
	return boo;
}