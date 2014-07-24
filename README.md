myLZW
=====

lzw

- lzwEncode(str,[dic]) 压缩方法，采用lzw算法，如果没有初始化字典则直接采用ascii
	方法返回结构为:{code:code,dic:dic}
- lzwDecode(lzwEncode(str,[dic])) 解压缩方法 