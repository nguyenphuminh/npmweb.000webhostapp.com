if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
	var changeFonts = document.querySelector("body");
	changeFonts.style.fontFamily="helvetica";
}

var blockAd;
delLogo = setInterval(function(){
	blockAd = document.querySelector('[alt="www.000webhost.com"]');
	if (blockAd == undefined || blockAd == null || blockAd == ""){
		clearInterval(delLogo);
	} else {
		blockAd.outerHTML = "";
	}
}, 1 );