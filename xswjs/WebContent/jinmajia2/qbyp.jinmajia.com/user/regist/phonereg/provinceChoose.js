var queryProvince = ["全国","北京市", "上海市", /*"天津市",*/ "重庆市", "浙江省", "江苏省", "广东省", "福建省", "湖南省", "湖北省", "辽宁省",
    "吉林省", "黑龙江省", "河北省", "河南省", "山东省", "陕西省", "甘肃省", "新疆维吾尔族自治区", "青海省", "山西省", "四川省",
    "贵州省", "安徽省", "江西省", "云南省", "内蒙古自治区", "西藏藏族自治区", "广西壮族自治区", "宁夏回族自治区", "海南省"];
var province = ["北京", "上海", "重庆", "浙江", "江苏", "广东", "福建", "湖南", "湖北", "辽宁",
    "吉林", "黑龙江", "河北", "河南", "山东", "陕西", "甘肃", "新疆", "青海", "山西", "四川",
    "贵州", "安徽", "江西", "云南", "内蒙古", "西藏", "广西", "宁夏", "海南"/*, "香港", "澳门", "台湾"*/];
//定义数组,存储城市信息
var beijing = ["北京"];
var shanghai = ["上海"];
//var tianjing = ["河东", "南开", "河西", "河北", "和平", "红桥", "东丽", "津南", "西青", "北辰", "塘沽", "汉沽", "大港", "蓟县", "宝坻", "宁河", "静海", "武清"];
var chongqing = ["重庆"];
var jiangsu = ["南京", "无锡", "常州", "徐州", "苏州", "南通", "连云港", "淮安", "扬州", "盐城", "镇江", "泰州", "宿迁"];
var zhejiang = ["杭州", "宁波", "温州", "嘉兴", "湖州", "绍兴", "金华", "衢州", "舟山", "台州", "丽水"];
var guangdong = ["广州", "韶关", "深圳", "珠海", "汕头", "佛山", "江门", "湛江", "茂名", "肇庆", "惠州", "梅州", "汕尾", "河源", "阳江", "清远", "东莞", "中山", "潮州", "揭阳"];
var fujiang = ["福州", "厦门", "莆田", "三明", "泉州", "漳州", "南平", "龙岩", "宁德"];
var hunan = ["长沙", "株洲", "湘潭", "衡阳", "邵阳", "岳阳", "常德", "张家界", "益阳", "郴州", "永州", "怀化", "娄底", "湘西土家苗族自治州"];
var hubei = ["武汉", "襄阳", "黄石", "十堰", "宜昌", "鄂州", "荆门", "孝感", "荆州", "黄冈", "咸宁", "随州", "恩施土家族苗族自治州","仙桃","潜江","天门","神农架林区"];
var liaoning = ["沈阳", "大连", "鞍山", "抚顺", "本溪", "丹东", "锦州", "营口", "阜新", "辽阳", "盘锦", "铁岭", "朝阳", "葫芦岛"];
var jilin = ["长春", "吉林", "四平", "辽源", "通化", "白山", "松原", "白城", "延边朝鲜族自治区"];
var heilongjiang = ["哈尔滨", "齐齐哈尔", "鸡西", "鹤岗","双鸭山","大庆","伊春","七台河", "佳木斯", "牡丹江","黑河", "绥化","大兴安岭地区","松花江地区","农垦系统"];
var hebei = ["石家庄", "唐山", "秦皇岛", "邯郸", "邢台", "保定", "张家口", "承德", "沧州","廊坊","衡水","沧州行署"];
var henan = ["郑州", "开封", "洛阳", "平顶山", "安阳", "鹤壁", "新乡", "焦作", "濮阳", "许昌", "漯河", "三门峡", "南阳", "商丘", "信阳", "周口", "驻马店","济源"];
var shandong = ["济南", "青岛", "菏泽", "淄博", "枣庄", "东营", "烟台", "潍坊", "济宁", "泰安", "威海", "日照","莱芜","临沂","聊城", "滨州", "德州", "青岛市增补","潍坊市增补","烟台市增补"];
var shangxi = ["西安", "宝鸡", "咸阳", "渭南", "铜川", "延安", "榆林", "汉中", "安康", "杨林高新农业示范区"];
var gansu = ["兰州", "嘉峪关", "金昌", "金川", "白银", "天水", "武威", "张掖", "酒泉", "平凉", "庆阳", "定西", "陇南", "临夏回族自治州", "甘南藏族自治州"];
var qinghai = ["西宁", "海东地区", "海北藏族自治州", "黄南藏族自治州", "海南藏族自治州", "果洛藏族自治州", "玉树藏族自治州", "海西蒙古族藏族自治州"];
var xinjiang = ["乌鲁木齐", "奎屯", "石河子", "昌吉回族自治州", "吐鲁番地区", "库尔勒", "阿克苏地区", "喀什地区", "伊犁哈萨克自治州", "克拉玛依", "塔城地区", "哈密地区", "和田地区", "阿勒泰地区", "阿图什", "博乐","克孜勒苏柯尔克孜自治州","巴音郭楞蒙古自治州","博尔塔拉蒙古自治州"];
var shanxi = ["太原", "大同", "阳泉", "长治", "晋城", "朔州", "晋中", "运城", "忻州", "临汾", "吕梁","雁北"];
var sichuan = ["成都", "自贡", "攀枝花", "泸州", "德阳", "绵阳", "广元", "遂宁", "内江", "乐山", "南充", "眉山", "宜宾", "广安", "达州", "雅安", "巴中", "资阳", "阿坝", "甘孜", "凉山彝族自治州"];
var guizhou = ["贵阳", "六盘水", "遵义", "安顺", "黔南布依族苗族自治州", "黔西南布依族苗族自治州", "黔东南苗族侗族自治州", "铜仁", "毕节"];
var anhui = ["合肥", "芜湖", "安庆", "马鞍山", "阜阳", "六安", "滁州", "宿州", "蚌埠", "巢湖", "淮南", "宣城", "亳州", "淮北", "铜陵", "黄山", "池州"];
var jiangxi = ["南昌", "九江", "景德镇", "萍乡", "新余", "鹰潭", "赣州", "宜春", "上饶", "吉安", "抚州","南昌市,省直系统"];
var yunnan = ["昆明", "曲靖", "玉溪", "保山", "昭通", "丽江", "普洱", "临沧", "楚雄彝族自治州", "大理白族自治州", "红河哈尼族彝族自治州", "文山壮族苗族自治州", "西双版纳傣族自治州", "德宏傣族景颇族自治州", "怒江傈僳族自治州", "迪庆藏族自治州"];
var neimenggu = ["呼和浩特", "包头", "乌海", "赤峰", "通辽", "鄂尔多斯", "呼伦贝尔盟", "巴彦淖尔盟", "乌兰察布盟","兴安盟","锡林郭勒盟","阿拉善盟"];
var guangxi = ["南宁", "柳州", "桂林", "梧州", "北海", "防城港", "钦州", "贵港", "玉林", "百色", "贺州", "河池","来宾", "崇左","桂林地区"];
var xizang = ["拉萨", "昌都地区", "林芝地区", "山南地区", "日喀则地区", "那曲地区", "阿里地区"];
var ningxia = ["银川", "石嘴山", "吴忠", "固原", "中卫"];
var hainan = ["海口", "三亚","洋浦开发区","五指山","桂海"];
/*var xianggang = ["中西区", "湾仔区", "东区", "南区", "九龙城区", "油尖旺区", "观塘区", "黄大仙区", "深水埗区", "北区", "大埔区", "沙田区", "西贡区", "元朗区", "屯门区", "荃湾区", "葵青区", "离岛区"];
var taiwan = ["台北", "高雄", "基隆", "台中", "台南", "新竹", "嘉义"];
var aomeng = ["澳门半岛", "氹仔岛", "路环岛"];*/

var car_judge0 = ["北京市","上海市"];//0 99
var car_judge1 = ["河北省","吉林省","福建省","海南省","云南省","青海省"];//4 0
var car_judge2 = ["山西省"];//6 99
var car_judge3 = ["内蒙古自治区"];//4 99
var car_judge4 = ["辽宁省","浙江省","河南省","陕西省"];//99 99
var car_judge5 = ["黑龙江省","甘肃省"];//99 0
var car_judge6 = ["江苏省","江西省"];//6 6
var car_judge7 = ["安徽省","广西壮族自治区","重庆市","四川省","新疆维吾尔族自治区"];//6 0
var car_judge8 = ["山东省"];// 99 4
var car_judge9 = ["湖北省"];//5 0
var car_judge10 = ["湖南省","贵州省"];//0 6
var car_judge11 = ["广东省","宁夏回族自治区"];//6 4
var car_judge12 = ["西藏藏族自治区"];//0 4

var errorCity = ["蒙J","蒙F","蒙H","蒙M","蒙A","蒙D","蒙G","蒙E","桂A","桂B","桂C","桂D","桂E","桂P","桂N","桂R","桂K","桂L","桂J","桂M","桂G","桂F","桂H","川A","川B","川D","川E","川F","川C","川H","川J","川K","川R","川Z","川Q","川X","川S","川T","川Y","川M","川U","川V","陕E","辽M","陕B","陕D","陕K","川L","蒙B","蒙C"];


function showAttr(name){
	var dialogCjh = document.getElementById(name);
	dialogCjh.style.display = 'block';
}
function hideAttr(name){
	var dialogCjh = document.getElementById(name);
	dialogCjh.style.display = 'none';
}
//通过车牌判断车架号及发动机号输入多少位

function getQueryInfor(carPrefix,cityName){
	$("#textPrefix").text(carPrefix);
	$("#textProvince").text(cityName);
}

function arrayFilter(object){
	$.grep(car_judge0,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入完整的发动机号");
			$("#frameNumber").val("请输入车架号的后6位");
			$("#engine_content").val("请输入完整的发动机号");
			$("#frame_content").val("请输入车架号的后6位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge1,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后6位");
			$("#frameNumber").val("请输入车架号的后4位");
			$("#engine_content").val("请输入发动机号的后6位");
			$("#frame_content").val("请输入车架号的后4位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge2,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入完整的发动机号");
			$("#frameNumber").val("请输入车架号的后6位");
			$("#engine_content").val("请输入完整的发动机号");
			$("#frame_content").val("请输入车架号的后6位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge3,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入完整的发动机号");
			$("#frameNumber").val("请输入车架号的后4位");
			$("#engine_content").val("请输入完整的发动机号");
			$("#frame_content").val("请输入车架号的后4位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge4,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入完整的发动机号");
			$("#frameNumber").val("请输入完整的车架号");
			$("#engine_content").val("请输入完整的发动机号");
			$("#frame_content").val("请输入完整的车架号");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge5,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后6位");
			$("#frameNumber").val("请输入完整的车架号");
			$("#engine_content").val("请输入发动机号的后6位");
			$("#frame_content").val("请输入完整的车架号");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge6,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后6位");
			$("#frameNumber").val("请输入车架号的后6位");
			$("#engine_content").val("请输入发动机号的后6位");
			$("#frame_content").val("请输入车架号的后6位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge7,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后6位");
			$("#frameNumber").val("请输入车架号的后6位");
			$("#engine_content").val("请输入发动机号的后6位");
			$("#frame_content").val("请输入车架号的后6位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge8,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后4位");
			$("#frameNumber").val("请输入完整的车架号");
			$("#engine_content").val("请输入发动机号的后4位");
			$("#frame_content").val("请输入完整的车架号");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge9,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后6位");
			$("#frameNumber").val("请输入车架号的后5位");
			$("#engine_content").val("请输入发动机号的后6位");
			$("#frame_content").val("请输入车架号的后5位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge10,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后6位");
			$("#frameNumber").val("请输入车架号的后6位");
			$("#engine_content").val("请输入发动机号的后6位");
			$("#frame_content").val("请输入车架号的后6位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge11,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后4位");
			$("#frameNumber").val("请输入车架号的后6位");
			$("#engine_content").val("请输入发动机号鄂后4位");
			$("#frame_content").val("请输入车架号的后6位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
	$.grep(car_judge12,function(val,index){
		if(val==object){
			$("#engineNumber").css("color","#CCC");
			$("#frameNumber").css("color","#CCC");
			$("#engineNumber").val("请输入发动机号的后4位");
			$("#frameNumber").val("请输入车架号的后6位");
			$("#engine_content").val("请输入发动机号的后4位");
			$("#frame_content").val("请输入车架号的后6位");
			$("#text_engine").html("*");
			$("#text_frame").html("");
		}
	});
}

//查询区域的切换
function provinceChoose(name){
	var provinceName = $(name).text();
	var province = "";
	switch(provinceName){
	case "全国":
		province="全国";
		break;
	case "北京市":
		province="北京市";
		provinceID="11";
		break;
    case "上海市":
    	province = "上海市";
    	provinceID="31";
    	break;
    /*case "天津":
        province = "天津市";
        break;*/
    case "重庆市":
    	province = "重庆市";
    	provinceID="50";
        break;
    case "浙江省":
    	province = "浙江省";
    	provinceID="33";
        break;
    case "江苏省":
    	province = "江苏省";
    	provinceID="32";
        break;
    case "广东省":
    	province = "广东省";
    	provinceID="44";
        break;
    case "福建省":
    	province = "福建省";
    	provinceID="35";
        break;
    case "湖南省":
    	province = "湖南省";
    	provinceID="43";
        break;
    case "湖北省":
    	province = "湖北省";
    	provinceID="42";
        break;
    case "辽宁省":
    	province = "辽宁省";
    	provinceID="21";
        break;
    case "吉林省":
    	province = "吉林省";
    	provinceID="22";
        break;
    case "黑龙江省":
    	province = "黑龙江省";
    	provinceID="23";
        break;
    case "河北省":
    	province = "河北省";
    	provinceID="13";
        break;
    case "河南省":
    	province = "河南省";
    	provinceID="41";
        break;
    case "山东省":
    	province = "山东省";
    	provinceID="37";
        break;
    case "陕西省":
    	province = "陕西省";
    	provinceID="61";
        break;
    case "甘肃省":
    	province = "甘肃省";
    	provinceID="62";
        break;
    case "新疆维吾尔族自治区":
    	province = "新疆维吾尔族自治区";
    	provinceID="65";
        break;
    case "青海省":
    	province = "青海省";
    	provinceID="63";
        break;
    case "山西省":
    	province = "山西省";
    	provinceID="14";
        break;
    /*case "四川省":
        province = "四川省";
        break;*/
    case "贵州省":
    	province = "贵州省";
    	provinceID="52";
        break;
    case "安徽省":
    	province = "安徽省";
    	provinceID="34";
        break;
    case "江西省":
    	province = "江西省";
    	provinceID="36";
        break;
    case "云南省":
    	province = "云南省";
    	provinceID="53";	
        break;
    case "内蒙古自治区":
    	province = "内蒙古自治区";
    	provinceID="15";
        break;
    case "西藏藏族自治区":
    	province = "西藏藏族自治区";
    	provinceID="54";
        break;
    /*case "广西壮族自治区":
    	province = "广西壮族自治区";
        break;*/
    case "宁夏回族自治区":
    	province = "宁夏回族自治区";
    	provinceID="64";
        break;
    case "海南省":
    	province = "海南省";
    	provinceID="46";
        break;
	}
	arrayFilter(province);
	$("#provinceChoose").text(province);
	$("#queryPlace").val(province);
	$("#query_place").hide();
	$("#provinceID").val(provinceID);
}
//获得车牌前缀及城市ID
function hideCityList(name){
	
	var cityName=$(name).text();
	var carPrefix = "";
	switch(cityName){
		case "北京":
			carPrefix="京A";
			province="北京";
			break;
		case "石家庄":
			carPrefix="冀A";
			province="河北";
			break;
		case "唐山":
			carPrefix="冀B";
			province="河北";
			break;	
		case "秦皇岛":
			carPrefix="冀C";
			province="河北";
			break;		
		case "邯郸":
			carPrefix="冀D";
			province="河北";
			break;		
		case "邢台":
			carPrefix="冀E";
			province="河北";
			break;		
		case "保定":
			carPrefix="冀F";
			province="河北";
			break;		
		case "张家口":
			carPrefix="冀G";
			province="河北";
			break;		
		case "承德":
			carPrefix="冀H";
			province="河北";
			break;		
		case "沧州":
			carPrefix="冀J";
			province="河北";
			break;		
		case "廊坊":
			carPrefix="冀R";
			province="河北";
			break;		
		case "衡水":
			carPrefix="冀T";
			province="河北";
			break;		
		case "沧州行署":
			carPrefix="冀S";
			province="河北";
			break;		
		case "太原":
			carPrefix="晋A";
			province="山西";
			break;		
		case "大同":
			carPrefix="晋B";
			province="山西";
			break;		
		case "阳泉":
			carPrefix="晋C";
			province="山西";
			break;		
		case "长治":
			carPrefix="晋D";
			province="山西";
			break;		
		case "晋城":
			carPrefix="晋E";
			province="山西";
			break;		
		case "朔州":
			carPrefix="晋F";
			province="山西";
			break;		
		case "晋中":
			carPrefix="晋K";
			province="山西";
			break;		
		case "运城":
			carPrefix="晋M";
			province="山西";
			break;		
		case "沂州":
			carPrefix="晋H";
			province="山西";
			break;		
		case "临汾":
			carPrefix="晋L";
			province="山西";
			break;		
		case "吕梁":
			carPrefix="晋J";
			province="山西";
			break;		
		case "雁北":
			carPrefix="晋G";
			province="山西";
			break;		
		case "呼和浩特":
			carPrefix="蒙A";
			province="内蒙古";
			break;		
		case "包头":
			carPrefix="蒙B";
			province="内蒙古";
			break;		
		case "乌海":
			carPrefix="蒙C";
			province="内蒙古";
			break;		
		case "赤峰":
			carPrefix="蒙D";
			province="内蒙古";
			break;		
		case "通辽":
			carPrefix="蒙G";
			province="内蒙古";
			break;		
		case "鄂尔多斯":
			carPrefix="蒙K";
			province="内蒙古";
			break;		
		case "巴彦淖尔盟":
			carPrefix="蒙L";
			province="内蒙古";
			break;		
	  case "呼伦贝尔盟":
			carPrefix="蒙E";
			province="内蒙古";
			break;		
		case "乌兰察布盟":
			carPrefix="蒙J";
			province="内蒙古";
			break;		
		case "兴安盟":
			carPrefix="蒙F";
			province="内蒙古";
			break;		
		case "锡林郭勒盟":
			carPrefix="蒙H";
			province="内蒙古";
			break;		
		case "阿拉善盟":
			carPrefix="蒙M";
			province="内蒙古";
			break;		
		case "沈阳":
			carPrefix="辽A";
			province="辽宁";
			break;		
		case "大连":
			carPrefix="辽B";
			province="辽宁";
			break;		
		case "鞍山":
			carPrefix="辽C";
			province="辽宁";
			break;		
		case "抚顺":
			carPrefix="辽D";
			province="辽宁";
			break;		
		case "本溪":
			carPrefix="辽E";
			province="辽宁";
			break;		
		case "丹东":
			carPrefix="辽F";
			province="辽宁";
			break;		
		case "锦州":
			carPrefix="辽G";
			province="辽宁";
			break;		
		case "营口":
			carPrefix="辽H";
			province="辽宁";
			break;		
		case "阜新":
			carPrefix="辽J";
			province="辽宁";
			break;		
		case "盘锦":
			carPrefix="辽L";
			province="辽宁";
			break;		
		case "铁岭":
			carPrefix="辽M";
			province="辽宁";
			break;		
		case "朝阳":
			carPrefix="辽N";
			province="辽宁";
			break;		
		case "葫芦岛":
			carPrefix="辽P";
			province="辽宁";
			break;		
		case "长春":
			carPrefix="吉A";
			province="吉林";
			break;		
		case "吉林":
			carPrefix="吉B";
			province="吉林";
			break;		
		case "四平":
			carPrefix="吉C";
			province="吉林";
			break;		
		case "辽源":
			carPrefix="吉D";
			province="吉林";
			break;		
		case "通化":
			carPrefix="吉E";
			province="吉林";
			break;		
		case "白山":
			carPrefix="吉F";
			province="吉林";
			break;		
		case "松原":
			carPrefix="吉J";
			province="吉林";
			break;		
		case "白城":
			carPrefix="吉G";
			province="吉林";
			break;		
		case "延边朝鲜族自治州":
			carPrefix="吉H";
			province="吉林";
			break;		
		case "哈尔滨":
			carPrefix="黑A";
			province="黑龙江";
			break;		
		case "齐齐哈尔":
			carPrefix="黑B";
			province="黑龙江";
			break;		
		case "鸡西":
			carPrefix="黑G";
			province="黑龙江";
			break;		
		case "鹤岗":
			carPrefix="黑H";
			province="黑龙江";
			break;		
		case "双鸭山":
			carPrefix="黑J";
			province="黑龙江";
			break;		
		case "大庆":
			carPrefix="黑E";
			province="黑龙江";
			break;		
		case "伊春":
			carPrefix="黑F";
			province="黑龙江";
			break;		
		case "佳木斯":
			carPrefix="黑D";
			province="黑龙江";
			break;		
		case "七台河":
			carPrefix="黑K";
			province="黑龙江";
			break;		
		case "牡丹江":
			carPrefix="黑C";
			province="黑龙江";
			break;		
		case "黑河":
			carPrefix="黑N";
			province="黑龙江";
			break;		
		case "绥化":
			carPrefix="黑M";
			province="黑龙江";
			break;		
		case "大兴安岭地区":
			carPrefix="黑P";
			province="黑龙江";
			break;		
		case "松花江地区":
			carPrefix="黑L";
			province="黑龙江";
			break;		
		case "农垦系统":
			carPrefix="黑R";
			province="黑龙江";
			break;		
		case "上海":
			carPrefix="沪A";
			province="上海";
			break;		
		case "南京":
			carPrefix="苏A";
			province="江苏";
			break;		
		case "无锡":
			carPrefix="苏B";
			province="江苏";
			break;		
		case "徐州":
			carPrefix="苏C";
			province="江苏";
			break;		
		case "常州":
			carPrefix="苏D";
			province="江苏";
			break;		
		case "苏州":
			carPrefix="苏E";
			province="江苏";
			break;		
		case "南通":
			carPrefix="苏F";
			province="江苏";
			break;		
		case "连云港":
			carPrefix="苏G";
			province="江苏";
			break;		
		case "淮安":
			carPrefix="苏H";
			province="江苏";
			break;		
		case "盐城":
			carPrefix="苏J";
			province="江苏";
			break;		
		case "扬州":
			carPrefix="苏K";
			province="江苏";
			break;		
		case "镇江":
			carPrefix="苏L";
			province="江苏";
			break;		
		case "泰州":
			carPrefix="苏M";
			province="江苏";
			break;		
		case "宿迁":
			carPrefix="苏N";
			province="江苏";
			break;		
		case "杭州":
			carPrefix="浙A";
			province="浙江";
			break;		
		case "宁波":
			carPrefix="浙B";
			province="浙江";
			break;		
		case "温州":
			carPrefix="浙C";
			province="浙江";
			break;		
		case "嘉兴":
			carPrefix="浙F";
			province="浙江";
			break;		
		case "湖州":
			carPrefix="浙E";
			province="浙江";
			break;		
		case "绍兴":
			carPrefix="浙D";
			province="浙江";
			break;		
		case "金华":
			carPrefix="浙G";
			province="浙江";
			break;		
		case "衢州":
			carPrefix="浙H";
			province="浙江";
			break;		
		case "舟山":
			carPrefix="浙L";
			province="浙江";
			break;		
		case "台州":
			carPrefix="浙J";
			province="浙江";
			break;		
		case "丽水":
			carPrefix="浙K";
			province="浙江";
			break;		
		case "合肥":
			carPrefix="皖A";
			province="安徽";
			break;		
		case "芜湖":
			carPrefix="皖B";
			province="安徽";
			break;		
		case "蚌埠":
			carPrefix="皖C";
			province="安徽";
			break;		
		case "淮南":
			carPrefix="皖D";
			province="安徽";
			break;		
		case "马鞍山":
			carPrefix="皖E";
			province="安徽";
			break;		
		case "淮北":
			carPrefix="皖F";
			province="安徽";
			break;		
		case "铜陵":
			carPrefix="皖G";
			province="安徽";
			break;		
		case "安庆":
			carPrefix="皖H";
			province="安徽";
			break;		
		case "黄山":
			carPrefix="皖J";
			province="安徽";
			break;		
		case "滁州":
			carPrefix="皖M";
			province="安徽";
			break;		
		case "阜阳":
			carPrefix="皖K";
			province="安徽";
			break;		
		case "宿州":
			carPrefix="皖L";
			province="安徽";
			break;		
		case "六安":
			carPrefix="皖N";
			province="安徽";
			break;		
		case "亳州":
			carPrefix="皖S";
			province="安徽";
			break;		
		case "池州":
			carPrefix="皖R";
			province="安徽";
			break;		
		case "宣城":
			carPrefix="皖P";
			province="安徽";
			break;		
		case "巢湖":
			carPrefix="皖Q";
			province="安徽";;
			break;		
		case "福州":
			carPrefix="闽A";
			province="福建";
			break;		
		case "厦门":
			carPrefix="闽D";
			province="福建";
			break;		
		case "莆田":
			carPrefix="闽B";
			province="福建";
			break;		
		case "三明":
			carPrefix="闽G";
			province="福建";
			break;		
		case "泉州":
			carPrefix="闽C";
			province="福建";
			break;		
		case "漳州":
			carPrefix="闽E";
			province="福建";
			break;		
		case "南平":
			carPrefix="闽H";
			province="福建";
			break;		
		case "龙岩":
			carPrefix="闽F";
			province="福建";
			break;		
		case "宁德":
			carPrefix="闽J";
			province="福建";
			break;		
		case "南昌":
			carPrefix="赣A";
			province="江西";
			break;		
		case "景德镇":
			carPrefix="赣H";
			province="江西";
			break;		
		case "萍乡":
			carPrefix="赣J";
			province="江西";
			break;		
		case "九江":
			carPrefix="赣G";
			province="江西";
			break;		
		case "新余":
			carPrefix="赣K";
			province="江西";
			break;		
		case "鹰潭":
			carPrefix="赣L";
			province="江西";
			break;		
		case "赣州":
			carPrefix="赣B";
			province="江西";
			break;		
		case "吉安":
			carPrefix="赣D";
			province="江西";
			break;		
		case "宜春":
			carPrefix="赣C";
			province="江西";
			break;		
		case "抚州":
			carPrefix="赣F";
			province="江西";
			break;		
		case "上饶":
			carPrefix="赣E";
			province="江西";
			break;		
		case "南昌市,省直系统":
			carPrefix="赣M";
			province="江西";
			break;		
		case "济南":
			carPrefix="鲁A";
			province="山东";
			break;		
		case "青岛":
			carPrefix="鲁B";
			province="山东";
			break;		
		case "淄博":
			carPrefix="鲁C";
			province="山东";
			break;		
		case "枣庄":
			carPrefix="鲁D";
			province="山东";
			break;		
		case "东营":
			carPrefix="鲁E";
			province="山东";
			break;		
		case "烟台":
			carPrefix="鲁F";
			province="山东";
			break;		
		case "潍坊":
			carPrefix="鲁G";
			province="山东";
			break;		
		case "济宁":
			carPrefix="鲁H";
			province="山东";
			break;		
		case "泰安":
			carPrefix="鲁J";
			province="山东";
			break;		
		case "威海":
			carPrefix="鲁K";
			province="山东";
			break;		
		case "日照":
			carPrefix="鲁L";
			province="山东";
			break;		
		case "莱芜":
			carPrefix="鲁S";
			province="山东";
			break;		
		case "临沂":
			carPrefix="鲁Q";
			province="山东";
			break;		
		case "德州":
			carPrefix="鲁N";
			province="山东";
			break;		
		case "聊城":
			carPrefix="鲁P";
			province="山东";
			break;		
		case "滨州":
			carPrefix="鲁M";
			province="山东";
			break;		
		case "菏泽":
			carPrefix="鲁R";
			province="山东";
			break;		
		case "青岛市增补":
			carPrefix="鲁U";
			province="山东";
			break;		
		case "潍坊市增补":
			carPrefix="鲁V";
			province="山东";
			break;		
		case "烟台市增补":
			carPrefix="鲁Y";
			province="山东";
			break;		
		case "郑州":
			carPrefix="豫A";
			province="河南";
			break;		
		case "开封":
			carPrefix="豫B";
			province="河南";
			break;		
		case "洛阳":
			carPrefix="豫C";
			province="河南";
			break;		
		case "平顶山":
			carPrefix="豫D";
			province="河南";
			break;		
		case "安阳":
			carPrefix="豫E";
			province="河南";
			break;		
		case "鹤壁":
			carPrefix="豫F";
			province="河南";
			break;		
		case "新乡":
			carPrefix="豫G";
			province="河南";
			break;		
		case "焦作":
			carPrefix="豫H";
			province="河南";
			break;		
		case "濮阳":
			carPrefix="豫J";
			province="河南";
			break;		
		case "许昌":
			carPrefix="豫K";
			province="河南";
			break;		
		case "漯河":
			carPrefix="豫L";
			province="河南";
			break;		
		case "三门峡":
			carPrefix="豫M";
			province="河南";
			break;		
		case "南阳":
			carPrefix="豫R";
			province="河南";
			break;		
		case "商丘":
			carPrefix="豫N";
			province="河南";
			break;		
		case "信阳":
			carPrefix="豫S";
			province="河南";
			break;		
		case "周口":
			carPrefix="豫P";
			province="河南";
			break;		
		case "驻马店":
			carPrefix="豫Q";
			province="河南";
			break;		
		case "济源":
			carPrefix="豫U";
			province="河南";
			break;		
		case "武汉":
			carPrefix="鄂A";
			province="湖北";
			break;		
		case "黄石":
			carPrefix="鄂B";
			province="湖北";
			break;		
		case "十堰":
			carPrefix="鄂C";
			province="湖北";
			break;		
		case "宜昌":
			carPrefix="鄂E";
			province="湖北";
			break;		
		case "襄阳":
			carPrefix="鄂F";
			province="湖北";
			break;		
		case "鄂州":
			carPrefix="鄂G";
			province="湖北";
			break;		
		case "荆门":
			carPrefix="鄂H";
			province="湖北";
			break;		
		case "孝感":
			carPrefix="鄂K";
			province="湖北";
			break;		
		case "荆州":
			carPrefix="鄂D";
			province="湖北";
			break;		
		case "黄冈":
			carPrefix="鄂J";
			province="湖北";
			break;		
		case "咸宁":
			carPrefix="鄂L";
			province="湖北";
			break;		
		case "随州":
			carPrefix="鄂S";
			province="湖北";
			break;		
		case "恩施土家苗族自治州":
			carPrefix="鄂Q";
			province="湖北";
			break;		
		case "仙桃":
			carPrefix="鄂M";
			province="湖北";;
			break;		
		case "潜江":
			carPrefix="鄂N";
			province="湖北";
			break;		
		case "天门":
			carPrefix="鄂R";
			province="湖北";
			break;		
		case "神农架林区":
			carPrefix="鄂P";
			province="湖北";
			break;		
		case "长沙":
			carPrefix="湘A";
			province="湖南";
			break;		
		case "株洲":
			carPrefix="湘B";
			province="湖南";
			break;		
		case "湘潭":
			carPrefix="湘C";
			province="湖南";
			break;		
		case "衡阳":
			carPrefix="湘D";
			province="湖南";
			break;		
		case "邵阳":
			carPrefix="湘E";
			province="湖南";
			break;		
		case "岳阳":
			carPrefix="湘F";
			province="湖南";
			break;		
		case "常德":
			carPrefix="湘J";
			province="湖南";
			break;		
		case "张家界":
			carPrefix="湘G";
			province="湖南";
			break;		
		case "益阳":
			carPrefix="湘H";
			province="湖南";
			break;		
		case "郴州":
			carPrefix="湘L";
			province="湖南";
			break;		
		case "永州":
			carPrefix="湘M";
			province="湖南";
			break;		
		case "怀化":
			carPrefix="湘N";
			province="湖南";
			break;		
		case "娄底":
			carPrefix="湘K";
			province="湖南";
			break;		
		case "湘西土家族苗族自治州":
			carPrefix="湘U";
			province="湖南";
			break;		
		case "广州":
			carPrefix="粤A";
			province="广东";
			break;	
		case "韶关":
			carPrefix="粤F";
			province="广东";
			break;	
		case "深圳":
			carPrefix="粤B";
			province="广东";
			break;		
		case "珠海":
			carPrefix="粤C";
			province="广东";
			break;		
		case "汕头":
			carPrefix="粤D";
			province="广东";
			break;		
		case "佛山":
			carPrefix="粤E";
			province="广东";
			break;		
		case "江门":
			carPrefix="粤J";
			province="广东";
			break;		
		case "湛江":
			carPrefix="粤G";
			province="广东";
			break;		
		case "茂名":
			carPrefix="粤K";
			province="广东";
			break;		
		case "肇庆":
			carPrefix="粤H";
			province="广东";
			break;		
		case "惠州":
			carPrefix="粤L";
			province="广东";
			break;		
		case "梅州":
			carPrefix="粤M";
			province="广东";
			break;		
		case "汕尾":
			carPrefix="粤N";
			province="广东";
			break;		
		case "河源":
			carPrefix="粤P";
			province="广东";
			break;		
		case "阳江":
			carPrefix="粤Q";
			province="广东";
			break;		
		case "清远":
			carPrefix="粤R";
			province="广东";
			break;		
		case "东莞":
			carPrefix="粤S";
			province="广东";
			break;		
		case "中山":
			carPrefix="粤T";
			province="广东";
			break;		
		case "潮州":
			carPrefix="粤U";
			province="广东";
			break;		
		case "揭阳":
			carPrefix="粤V";
			province="广东";
			break;	
		case "南宁":
			carPrefix="桂A";
			province="广西";
			break;		
		case "柳州":
			carPrefix="桂B";
			province="广西";
			break;		
		case "桂林":
			carPrefix="桂C";
			province="广西";
			break;		
		case "梧州":
			carPrefix="桂D";
			province="广西";
			break;		
		case "北海":
			carPrefix="桂E";
			province="广西";
			break;		
		case "防城港":
			carPrefix="桂P";
			province="广西";
			break;		
		case "钦州":
			carPrefix="桂N";
			province="广西";
			break;		
		case "贵港":
			carPrefix="桂R";
			province="广西";
			break;		
		case "玉林":
			carPrefix="桂K";
			province="广西";
			break;		
		case "百色":
			carPrefix="桂L";
			province="广西";
			break;		
		case "贺州":
			carPrefix="桂J";
			province="广西";
			break;		
		case "河池":
			carPrefix="桂M";
			province="广西";
			break;		
		case "来宾":
			carPrefix="桂G";
			province="广西";
			break;		
		case "崇左":
			carPrefix="桂F";
			province="广西";
			break;		
		case "桂林地区":
			carPrefix="桂H";
			province="广西";
			break;		
		
		case "海口":
			province="海南";
			carPrefix="琼A";
			break;		
		case "三亚":
			carPrefix="海南";
			province="广西";
			break;		
		case "洋浦开发区":
			carPrefix="琼E";
			province="海南";
			break;		
		case "五指山":
			carPrefix="琼D";
			province="海南";
			break;		
		case "桂海":
			carPrefix="琼C";
			province="海南";
			break;		
		case "重庆":
			carPrefix="渝A";
			province="重庆";
			break;	
		case "成都":
			carPrefix="川A";
			province="四川";
			break;		
		case "自贡":
			carPrefix="川C";
			province="四川";
			break;		
		case "攀枝花":
			carPrefix="川D";
			province="四川";
			break;		
		case "泸州":
			carPrefix="川E";
			province="四川";
			break;		
		case "德阳":
			carPrefix="川F";
			province="四川";
			break;		
		case "绵阳":
			carPrefix="川B";
			province="四川";
			break;		
		case "广元":
			carPrefix="川H";
			province="四川";
			break;		
		case "遂宁":
			carPrefix="川J";
			province="四川";
			break;		
		case "内江":
			carPrefix="川K";
			province="四川";
			break;		
		case "乐山":
			carPrefix="川L";
			province="四川";
			break;		
		case "南充":
			carPrefix="川R";
			province="四川";
			break;		
		case "眉山":
			carPrefix="川Z";
			province="四川";
			break;		
		case "宜宾":
			carPrefix="川Q";
			province="四川";
			break;		
		case "广安":
			carPrefix="川X";
			province="四川";
			break;		
		case "达州":
			carPrefix="川S";
			province="四川";
			break;		
		case "雅安":
			carPrefix="川T";
			province="四川";
			break;		
		case "巴中":
			carPrefix="川Y";
			province="四川";
			break;		
		case "资阳":
			carPrefix="川M";
			province="四川";
			break;		
		case "阿坝":
			carPrefix="川U";
			province="四川";
			break;		
		case "甘孜":
			carPrefix="川V";
			province="四川";
			break;		

		case "贵阳":
			province="贵州";
			carPrefix="贵A";
			break;		
		case "六盘水":
			carPrefix="贵B";
			province="贵州";
			break;		
		case "遵义":
			carPrefix="贵C";
			province="贵州";
			break;		
		case "安顺":
			carPrefix="贵G";
			province="贵州";
			break;		
		case "毕节":
			carPrefix="贵F";
			province="贵州";
			break;		
		case "铜仁":
			carPrefix="贵D";
			province="贵州";
			break;		
		case "黔西南布衣族苗族自治州":
			carPrefix="贵E";
			province="贵州";
			break;		
		case "黔东南苗族同族自治州":
			carPrefix="贵H";
			province="贵州";
			break;		
		case "黔南布衣族自治州":
			carPrefix="贵J";
			province="贵州";
			break;		
		case "昆明":
			carPrefix="云A";
			province="云南";
			break;		
		case "曲靖":
			carPrefix="云D";
			province="云南";
			break;		
		case "玉溪":
			carPrefix="云F";
			province="云南";
			break;		
		case "保山":
			carPrefix="云M";
			province="云南";
			break;		
		case "昭通":
			carPrefix="云C";
			province="云南";
			break;		
		case "丽江":
			carPrefix="云P";
			province="云南";
			break;		
		case "普洱":
			carPrefix="云J";
			province="云南";
			break;		
		case "临沧":
			carPrefix="云S";
			province="云南";
			break;		
		case "楚雄彝族自治州":
			carPrefix="云E";
			province="云南";
			break;		
		case "红河哈尼族彝族自治州":
			carPrefix="云G";
			province="云南";
			break;		
		case "文山壮族苗族自治州":
			carPrefix="云H";
			province="云南";
			break;		
		case "西双版纳傣族自治州":
			carPrefix="云K";
			province="云南";
			break;		
		case "大理白族自治州":
			carPrefix="云L";
			province="云南";
			break;		
		case "德宏傣族景颇族自治州":
			carPrefix="云N";
			province="云南";
			break;		
		case "怒江傈僳族自治州":
			carPrefix="云Q";
			province="云南";
			break;		
		case "迪庆藏族自治州":
			carPrefix="云R";
			province="云南";
			break;		
		case "拉萨":
			carPrefix="藏A";
			province="西藏";
			break;		
		case "昌都地区":
			carPrefix="藏B";
			province="西藏";
			break;		
		case "山南地区":
			carPrefix="藏C";
			province="西藏";
			break;		
		case "日喀则地区":
			carPrefix="藏D";
			province="西藏";
			break;		
		case "那曲地区":
			carPrefix="藏E";
			province="西藏";
			break;		
		case "阿里地区":
			carPrefix="藏F";
			province="西藏";
			break;		
		case "林芝地区":
			carPrefix="藏G";
			province="西藏";
			break;		
		case "西安":
			carPrefix="陕A";
			province="陕西";
			break;	
		case "铜川":
			carPrefix="陕B";
			province="陕西";
			break;			
		case "宝鸡":
			carPrefix="陕C";
			province="陕西";
			break;	
		case "咸阳":
			carPrefix="陕D";
			province="陕西";
			break;	
		case "渭南":
			province="陕西";
			carPrefix="陕E";
			break;			
		case "延安":
			province="陕西";
			carPrefix="陕J";
			break;		
		case "汉中":
			province="陕西";
			carPrefix="陕F";
			break;	
		case "榆林":
			province="陕西";
			carPrefix="陕K";
			break;			
		case "安康":
			carPrefix="陕G";
			province="陕西";
			break;		
		case "杨凌高新农业示范区":
			carPrefix="陕V";
			province="陕西";
			break;		
		case "兰州":
			carPrefix="甘A";
			province="甘肃";
			break;		
		case "嘉峪关":
			carPrefix="甘B";
			province="甘肃";
			break;		
		case "金昌":
			carPrefix="甘C";
			province="甘肃";
			break;		
		case "白银":
			carPrefix="甘D";
			province="甘肃";
			break;		
		case "天水":
			carPrefix="甘E";
			province="甘肃";
			break;		
		case "武威":
			carPrefix="甘H";
			province="甘肃";
			break;		
		case "张掖":
			carPrefix="甘G";
			province="甘肃";
			break;		
		case "平凉":
			carPrefix="甘L";
			province="甘肃";
			break;		
		case "酒泉":
			carPrefix="甘F";
			province="甘肃";
			break;		
		case "庆阳":
			carPrefix="甘M";
			province="甘肃";
			break;		
		case "定西":
			carPrefix="甘J";
			province="甘肃";
			break;		
		case "陇南":
			carPrefix="甘K";
			province="甘肃";
			break;		
		case "临夏回族自治州":
			carPrefix="甘N";
			province="甘肃";
			break;		
		case "甘南藏族自治州":
			carPrefix="甘P";
			province="甘肃";
			break;		
		case "西宁":
			carPrefix="青A";
			province="青海";
			break;	
		case "海东地区":
			carPrefix="青B";
			province="青海";
			break;	
		case "海北藏族自治州":
			carPrefix="青C";
			province="青海";
			break;	
		case "黄南藏族自治州":
			carPrefix="青D";
			province="青海";
			break;	
		case "海南藏族自治州":
			province="青海";
			carPrefix="青E";
			break;	
		case "果洛藏族自治州":
			province="青海";
			carPrefix="青F";
			break;	
		case "玉树藏族自治州":
			province="青海";
			carPrefix="青G";
			break;	
		case "海西蒙古族藏族自治州":
			carPrefix="青H";
			province="青海";
			break;	
		case "银川":
			province="宁夏";
			carPrefix="宁A";
			break;	
		case "石嘴山":
			carPrefix="宁B";
			province="宁夏";
			break;	
		case "吴忠":
			carPrefix="宁C";
			province="宁夏";
			break;	
		case "固原":
			carPrefix="宁D";
			province="宁夏";
			break;	
		case "中卫":
			carPrefix="宁E";
			province="宁夏";
			break;	
		case "乌鲁木齐":
			carPrefix="新A";
			province="新疆";
			break;	
		case "克拉玛依":
			carPrefix="新J";
			province="新疆";
			break;	
		case "吐鲁番地区":
			carPrefix="新K";
			province="新疆";
			break;	
		case "哈密地区":
			carPrefix="新L";
			province="新疆";
			break;	
		case "昌吉回族自治州":
			carPrefix="新B";
			province="新疆";
			break;	
		case "博尔塔拉蒙古自治州":
			carPrefix="新E";
			province="新疆";
			break;	
		case "巴音郭楞蒙古自治州":
			carPrefix="新M";
			province="新疆";
			break;	
		case "阿克苏地区":
			carPrefix="新N";
			province="新疆";
			break;	
		case "克孜勒苏柯尔克孜自治州":
			carPrefix="新P";
			province="新疆";
			break;	
		case "喀什地区":
			carPrefix="新Q";
			province="新疆";
			break;	
		case "和田地区":
			carPrefix="新R";
			province="新疆";
			break;	
		case "伊犁哈萨克自治州":
			carPrefix="新F";
			province="新疆";
			break;	
		case "塔城地区":
			carPrefix="新G";
			province="新疆";
			break;	
		case "阿勒泰地区":
			carPrefix="新H";
			province="新疆";
			break;	
		case "奎屯":
			carPrefix="新D";
			province="新疆";
			break;	
		case "石河子":
			carPrefix="新C";
			province="新疆";
			break;	
	}
	$("#provinceChoose").text("全国");
	getQueryInfor(carPrefix,province);
	$("#carPre").val(carPrefix.substr(0,1));
	$("#carPreSpan").text(carPrefix.substr(0,1));
	$("#carNumber").val(carPrefix.substr(1,carPrefix.length));
	$("#cityList").hide();
}

function getContent(name,inforName){
	var content = $(name).val();
	$("#"+inforName).val(content);
}

$(function(){
	$("#sel_wrap").on("change",function(){
	        var o;
	        var opt = $(this).find('option');
	        opt.each(function(i){
	              if(opt[i].selected == true){
	                    o = opt[i].innerHTML;
	              }
	        });
	        $(this).find('label').html(o);
		}).trigger('change');
});


$(function(){
	$("#frameNumber").focus(function(){
		if($(this).val()=="请输入完整的车架号" || $(this).val()=="请输入车架号" || $(this).val()=="请输入车架号的后6位" || $(this).val()=="请输入车架号的后4位" || $(this).val()=="请输入车架号的后5位" ){
			getContent(this,"frame_content");
			$(this).val("");
			$(this).css("color","#333");
		}
	});
	$("#frameNumber").blur(function(){
		if($("#frameNumber").val()==""){
			$value = $("#frame_content").val();
			$(this).val($value);
			$(this).css("color","#CCC");
		}
	});
	
	$("#engineNumber").focus(function(){
		if($(this).val()=="请输入完整的发动机号" || $(this).val()=="请输入发动机号的后6位" || $(this).val()=="请输入发动机号的后4位" || $(this).val()=="请输入发动机号" ){
			getContent(this,"engine_content");
			$(this).val("");
			$(this).css("color","#333");
		}
	});
	$("#engineNumber").blur(function(){
		if($("#engineNumber").val()==""){
			$value = $("#engine_content").val();
			$(this).val($value);
			$(this).css("color","#CCC");
		}
		
	});
	
	var modelVal,pLi,proCity;

    for(var i=0;i<province.length;i++){
        modelVal = province[i];
        pLi = "<li name='" + modelVal + "'><a href='javascript:;' style='text-decoration:none;'>" + modelVal + "</a><ul class='cl-nav'></ul></li>";
        $('.city-list').append(pLi);
        switch (modelVal) {
            case "北京":
                proCity = beijing;
                break;
            case "上海":
                proCity = shanghai;
                break;
            /*case "天津":
                proCity = tianjing;
                break;*/
            case "重庆":
                proCity = chongqing;
                break;
            case "浙江":
                proCity = zhejiang;
                break;
            case "江苏":
                proCity = jiangsu;
                break;
            case "广东":
                proCity = guangdong;
                break;
            case "福建":
                proCity = fujiang;
                break;
            case "湖南":
                proCity = hunan;
                break;
            case "湖北":
                proCity = hubei;
                break;
            case "辽宁":
                proCity = liaoning;
                break;
            case "吉林":
                proCity = jilin;
                break;
            case "黑龙江":
                proCity = heilongjiang;
                break;
            case "河北":
                proCity = hebei;
                break;
            case "河南":
                proCity = henan;
                break;
            case "山东":
                proCity = shandong;
                break;
            case "陕西":
                proCity = shangxi;
                break;
            case "甘肃":
                proCity = gansu;
                break;
            case "新疆":
                proCity = xinjiang;
                break;
            case "青海":
                proCity = qinghai;
                break;
            case "山西":
                proCity = shanxi;
                break;
            case "四川":
                proCity = sichuan;
                break;
            case "贵州":
                proCity = guizhou;
                break;
            case "安徽":
                proCity = anhui;
                break;
            case "江西":
                proCity = jiangxi;
                break;
            case "云南":
                proCity = yunnan;
                break;
            case "内蒙古":
                proCity = neimenggu;
                break;
            case "西藏":
                proCity = xizang;
                break;
            case "广西":
                proCity = guangxi;
                break;
            case "西藏":
                proCity = xizang;
                break;
            case "宁夏":
                proCity = ningxia;
                break;
            case "海南":
                proCity = hainan;
                break;
            /*case "香港":
                proCity = xianggang;
                break;
            case "澳门":
                proCity = aomeng;
                break;
            case "台湾":
                proCity = taiwan;
                break;*/
        }
        var $cityListBox=$('.city-list li[name='+modelVal+'] .cl-nav');
        for(var j=0;j<eval(proCity).length;j++){
            modelVal = eval(proCity)[j];
            var $cityList = "<li name='" + modelVal + "'><a href='javascript:;' style='text-decoration:none;' onClick='hideCityList(this)'>" + modelVal + "</a></li>";
            $cityListBox.append($cityList);
        }
    }
});
$(function(){
    $('.cityChose').height($(document).height());
    $('.city-list li:has(ul)').addClass('has-nav-close');
    $('.city-list li:has(ul)').on('click',function(event){
        if($(this).attr('class')=='has-nav-close'){
            $('.city-list li ul').hide();
            $('.city-list li:has(ul)').removeClass('has-nav-open').addClass('has-nav-close');
            $(this).removeClass('has-nav-close').addClass('has-nav-open').find('ul').show();
        }else if($(this).attr('class')=='has-nav-open'){
            $(this).removeClass('has-nav-open').addClass('has-nav-close').find('ul').hide();
        }
        $('.city-list li ul li').stopPropagation(event);
    });

    for(var i=0;i<queryProvince.length;i++){
        modelVal = queryProvince[i];
        cLi = "<li name='" + modelVal + "'><a href='javascript:;' style='text-decoration:none;' onClick='provinceChoose(this)'>" + modelVal + "</a></li>";
        $('.query-list').append(cLi);
    }
})
