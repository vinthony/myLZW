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
		if(dic[it]){//如果在字典中,将整体继续看作是字典进入下轮循环
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
	re.dic = initDic;
	console.log(code);
	console.log(dic);
	return re;
}
var lzwDecode = function(input){
	var code = input.code;//编码的code
	var dic = deDic(input.dic);//编码的字典
	var result = "";
	var temp = "";
	console.log(code);
	var prev = code.shift(); //result T
	result = dic[prev];
	while(code.length>0){
		curr = code.shift();//当前编码
		if(getKeyByValue(dic,dic[curr])){//在字典中
			off = curr;
		}else{//不在字典中
			// console.log('不在字典中',dic[prev],dic[curr]);
			// dic[len(dic)] = dic[prev] + temp.charAt(0);
			// off = dic[curr];
		}
		result += dic[off];
		dic[len(dic)] = dic[prev] + dic[off].charAt(0);
		prev = off;	

	}
	  console.log(dic);
	  console.log(result);
}

function deDic(dic){
	var re = {};
	for (var i = 0; i < dic.length; i++) {
			re[i] = dic[i] ;
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
var encode = lzwEncode("TOBEORNOTTOBEORTOBEORNOT",['B','E','N','O','R','T']);
var decode = lzwDecode(encode);
console.log("TOBEORNOTTOBEORTOBEORNOT");

