var lzwEncode = function(input,initDic){
	var dic = {}; 
	var index = 0;
	var code = [];
	var inputArr = input.split("");
	if(!initDic){
		for (var i = 0; i < 256; i++) {
			var s = String.fromCharCode(i);
			if(input.indexOf(s)>-1){
				dic[s] = index;
				index++;
			}
		};
	}else{
		for (var i = 0; i < initDic.length; i++) {
			dic[initDic[i]] = i ;
		};
	}
	var prev = "";//初始化prev
	while(inputArr.length>0){	
		var curr = inputArr.shift();//取得下一个
		var it = prev +""+ curr;//连接
		if(it in dic){//如果在字典中,将整体继续看作是字典进入下轮循环
			prev = it;
		}else{//没有在字典中,将前驱置入字典中,增长字典,重新开始计数 
			code.push(dic[prev]); 
			dic[it] = len(dic);
			prev = curr;
		}
	}
	if(prev!=="")
		code.push(dic[prev]);
	var re = {};
	re.code = code;
	re.dic = dic;
	console.log(re);
	return re;
}
var lzwDecode = function(input){
	var code = input.code;//编码的code
	var dic = input.dic;//编码的字典
	var re = "";
	for (var i = 0; i < code.length; i++) {
		re += getKeyByValue(dic,code[i]);
	};
	return re;
}
function len(obj){
	var lenth = 0;
	for(var i in obj){
		if(obj.hasOwnProperty(i)){
			lenth++;
		}
	}
	return lenth;
}
function getKeyByValue(o,v){
	for(var i in o){
		if(o[i] == v) return i; 
	}
	return "";
}
console.log();
var encode = lzwEncode("TOBEORNOTTOBEORTOBEORNOT");
var decode = lzwDecode(encode);
console.log(JSON.stringify(encode).length/"TOBEORNOTTOBEORTOBEORNOT".length);