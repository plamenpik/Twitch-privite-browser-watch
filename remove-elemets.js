function removeElements() {	
	var cookieBanner = document.querySelector('.kBprba > div:nth-child(1)');
	var cookieBannerClip = document.querySelector('div.bYReYr:nth-child(1)');
	var footerBanner = document.getElementById('twilight-sticky-footer-root');
	var chatButton = document.querySelector('.ScCoreButton-sc-ocjdkq-0.dulmVz.ScButtonIcon-sc-9yap0r-0.gmVOFh');
	var startWatchBtn = document.querySelector('.gRbxbd > button:nth-child(1)');
	var primeOffers = document.querySelector('.bZVrjx.prime-offers');
	var signupGate = document.querySelector('.bHknAw');
	var signupGate2 = document.querySelector('.bANGbT');
	if (chatButton) {
		chatButton.click();
		console.log('chatButton clicked');
	}
	if (startWatchBtn) {
		startWatchBtn.click();
		console.log('startWatchBtn clicked');
	}
	if (cookieBanner && cookieBanner.style.display != 'none') {
		cookieBanner.style.display = 'none';
		console.log('cookieBanner removed');
	}
	if (cookieBannerClip && cookieBannerClip.style.display != 'none') {
		cookieBannerClip.style.display = 'none';
		console.log('cookieBannerClip removed');
	}
	if (footerBanner && footerBanner.style.display != 'none') {
		footerBanner.style.display = 'none';
		console.log('footerBanner removed');
	}
	if (primeOffers && primeOffers.style.display != 'none') {
		primeOffers.style.display = 'none';
		console.log('primeOffers removed');
	}
	if (signupGate && signupGate.style.display != 'none') {
		signupGate.style.display = 'none';
		console.log('signupGate removed');
	}
	if (signupGate2 && signupGate2.style.display != 'none') {
		signupGate2.style.display = 'none';
		console.log('signupGate2 removed');
	}
}
setInterval(removeElements, 500);
