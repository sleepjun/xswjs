
















if(typeof doyoo=='undefined' || !doyoo){
var d_genId=function(){
    var id ='',ids='0123456789abcdef';
    for(var i=0;i<34;i++){ id+=ids.charAt(Math.floor(Math.random()*16));  }  return id;
};
var doyoo={
env:{
secure:false,
mon:'http://m148.looyu.com/monitor',
chat:'http://hy030a.looyu.com/chat',
file:'http://static.doyoo.net/110402',
compId:26700,
confId:54012,
vId:d_genId(),
lang:'',
fixFlash:0,
subComp:0
}



};



document.write('<div id="doyoo_share" style="display:none;"></div>');
document.write('<lin'+'k rel="stylesheet" type="text/css" href="http://static.doyoo.net/110402/looyu.css?140702"></li'+'nk>');
document.write('<scr'+'ipt type="text/javascript" src="http://static.doyoo.net/110402/looyu.js?141104"></scr'+'ipt>');

}

