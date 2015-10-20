function greenMsg(msg){return"<font color='green'>"+msg+" </font>";}
function redMsg(msg){return"<font color='red'>"+msg+" </font>";}
function isEmpty(str){if(str==null||str.length==0){return true;}
if($.trim(str).length==0){return true;}
return false;}
var Wi=[7,9,10,5,8,4,2,1,6,3,7,9,10,5,8,4,2,1];var ValideCode=[1,0,10,9,8,7,6,5,4,3,2];function IdCardValidate(idCard){if(!/^(\d{15}|\d{18}|\d{17}(?:\d|x|X))$/.test(idCard)){return false;}
if(idCard.length==15){return isValidityBrithBy15IdCard(idCard);}else if(idCard.length==18){var a_idCard=idCard.split("");if(isValidityBrithBy18IdCard(idCard)&&isTrueValidateCodeBy18IdCard(a_idCard)){return true;}else{return false;}}else{return false;}}
function isTrueValidateCodeBy18IdCard(a_idCard){var sum=0;if(a_idCard[17].toLowerCase()=='x'){a_idCard[17]=10;}
for(var i=0;i<17;i++){sum+=Wi[i]*a_idCard[i];}
valCodePosition=sum%11;if(a_idCard[17]==ValideCode[valCodePosition]){return true;}else{return false;}}
function isValidityBrithBy18IdCard(idCard18){var year=idCard18.substring(6,10);var month=idCard18.substring(10,12);var day=idCard18.substring(12,14);var temp_date=new Date(year,parseFloat(month)-1,parseFloat(day));if(temp_date.getFullYear()!=parseFloat(year)||temp_date.getMonth()!=parseFloat(month)-1||temp_date.getDate()!=parseFloat(day)){return false;}else{return true;}}
function isValidityBrithBy15IdCard(idCard15){var year=idCard15.substring(6,8);var month=idCard15.substring(8,10);var day=idCard15.substring(10,12);var temp_date=new Date(year,parseFloat(month)-1,parseFloat(day));if(temp_date.getYear()!=parseFloat(year)||temp_date.getMonth()!=parseFloat(month)-1||temp_date.getDate()!=parseFloat(day)){return false;}else{return true;}}
function validateRealName(valObj,msgObj){var nameVal=valObj.val();var trimVal=$.trim(nameVal);if(isEmpty(trimVal)){msgObj.html(redMsg("ㄨ姓名不能为空"));return false;}else{msgObj.html(greenMsg("√"));return true;}}
var clubUrl="/sortition/";function checkCertificate(valObj,msgObj,focusTag){var ip=valObj;if(!ip||ip.length<=0)
return true;var ct="1";var cno=ip.val();if(isEmpty(cno)){msgObj.html(redMsg("ㄨ 请输入证件号"));if(typeof focusTag=="boolean")
ip.focus();return false;}
if(ct=='1'&&!IdCardValidate(cno)){msgObj.html(redMsg("ㄨ 身份证格式有误"));if(typeof focusTag=="boolean")
ip.focus();return false;}
var ret=false;$.ajax({url:clubUrl+'validate_cert_no.do?certNo='+cno,async:false,success:function(data){if(data.result){msgObj.html(greenMsg("√"));ret=true;}else{msgObj.html(redMsg("ㄨ 此身份证号已经登记"));}}});if(!ret&&typeof focusTag=="boolean"){ip.focus();}
return ret;}
function validateMobile(valObj,msgObj){var mobileVal=valObj.val();var trimVal=$.trim(mobileVal);if(isEmpty(trimVal)){msgObj.html(redMsg("ㄨ 手机不能为空"));return false;}
var valid=/^1[3-9][0-9]\d{8}$/;var flag=valid.test(trimVal);if(!flag){msgObj.html(redMsg("ㄨ 手机格式不正确"));return false;}
var ret=false;$.ajax({url:clubUrl+'validate_mobile.do?mobile='+mobileVal,async:false,success:function(data){if(data.result){msgObj.html(greenMsg("√"));ret=true;return true;}else{msgObj.html(redMsg("ㄨ 此手机号已经登记"));return false;}}});　
return ret;}
function ajaxSubForm(tt){var aid="1";var realName=tt.find(".txtName").val();var realNameObj=tt.find(".txtName");var realNameShowObj=tt.find(".name");var certType="1";var certNo=tt.find(".txtCard").val();var certNoObj=tt.find(".txtCard");var certNoShowObj=tt.find(".card");var mobile=tt.find(".txtTel").val();var mobileObj=tt.find(".txtTel");var mobileShowObj=tt.find(".tel");var jqRule=tt.find(".rule > input[type='checkbox']");var domRule=jqRule.get(0);if(!isCheckRule(domRule)){alert("请勾选页面协议");return;}
if(validateRealName(realNameObj,realNameShowObj)&&checkCertificate(certNoObj,certNoShowObj)&&validateMobile(mobileObj,mobileShowObj)){$.ajax({url:clubUrl+'register_user.do',type:'POST',data:{'aid':aid,'realName':realName,'certType':certType,'certNo':certNo,'mobile':mobile},success:function(data){var msg="";if(data.result){tt.hide();$("#bbb").remove();$(".msg").show();}else{if("isBeforeRegister"==data.message){msg="活动尚未开始，不能注册";}else if("isAfterRegister"==data.message){msg="活动已经结束，不能注册";}
alert(msg);return;}}});}else{alert("校验未通过");return;}}
function isCheckRule(valObj){var ret=false;if(valObj.checked==true){ret=true;}
return ret;}
function dlg_init(){$('#bbb').remove();$(".msg").hide();var ctl=$('.show');ctl.css('display','none');var tt=ctl.clone();tt.attr('id','bbb').css('display','').insertBefore(ctl);var aid="1";var realName=tt.find(".txtName");var realNameShow=tt.find(".name");var certType="1";var certNo=tt.find(".txtCard");var certNoShow=tt.find(".card");var mobile=tt.find(".txtTel");var mobileShow=tt.find(".tel");tt.find(".txtName").blur(function(){validateRealName(realName,realNameShow);});tt.find(".txtCard").blur(function(){checkCertificate(certNo,certNoShow);});tt.find(".txtTel").blur(function(){validateMobile(mobile,mobileShow);});tt.find('#select').click(function(){ajaxSubForm(tt);});}
var clubUrl="/sortition/";function searchCode(certNoInput,msgObj,divObj,realNameObj,certNoView,mobileObj,STime,SAddress,SInfo){var aid="1";var certNo=certNoInput.val();if(isEmpty(certNo)){alert("您输入的身份证为空");return;}
if(!IdCardValidate(certNo)){alert("请输入合法的身份证号码");return;}
$.ajax({url:clubUrl+'search_code.do',type:'POST',data:{'aid':aid,'certNo':certNo},success:function(data){certNoInput.val("");if(data.result){msgObj.html("恭喜您，您中签了！");realNameObj.html(data.payload.realName);certNoView.html(data.payload.certNo);mobileObj.html(data.payload.mobile);divObj.show();}else{if(data.message=="notSelected"){msgObj.html("很遗憾，您没有中签，请关注下次活动!");}else if(data.message=="isBeforeSearch"){msgObj.html("对不起，本申请活动尚未结果，暂不能查询抽签结果！");}else if(data.message=="isAfterSearch"){msgObj.html("对不起，本申请活动已经结束，暂不能查询抽签结果！");}else{msgObj.html("系统异常，请联系管理员");}
divObj.hide();}
msgObj.show();}});}
function dr_init(){$('#drawResult').remove();var ctl=$('.result');ctl.css('display','none');var tt=ctl.clone();tt.attr('id','drawResult').css('display','').insertBefore(ctl);var certNoVal=tt.find(".txtIDCard");var realName=tt.find(".SName");var certNoView=tt.find(".SCard");var mobile=tt.find(".STel");var STime=tt.find(".STime");var SAddress=tt.find(".SAddress");var SInfo=tt.find(".SInfo");var msg=tt.find(".success");msg.hide();var divObj=tt.find(".info_cont");divObj.hide();tt.find('.search').find("input[type='button']").click(function(){searchCode(certNoVal,msg,divObj,realName,certNoView,mobile,STime,SAddress,SInfo);});}
function openTest(){dr_init();popWin("fruit");}
$(document).ready(function(){dlg_init();dr_init();});