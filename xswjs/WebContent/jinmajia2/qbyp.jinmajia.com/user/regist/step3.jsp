<%@ page language="java" pageEncoding="utf-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>

<!DOCTYPE html>
<html>
<head>
<META HTTP-EQUIV="pragma" CONTENT="no-cache">
<META HTTP-EQUIV="Cache-Control" CONTENT="no-store, must-revalidate">
<META HTTP-EQUIV="expires" CONTENT="Wed, 26 Feb 1997 08:21:57 GMT">
<META HTTP-EQUIV="expires" CONTENT="0">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
<meta http-equiv="Content-Type" content="text/html; charset=utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=EmulateIE7"/>
<!--20151017头部改版包含css/js start-->
<link href="../../../www.jinmajia.com/web/2015/style/nav.css" tppabs="http://www.jinmajia.com/web/2015/style/nav.css" rev="stylesheet" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="../../../www.jinmajia.com/web/2015/js/nav.js" tppabs="http://www.jinmajia.com/web/2015/js/nav.js"></script>
<!--end-->
<!-- <link href="http://www.jinmajia.com/style/bottom.css" type="text/css" rel="stylesheet"> -->
<!-- <link href="/style/style.css" rel="stylesheet" type="text/css" /> -->
<!-- <link href="/style/user.css" rel="stylesheet" type="text/css" /> -->
<!-- <link href="/style/global.css" rel="stylesheet" type="text/css" /> -->
<!-- <link href="/style/gray.css" type="text/css" rel="stylesheet" /> -->
<link href="../../fi000001.css" tppabs="http://qbyp.jinmajia.com/style,_combine.css+style,_col.css+widgets,_jquery-easyui,_themes,_gray,_easyui.css+widgets,_jquery-easyui,_themes,_icon.css+widgets,_autocomplete,_jquery.autocomplete.css+widgets,_validate,_jquery.validate.css.pagespeed.cc.dJulJQK1vR.css" type="text/css" rel="stylesheet"/>





<script type="text/javascript" src="../../js/json2.js.pagespeed.jm.okh0OosJ5H.js" tppabs="http://qbyp.jinmajia.com/js/json2.js.pagespeed.jm.okh0OosJ5H.js"></script>
<!--[if lt IE 9]>
<script src="../../widgets/jquery/jquery-1.9.1.js" tppabs="http://qbyp.jinmajia.com/widgets/jquery/jquery-1.9.1.js"></script>
<script src="../../../code.jquery.com/jquery-migrate-1.1.1.js" tppabs="http://code.jquery.com/jquery-migrate-1.1.1.js"></script>
<![endif]-->
<!--[if gte IE 9]><!-->
<script src="../../widgets/jquery/jquery-1.9.1.js.pagespeed.jm.It7AQ2eLvN.js" tppabs="http://qbyp.jinmajia.com/widgets/jquery/jquery-1.9.1.js.pagespeed.jm.It7AQ2eLvN.js"></script>
<!-- <script type="text/javascript" src="/widgets/jquery-easyui/jquery.min.js"></script> -->
<script src="../../../code.jquery.com/jquery-migrate-1.1.1.js" tppabs="http://code.jquery.com/jquery-migrate-1.1.1.js"></script>
<!--<![endif]-->
<script src="../../widgets/jquery/plugins/poshy/jquery.poshytip.min.js" tppabs="http://qbyp.jinmajia.com/widgets/jquery/plugins/poshy/jquery.poshytip.min.js"></script>
<!-- cookie operation -->
<script type="text/javascript" src="../../widgets/jquery-easyui/jquery.easyui.min.js" tppabs="http://qbyp.jinmajia.com/widgets/jquery-easyui/jquery.easyui.min.js"></script>
<script type="text/javascript" src="../../widgets/jquery-easyui/locale/easyui-lang-zh_CN.js" tppabs="http://qbyp.jinmajia.com/widgets/jquery-easyui/locale/easyui-lang-zh_CN.js"></script>
<script type="text/javascript" src="../../widgets/jquery/jquery.cookie.js" tppabs="http://qbyp.jinmajia.com/widgets/jquery/jquery.cookie.js"></script>
<script type="text/javascript" src="../../widgets/autocomplete/jquery.autocomplete.js" tppabs="http://qbyp.jinmajia.com/widgets/autocomplete/jquery.autocomplete.js"></script>
<script type="text/javascript" src="../../widgets/jquery/plugins/jquery.placeholderpatch.js" tppabs="http://qbyp.jinmajia.com/widgets/jquery/plugins/jquery.placeholderpatch.js"></script>
<script type="text/javascript" src="../../widgets/validate/jquery.validate.js" tppabs="http://qbyp.jinmajia.com/widgets/validate/jquery.validate.js"></script>
<script type="text/javascript" src="../../widgets/validate/messages_cn.js" tppabs="http://qbyp.jinmajia.com/widgets/validate/messages_cn.js"></script>
<script type="text/javascript" src="../../widgets/WdatePicker/WdatePicker.js" tppabs="http://qbyp.jinmajia.com/widgets/WdatePicker/WdatePicker.js"></script>
<script type="text/javascript" src="../../js/cmath.js" tppabs="http://qbyp.jinmajia.com/js/cmath.js"></script>
<script type="text/javascript" src="../../js/utils.js" tppabs="http://qbyp.jinmajia.com/js/utils.js"></script>
<script type="text/javascript" src="../../js/common.js" tppabs="http://qbyp.jinmajia.com/js/common.js"></script>
<script type="text/javascript" src="../../js/show.js" tppabs="http://qbyp.jinmajia.com/js/show.js"></script>
<script type="text/javascript" src="../../js/json.js" tppabs="http://qbyp.jinmajia.com/js/json.js"></script>
<script type="text/javascript" src="../../js/cookietool.js" tppabs="http://qbyp.jinmajia.com/js/cookietool.js"></script>
<script type="text/javascript" src="../../js/jquery-loading.js" tppabs="http://qbyp.jinmajia.com/js/jquery-loading.js"></script>
<script type="text/javascript" src="../../js/jquery-cielloading.js" tppabs="http://qbyp.jinmajia.com/js/jquery-cielloading.js"></script>
<script type="text/javascript" src="../../js/date.js" tppabs="http://qbyp.jinmajia.com/js/date.js"></script>
<title>用户注册--选择注册通道</title>
<!-- <link href="http://www.jinmajia.com/jinbaoclub/style/style.css" -->
<!-- 	rel="stylesheet" type="text/css" /> -->
<link href="../../style/regist.css" tppabs="http://qbyp.jinmajia.com/style/regist.css" rel="stylesheet" type="text/css"/>
<script type="text/javascript">  
            function browserRedirect(num) {  
            	var menu=".navtop .innav li:eq("+num+") a";
    			$(menu).addClass("now");             
            }  
            browserRedirect();    
</script>
<script type="text/javascript" src="../../market/qbyp/js/linkageProvinceCity.js" tppabs="http://qbyp.jinmajia.com/market/qbyp/js/linkageProvinceCity.js"></script>
<!-- <script type="text/javascript" src="/market/qbyp/js/reg.js"></script> -->
<style>
* {
	margin: 0px; padding: 0px;
}

body {
	font-size: 12px; font-family: "Microsoft Yahei", Tahoma, "SimSun";
}

ul,li {
	list-style: none;
}

img.tt {
	display: block; margin: 0px auto;
}

.b1 {
	border: 1px solid #bbb; width: 920px; height: 295px;
}

ul.layout {
	width: 935px; margin: 0px auto;
}

ul.layout h1 {
	line-height: 29px; text-align: center; font-size: 16px;
	border-bottom: 1px solid #bbb;
}

ul.layout p.sm {
	line-height: 24px; padding: 15px; font-size: 14px; text-indent: 0px;
	padding-bottom: 24px;
}

ul.layout p.lc {
	background: url("../../images/lc.jpg")/*tpa=http://qbyp.jinmajia.com/images/lc.jpg*//*tpa=http://qbyp.jinmajia.com/images/lc.jpg*/ no-repeat 5px 5px; text-align: center;
	padding-top: 40px; margin-top: 30px; border-top: 1px dashed #bbb;text-indent: 0px;
}

ul.layout a.btn {
	background: url("../../images/btn.jpg")/*tpa=http://qbyp.jinmajia.com/images/btn.jpg*//*tpa=http://qbyp.jinmajia.com/images/btn.jpg*/ no-repeat; line-height: 35px;
	height: 39px; width: 193px; text-align: center; font-weight: bold;
	font-size: 14px; display: block; margin-left: auto; margin-right: auto;
	*margin-left: 130px; cursor: pointer; color: #666;
}



#warp {
position: absolute;
width: 650;
height: 50px;
left: 50%;
top: 50%;
margin-left: -100px;
margin-top: -40px;
}
</style>
<script type="text/javascript">var url='http://218.246.20.82:16925/SelfOpenAccount/index.jsp?brokerId=';$(function(){$.ajaxSetup({cache:false});$('#agentId').combobox({'valueField':'agentId','textField':'agentIdAndName','panelHeight':'auto','width':130,'panelHeight':250,'editable':false,formatter:function(row){return row.agentIdAndName;}});});function city_change(){var city=$("#selectCity").val();var pro=$("#selectProv").val();$.ajax({'type':'POST','url':'getAgents.do'/*tpa=http://qbyp.jinmajia.com/user/regist/getAgents.do*/,'data':{"city":city,"pro":pro},'success':function(data){if(data.result){data.payload.unshift({'agentId':'','agentIdAndName':'-------请选择-------'});$('#agentId').combobox({'width':'auto','data':data.payload});}else{$.messager.alert("出错啦",data.message,"error");}},'error':function(){$.messager.alert("出错啦","运营合作方查询失败","error");}});}
function fun_sub(){var belongto=$('#agentId').combobox("getValue");if(belongto==''){$.messager.alert("提示","请选择经纪会员","error");return;}else{window.location.href=url+belongto;}}</script>
</head>
<body onLoad="browserRedirect(7);">
	<!--include virtual="/market/qbyp/inc/header.html"-->
	<script>var ititle=document.title;ititle=ititle.substr(0,ititle.indexOf("-"))+" - 金马甲邮币交易平台";document.title=ititle;</script>
<link href="../../../www.jinmajia.com/web/style/newmenu.css" tppabs="http://www.jinmajia.com/web/style/newmenu.css" rev="stylesheet" rel="stylesheet" type="text/css"/>
<link href="../../../www.jinmajia.com/lyzt/2014/02/coin/style/nav1.css" tppabs="http://www.jinmajia.com/lyzt/2014/02/coin/style/nav1.css" rev="stylesheet" rel="stylesheet" type="text/css"/>
<script type="text/javascript" src="../../../www.jinmajia.com/web/style/js/index.js" tppabs="http://www.jinmajia.com/web/style/js/index.js"></script>
<script type="text/javascript" src="../../../cbjs.baidu.com/js/m.js" tppabs="http://cbjs.baidu.com/js/m.js"></script>
<script type="text/javascript" src="../../../www.jinmajia.com/web/sys/top_s_qbyp.js" tppabs="http://www.jinmajia.com/web/sys/top_s_qbyp.js"></script>




	<br>
	<center>
	<div class="warp2">
	<table width="1000" border="0" align="center" cellpadding="0" cellspacing="0">
  <tr align="left" valign="top"> 

    <td width="10" bgcolor="#F6F6F6" ></td>

    <td bgcolor="#F6F6F6" ><table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
      <tr>
        <td height="34" colspan="2" background="img/index_r7_c4.jpg" tppabs="http://www.hzqbyp.com/img/index_r7_c4.jpg" ><table width="100%"  border="0" cellspacing="0" cellpadding="0">
            <tr>
              <td class="lm_zts" align="center"><font-size="20">网上开户</font-size></td>
              <td width="10" align="right">  </td>
            </tr>
        </table></td>
      </tr>
    </table>
    <table width="100%" border="0" align="center" cellpadding="0" cellspacing="0">
        <tr>
          <td height="10"></td>
        </tr>
      </table> 
<form method="post" action="http://www.hzqbyp.com/khs.asp" name="myforms"  onSubmit="return CheckForm();">

<table width="100%"  border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF" color="#B04703"  style="border:1px solid #ccc; " >
               <tr>
                 <td colspan="3" color="#B04703" class="lm_ztsss" style="padding-left:10px; ">方式一（金马甲）：</td>
               </tr>
               <tr>
                 <td height="50" align="left"  class="lm_ztsss" style="padding-left:10px; ">
 选择授权服务机构，申请在线开户</td>
                 <td align="left">
<SELECT id="testSelectjmj" name=brokerId onchange="selectpeoplejmj()">

<option  value="1188">---------金马甲---------</option>


<option  value="118821">--------1763衙前 包国方------</option>

                  </SELECT></td>
                 <td width="200" align="left">
                 <a id="spanhiddenjmj" class="easyui-linkbutton" href="http://218.246.20.82:16925/SelfOpenAccount/index.jsp?brokerId=1763" onclick="fun_sub();">申请开户</a>
                 </td>
               </tr>
               <tr>
                 <td colspan="3" align="left">&nbsp;</td>
               </tr>
        </table>      



	</form>
		
	
<script language="javascript">
function CheckForm()
{
 
  if (document.myforms.brokerId.value=="")
  {
    alert("请选择授权服务机构！");
	document.myforms.brokerId.focus();
	return false;
  }

  return true;  
}

</script>
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>


<form method="post" action="http://www.hzqbyp.com/khs.asp" name="myforms"  onSubmit="return CheckForm();">

<table width="100%"  border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF"  style="border:1px solid #ccc; " >
               <tr>
                 <td colspan="3"  class="lm_ztsss" style="padding-left:10px; ">方式二（南京）：</td>
               </tr>
               <tr>
                 <td height="50" align="left"  class="lm_ztsss" style="padding-left:10px; ">
 选择授权服务机构，申请在线开户</td>
                 <td align="left">
<SELECT id="testSelectnj" name=brokerId onchange="selectpeoplenj()">

<option  value="1189">---------南京---------</option>
<option  value="1189">---------118821包国方---------</option>
<option  value="1189">---------118890包国方---------</option>


                  </SELECT></td>
                 <td width="200" align="left">
                 	<a id="spanhiddennj" class="easyui-linkbutton" href="http://180.97.2.74:16908/SelfOpenAccount/index.jsp?brokerId=118821" onclick="fun_sub();">申请开户</a>
                 </td>
               </tr>
               <tr>
                 <td colspan="3" align="left">&nbsp;</td>
               </tr>
        </table>      



	</form>
		
	
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>


<form method="post" action="http://www.hzqbyp.com/khs.asp" name="myforms"  onSubmit="return CheckForm();">

<table width="100%"  border="0" align="center" cellpadding="0" cellspacing="0" bgcolor="#FFFFFF"  style="border:1px solid #ccc; " >
               <tr>
                 <td colspan="3"  class="lm_ztsss" style="padding-left:10px; ">方式三（中南）：</td>
               </tr>
               <tr>
                 <td height="50" align="left"  class="lm_ztsss" style="padding-left:10px; ">
 选择授权服务机构，申请在线开户</td>
                 <td align="left">
<SELECT id="testSelectzn" name=brokerId onchange="selectpeoplezn()">

<option  value="1389">---------中南---------</option>
<option  value="1189">---------z010021包国方---------</option>
<option  value="1189">---------z010090包国方---------</option>

                  </SELECT></td>
                 <td width="200" align="left">
                 <a id="spanhiddenzn" class="easyui-linkbutton" href="http://180.97.2.111:15908/SelfOpenAccount/index.jsp?brokerId=z010021" onclick="fun_sub();">申请开户</a>
                 </td>
               </tr>
               <tr>
                 <td colspan="3" align="left">&nbsp;</td>
               </tr>
        </table>      



	</form>
<table width="100%"  border="0" cellspacing="0" cellpadding="0">
  <tr>
    <td>&nbsp;</td>
  </tr>
</table>
		
	</div>
	</center>
	<script type="text/javascript">    
			function IsPhone(){
				var sUserAgent = navigator.userAgent.toLowerCase();  
                var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
                var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
                var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
                var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
                var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
                var bIsAndroid = sUserAgent.match(/android/i) == "android";  
                var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
                var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
                if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)){  
                    return true;
                } 
                return false;
			};
			function selectpeoplejmj(){
            	var selectedpeople = $("#testSelectjmj").get(0).selectedIndex;
				if(selectedpeople==1){
				  if(IsPhone()){
					  window.location.href="phonereg.htm";            	  	
				  }
				  else
					  $("#spanhiddenjmj").attr("href","http://218.246.20.82:16925/SelfOpenAccount/index.jsp?brokerId=1763");
				}		
            };
            function selectpeoplenj(){
            	var selectedpeople = $("#testSelectnj").get(0).selectedIndex;
            	if(selectedpeople==1){
  				  if(IsPhone()){
  					 $("#spanhiddennj").attr("href","http://180.97.2.74:16908/SelfOpenAccount/firmController.fir?funcflg=forward&sine=mobile&brokerId=118821");            	  	
  				  }
  				  else
  					 $("#spanhiddennj").attr("href","http://180.97.2.74:16908/SelfOpenAccount/index.jsp?brokerId=118821");
  				}	
            	if(selectedpeople==2){
  				  if(IsPhone()){
  					 $("#spanhiddennj").attr("href","http://180.97.2.74:16908/SelfOpenAccount/firmController.fir?funcflg=forward&sine=mobile&brokerId=118890");                	  	
  				  }
  				  else
  					 $("#spanhiddennj").attr("href","http://180.97.2.74:16908/SelfOpenAccount/index.jsp?brokerId=118890");
  				}				
            };
            function selectpeoplezn(){
            	var selectedpeople = $("#testSelectzn").get(0).selectedIndex;
            	if(selectedpeople==1){
    				  if(IsPhone()){
    					 $("#spanhiddenzn").attr("href","http://180.97.2.111/SelfOpenAccount/firmController.fir?funcflg=forward&sine=mobile&brokerId=z010021");            	  	
    				  }
    				  else
    					  $("#spanhiddenzn").attr("href","http://180.97.2.111:15908/SelfOpenAccount/index.jsp?brokerId=z010021");
    				}	
              	if(selectedpeople==2){
    				  if(IsPhone()){
    					$("#spanhiddenzn").attr("href","http://180.97.2.111/SelfOpenAccount/firmController.fir?funcflg=forward&sine=mobile&brokerId=z010090");                	  	
    				  }
    				  else
    					  $("#spanhiddenzn").attr("href","http://180.97.2.111:15908/SelfOpenAccount/index.jsp?brokerId=z010090");
    				}						
            };
            function selectpeople(){
            	var selectedpeople = $("#testSelect ").get(0).selectedIndex;
				if(selectedpeople==1){
            	  $("#spanhidden2 ").attr("href","http://218.246.20.82:16925/SelfOpenAccount/index.jsp?brokerId=1764");
                  var sUserAgent = navigator.userAgent.toLowerCase();  
                  var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";  
                  var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";  
                  var bIsMidp = sUserAgent.match(/midp/i) == "midp";  
                  var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";  
                  var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";  
                  var bIsAndroid = sUserAgent.match(/android/i) == "android";  
                  var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";  
                  var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";  
                  if ((bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM)){  
                      window.location.href="phonereg.htm";
                  } 
				}
				if(selectedpeople==2){
	              $("#spanhidden2 ").attr("href","http://180.97.2.111:15908/SelfOpenAccount/index.jsp?brokerId=z010021");
				}
				if(selectedpeople==3){
	              $("#spanhidden2 ").attr("href","http://180.97.2.111:15908/SelfOpenAccount/index.jsp?brokerId=z010090");
				}
				if(selectedpeople==4){
	              $("#spanhidden2 ").attr("href","http://180.97.2.74:16908/SelfOpenAccount/index.jsp?brokerId=118821");
				}
				if(selectedpeople==5){
	              $("#spanhidden2 ").attr("href","http://180.97.2.74:16908/SelfOpenAccount/index.jsp?brokerId=118890");
				}
				
            };
</script>
	<link href="../../../www.jinmajia.com/style/bottom.css" tppabs="http://www.jinmajia.com/style/bottom.css" rel="stylesheet" type="text/css">
<script type="http://www.jinmajia.com/text/JavaScript" language="JavaScript" src="../../js/Std_StranJF.js" tppabs="http://qbyp.jinmajia.com/js/Std_StranJF.js"></script>
<script src="../../js/pool.js" tppabs="http://qbyp.jinmajia.com/js/pool.js"></script>
<div class="cls"></div>
<div id="bottom">
<link href="../../../../www.jinmajia.com/style/bottom.css" tppabs="http://www.jinmajia.com/style/bottom.css" rel="stylesheet" type="text/css">
<script type="http://www.jinmajia.com/text/JavaScript" language="JavaScript" src="../../../js/Std_StranJF.js" tppabs="http://qbyp.jinmajia.com/js/Std_StranJF.js"></script>
<script src="../../../js/pool.js" tppabs="http://qbyp.jinmajia.com/js/pool.js"></script>
<div class="cls"></div>
<div id="bottom">
	<p class="bt_bg" style="background: #A40000;">
		<a target="_blank" href="">关于我们</a>
		<!-- &nbsp;|&nbsp;
		<a target="_blank" href="http://www.jinmajia.com/article/about/cpfw/">产品与服务
		</a> -->
		&nbsp;|&nbsp; <a target="_blank" href="">服务网络 </a>
		<!-- &nbsp;|&nbsp; <a target="_blank"
			href="http://www.jinmajia.com/article/about/zddt/">站点地图</a> -->
		&nbsp;|&nbsp; <a target="_blank" href="" tppabs="http://www.jinmajia.com/article/about/flsm/">法律声明</a>&nbsp;|&nbsp;
		<!-- <a target="_blank" href="http://www.jinmajia.com/article/about/hzhb/">合作伙伴</a>&nbsp;|&nbsp; -->
		<!-- <a target="_blank" href="http://www.jinmajia.com/ads/">广告服务</a>&nbsp;|&nbsp; -->
		<a target="_blank" href="" >诚聘英才</a>&nbsp;|&nbsp;
		<a target="_blank" href="" >联系我们</a>&nbsp;|&nbsp;
		<a href="" target="_blank">留言反馈</a> | <a href="" target="_blank">成功案例</a> |

		<!--<a href="/article/huigu/" target="_blank">专题回顾</a>-->
		<!-- <a href="http://cps.jinmajia.com/" target="_blank">销售联盟</a> | --> <a href="" target="_blank">金马甲沙龙</a>&nbsp;|&nbsp;
		<script language="javascript" type="text/javascript" src="../../../../js.users.51.la/2460081.js" tppabs="http://js.users.51.la/2460081.js"></script>
	<noscript>
		<a href=""target="_blank"><img src="../../../images/icon_0.gif" tppabs="http://qbyp.jinmajia.com/images/icon_0.gif" style="border: none" title=""/></a>
	</noscript>
	</p>
		<p class="bt_txt">
		张彬杨&nbsp;&nbsp;&nbsp;&nbsp;18069751358&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;地址&Tel：
		浙江省杭州市萧山区心意广场7幢102号&nbsp;&nbsp;&nbsp;0571-83588599&nbsp;&nbsp;&nbsp;&nbsp;<br/>
朱超&nbsp;&nbsp;&nbsp;&nbsp;13777430092&nbsp;&nbsp;&nbsp;&nbsp;服务时间：周一至周六&nbsp;9:00
		- 18:00 &nbsp;&nbsp;外网邮箱：hzxswjs@163.com<br>

	</p>
	<p class="bt_txt1">
		Copyright 2013
		杭州牛日资产管理有限公司&nbsp;&nbsp;&nbsp;&nbsp;版权所有&nbsp;&nbsp;&nbsp;&nbsp;<a href="" target="_blank" style='text-decoration: none'><font color='#000;'>京ICP证100202号</font></a>&nbsp;&nbsp;京ICP备10010775号-1
		<!--百度统计代码-->
		<script type="text/javascript">var _bdhmProtocol=(("https:"==document.location.protocol)?" https://":" http://");document.write(unescape("%3Cscript src='"+_bdhmProtocol+"hm.baidu.com/h.js%3F599771b4b334c2d01804a007b46ac388' type='text/javascript'%3E%3C/script%3E"));</script>
	</p>

	<p class="bt_txt">
		<a href="" target="_blank"><img src="../../../../gdsp.jinmajia.com/images/cxpt.jpg" /></a>
		<a href="" target="_blank"><img src="../../../../gdsp.jinmajia.com/images/blxx.gif"/></a>
		<a href="" target="_blank"><img src="../../../../gdsp.jinmajia.com/images/wangjing2.gif""/></a>
		<a href="" target="_blank"><img src="../../../../gdsp.jinmajia.com/images/wsjy.gif"/></a>
	</p>
	</center>
	<script type="text/javascript">var gaJsHost=(("https:"==document.location.protocol)?"https://ssl.":"http://www./");document.write(unescape("%3Cscript src='"+gaJsHost+"google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));</script>
	<script type="text/javascript">try{var pageTracker=_gat._getTracker("UA-15620001-1");pageTracker._setDomainName("http://qbyp.jinmajia.com/article/mtbd/qbyp/pzwzjs/201505/.jinmajia.com");pageTracker._trackPageview();}catch(err){}</script>
	<div style="display: none;">
		<script src="../../../../exp.jiankongbao.com/loadtrace.php-host_id=7561&style=5" tppabs="http://exp.jiankongbao.com/loadtrace.php?host_id=7561&style=5" type="text/javascript"></script>
	</div>
	<style type="text/css">.bt_txt1{text-align:center;color:#353535;font-size:12px;clear:both}.bt_txt1 img{border:0}.bt_txt1 a:link,.bt_txt a:visited{text-decoration:none}.bt_txt1 a:hover{text-decoration:none}</style>
</div>
</div>
</body>
</html>

