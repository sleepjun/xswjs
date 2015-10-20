function formatCurrency(num,options){num=num.toString().replace(/\$|\,/g,'');if(isNaN(num)){num="0";}
var sign=(num==(num=Math.abs(num)));num=Math.floor(num*100+0.50000000001);var cents=num%100;num=Math.floor(num/100).toString();if(cents<10){cents="0"+cents;}
for(var i=0;i<Math.floor((num.length-(1+i))/3);i++){num=num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));}
var ret='';if(!options||options.symbol){ret+='￥';}
ret+=((sign)?'':'-')+num;if(!options||!options.ignoreCent){ret+='.'+cents;}
return ret;}
function formatAmount(num){num=num.toString().replace(/\,/g,'');if(isNaN(num)){num="0";}
var sign=(num==(num=Math.abs(num)));for(var i=0;i<Math.floor((num.length-(1+i))/3);i++){num=num.substring(0,num.length-(4*i+3))+','+num.substring(num.length-(4*i+3));}
return(((sign)?'':'-')+num);}
function formatPercent(num){if(num*100==Math.floor(num*100)){return num*100+"%";}
return num*1000+"‰";}
function accAdd(arg1,arg2){var r1,r2,m;try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
m=Math.pow(10,Math.max(r1,r2));return(arg1*m+arg2*m)/m;}
function accSub(arg1,arg2){var r1,r2,m,n;try{r1=arg1.toString().split(".")[1].length;}catch(e){r1=0;}
try{r2=arg2.toString().split(".")[1].length;}catch(e){r2=0;}
m=Math.pow(10,Math.max(r1,r2));n=(r1>=r2)?r1:r2;return((arg1*m-arg2*m)/m).toFixed(n);}
function accMul(arg1,arg2){var m=0,s1=arg1.toString(),s2=arg2.toString();try{m+=s1.split(".")[1].length;}catch(e){}
try{m+=s2.split(".")[1].length;}catch(e){}
return Number(s1.replace(".",""))*Number(s2.replace(".",""))/Math.pow(10,m);}
function accDiv(arg1,arg2){var t1=0,t2=0,r1,r2;try{t1=arg1.toString().split(".")[1].length;}catch(e){}
try{t2=arg2.toString().split(".")[1].length;}catch(e){}
with(Math){r1=Number(arg1.toString().replace(".",""));r2=Number(arg2.toString().replace(".",""));return(r1/r2)*pow(10,t2-t1);}}
Number.prototype.add=function(arg){return accAdd(arg,this);};Number.prototype.sub=function(arg){return accSub(this,arg);};Number.prototype.mul=function(arg){return accMul(arg,this);};Number.prototype.div=function(arg){return accDiv(this,arg);};