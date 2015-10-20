<%@ page language="java" pageEncoding="utf-8"%>
<%@taglib uri="/struts-tags" prefix="s" %>
<%@ include file="Header.jsp"%>
	<div class="warp2" align="center">
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
<%@ include file="Bottom.jsp"%>