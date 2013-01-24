




function writeUTFBytes(texto){
  var resultado="";
	for(var i=0; i < texto.length; i++){
		resultado += texto.charCodeAt(i);
	}
	
	return resultado;
}

function CoreLibMD5(){
	this.hexChars = "0123456789abcdef";
	this.hash=function(cadena){
		var loc1=writeUTFBytes(cadena);
		return this.hashBinary(loc1);
	}
	
	this.hashBinary=function(byte_array){
		var loc5=0;
        var loc6=0;
        var loc7=0;
        var loc8=0;
        var loc1=1732584193;
        var loc2=-271733879;
        var loc3=-1732584194;
        var loc4=271733878;
        var loc9=this.createBlocks(byte_array);
        var loc10=loc9.length;
        var loc11=0;
        while (loc11 < loc10){
            loc5 = loc1;
            loc6 = loc2;
            loc7 = loc3;
            loc8 = loc4;
            loc1 = this.ff(loc1, loc2, loc3, loc4, loc9[loc11 + 0], 7, -680876936);
            loc4 = this.ff(loc4, loc1, loc2, loc3, loc9[loc11 + 1], 12, -389564586);
            loc3 = this.ff(loc3, loc4, loc1, loc2, loc9[loc11 + 2], 17, 606105819);
            loc2 = this.ff(loc2, loc3, loc4, loc1, loc9[loc11 + 3], 22, -1044525330);
            loc1 = this.ff(loc1, loc2, loc3, loc4, loc9[loc11 + 4], 7, -176418897);
            loc4 = this.ff(loc4, loc1, loc2, loc3, loc9[loc11 + 5], 12, 1200080426);
            loc3 = this.ff(loc3, loc4, loc1, loc2, loc9[loc11 + 6], 17, -1473231341);
            loc2 = this.ff(loc2, loc3, loc4, loc1, loc9[loc11 + 7], 22, -45705983);
            loc1 = this.ff(loc1, loc2, loc3, loc4, loc9[loc11 + 8], 7, 1770035416);
            loc4 = this.ff(loc4, loc1, loc2, loc3, loc9[loc11 + 9], 12, -1958414417);
            loc3 = this.ff(loc3, loc4, loc1, loc2, loc9[loc11 + 10], 17, -42063);
            loc2 = this.ff(loc2, loc3, loc4, loc1, loc9[loc11 + 11], 22, -1990404162);
            loc1 = this.ff(loc1, loc2, loc3, loc4, loc9[loc11 + 12], 7, 1804603682);
            loc4 = this.ff(loc4, loc1, loc2, loc3, loc9[loc11 + 13], 12, -40341101);
            loc3 = this.ff(loc3, loc4, loc1, loc2, loc9[loc11 + 14], 17, -1502002290);
            loc2 = this.ff(loc2, loc3, loc4, loc1, loc9[loc11 + 15], 22, 1236535329);
            loc1 = this.gg(loc1, loc2, loc3, loc4, loc9[loc11 + 1], 5, -165796510);
            loc4 = this.gg(loc4, loc1, loc2, loc3, loc9[loc11 + 6], 9, -1069501632);
            loc3 = this.gg(loc3, loc4, loc1, loc2, loc9[loc11 + 11], 14, 643717713);
            loc2 = this.gg(loc2, loc3, loc4, loc1, loc9[loc11 + 0], 20, -373897302);
            loc1 = this.gg(loc1, loc2, loc3, loc4, loc9[loc11 + 5], 5, -701558691);
            loc4 = this.gg(loc4, loc1, loc2, loc3, loc9[loc11 + 10], 9, 38016083);
            loc3 = this.gg(loc3, loc4, loc1, loc2, loc9[loc11 + 15], 14, -660478335);
            loc2 = this.gg(loc2, loc3, loc4, loc1, loc9[loc11 + 4], 20, -405537848);
            loc1 = this.gg(loc1, loc2, loc3, loc4, loc9[loc11 + 9], 5, 568446438);
            loc4 = this.gg(loc4, loc1, loc2, loc3, loc9[loc11 + 14], 9, -1019803690);
            loc3 = this.gg(loc3, loc4, loc1, loc2, loc9[loc11 + 3], 14, -187363961);
            loc2 = this.gg(loc2, loc3, loc4, loc1, loc9[loc11 + 8], 20, 1163531501);
            loc1 = this.gg(loc1, loc2, loc3, loc4, loc9[loc11 + 13], 5, -1444681467);
            loc4 = this.gg(loc4, loc1, loc2, loc3, loc9[loc11 + 2], 9, -51403784);
            loc3 = this.gg(loc3, loc4, loc1, loc2, loc9[loc11 + 7], 14, 1735328473);
            loc2 = this.gg(loc2, loc3, loc4, loc1, loc9[loc11 + 12], 20, -1926607734);
            loc1 = this.hh(loc1, loc2, loc3, loc4, loc9[loc11 + 5], 4, -378558);
            loc4 = this.hh(loc4, loc1, loc2, loc3, loc9[loc11 + 8], 11, -2022574463);
            loc3 = this.hh(loc3, loc4, loc1, loc2, loc9[loc11 + 11], 16, 1839030562);
            loc2 = this.hh(loc2, loc3, loc4, loc1, loc9[loc11 + 14], 23, -35309556);
            loc1 = this.hh(loc1, loc2, loc3, loc4, loc9[loc11 + 1], 4, -1530992060);
            loc4 = this.hh(loc4, loc1, loc2, loc3, loc9[loc11 + 4], 11, 1272893353);
            loc3 = this.hh(loc3, loc4, loc1, loc2, loc9[loc11 + 7], 16, -155497632);
            loc2 = this.hh(loc2, loc3, loc4, loc1, loc9[loc11 + 10], 23, -1094730640);
            loc1 = this.hh(loc1, loc2, loc3, loc4, loc9[loc11 + 13], 4, 681279174);
            loc4 = this.hh(loc4, loc1, loc2, loc3, loc9[loc11 + 0], 11, -358537222);
            loc3 = this.hh(loc3, loc4, loc1, loc2, loc9[loc11 + 3], 16, -722521979);
            loc2 = this.hh(loc2, loc3, loc4, loc1, loc9[loc11 + 6], 23, 76029189);
            loc1 = this.hh(loc1, loc2, loc3, loc4, loc9[loc11 + 9], 4, -640364487);
            loc4 = this.hh(loc4, loc1, loc2, loc3, loc9[loc11 + 12], 11, -421815835);
            loc3 = this.hh(loc3, loc4, loc1, loc2, loc9[loc11 + 15], 16, 530742520);
            loc2 = this.hh(loc2, loc3, loc4, loc1, loc9[loc11 + 2], 23, -995338651);
            loc1 = this.ii(loc1, loc2, loc3, loc4, loc9[loc11 + 0], 6, -198630844);
            loc4 = this.ii(loc4, loc1, loc2, loc3, loc9[loc11 + 7], 10, 1126891415);
            loc3 = this.ii(loc3, loc4, loc1, loc2, loc9[loc11 + 14], 15, -1416354905);
            loc2 = this.ii(loc2, loc3, loc4, loc1, loc9[loc11 + 5], 21, -57434055);
            loc1 = this.ii(loc1, loc2, loc3, loc4, loc9[loc11 + 12], 6, 1700485571);
            loc4 = this.ii(loc4, loc1, loc2, loc3, loc9[loc11 + 3], 10, -1894986606);
            loc3 = this.ii(loc3, loc4, loc1, loc2, loc9[loc11 + 10], 15, -1051523);
            loc2 = this.ii(loc2, loc3, loc4, loc1, loc9[loc11 + 1], 21, -2054922799);
            loc1 = this.ii(loc1, loc2, loc3, loc4, loc9[loc11 + 8], 6, 1873313359);
            loc4 = this.ii(loc4, loc1, loc2, loc3, loc9[loc11 + 15], 10, -30611744);
            loc3 = this.ii(loc3, loc4, loc1, loc2, loc9[loc11 + 6], 15, -1560198380);
            loc2 = this.ii(loc2, loc3, loc4, loc1, loc9[loc11 + 13], 21, 1309151649);
            loc1 = this.ii(loc1, loc2, loc3, loc4, loc9[loc11 + 4], 6, -145523070);
            loc4 = this.ii(loc4, loc1, loc2, loc3, loc9[loc11 + 11], 10, -1120210379);
            loc3 = this.ii(loc3, loc4, loc1, loc2, loc9[loc11 + 2], 15, 718787259);
            loc2 = this.ii(loc2, loc3, loc4, loc1, loc9[loc11 + 9], 21, -343485551);
            loc1 = loc1 + loc5;
            loc2 = loc2 + loc6;
            loc3 = loc3 + loc7;
            loc4 = loc4 + loc8;
            loc11 = loc11 + 16;
		}
		
		return this.toHex(loc1) + this.toHex(loc2) + this.toHex(loc3) + this.toHex(loc4);
	}
	
	       
	this.f=function(arg1, arg2, arg3)
	{
           return arg1 & arg2 | ~arg1 & arg3;
    }

    this.g=function(arg1, arg2, arg3)
	{
        return arg1 & arg3 | arg2 & ~arg3;
    }

    this.h=function(arg1, arg2, arg3)
    {
        return arg1 ^ arg2 ^ arg3;
    }

    this.i=function(arg1, arg2, arg3)
    {
        return arg2 ^ (arg1 | ~arg3);
    }
	
	this.transform=function(arg1, arg2, arg3, arg4, arg5, arg6, arg7, arg8)
    {
        var loc1=arg2 + parseInt(arg1(arg3, arg4, arg5)) + arg6 + arg8;
        return this.rol(loc1, arg7) + arg3;
    }

    this.ff=function(arg1, arg2, arg3, arg4, arg5, arg6, arg7)
    {
        return this.transform(this.f, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    }

    this.gg=function(arg1, arg2, arg3, arg4, arg5, arg6, arg7)
    {
        return this.transform(this.g, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    }

    this.hh=function(arg1, arg2, arg3, arg4, arg5, arg6, arg7)
    {
        return this.transform(this.h, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    }

    this.ii=function(arg1, arg2, arg3, arg4, arg5, arg6, arg7)
    {
        return this.transform(this.i, arg1, arg2, arg3, arg4, arg5, arg6, arg7);
    }

    this.createBlocks=function(arg1)
    {
        var loc1=new Array();
        var loc2=arg1.length * 8;
        var loc3=255;
        var loc4=0;
		while (loc4 < loc2) 
		{
            loc1[loc4 >> 5] = loc1[loc4 >> 5] | (arg1[loc4 / 8] & loc3) << loc4 % 32;
            loc4 = loc4 + 8;
        }
		loc1[loc2 >> 5] = loc1[loc2 >> 5] | 128 << loc2 % 32;
		loc1[(loc2 + 64 >>> 9 << 4) + 14] = loc2;
		return loc1;
    }
		
		
	this.rol=function(arg1, arg2)
    {
        return arg1 << arg2 | arg1 >>> 32 - arg2;
    }
		
	this.toHex=function(arg1, arg2=false)
    {
        var loc2=0;
        var loc3=0;
        var loc1="";
        if (arg2) 
        {
            loc2 = 0;
            while (loc2 < 4) 
            {
                loc1 = loc1 + (this.hexChars.charAt(arg1 >> (3 - loc2) * 8 + 4 & 15) + this.hexChars.charAt(arg1 >> (3 - loc2) * 8 & 15));
                ++loc2;
            }
        }
        else 
		{
            loc3 = 0;
            while (loc3 < 4) 
            {
                loc1 = loc1 + (this.hexChars.charAt(arg1 >> loc3 * 8 + 4 & 15) + this.hexChars.charAt(arg1 >> loc3 * 8 & 15));
                ++loc3;
            }
        }
        return loc1;
    }
	
}
