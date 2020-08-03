var blockAd;
delLogo = setInterval(function(){
	blockAd = document.querySelector('[alt="www.000webhost.com"]');
	if (blockAd == undefined || blockAd == null || blockAd == ""){
		clearInterval(delLogo);
	} else {
		blockAd.outerHTML = "";
	}
}, 1 );