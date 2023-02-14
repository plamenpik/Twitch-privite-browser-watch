function removeElements() {	
	var cookieBanner = document.querySelector('.kBprba > div:nth-child(1)');
	var footerBanner = document.getElementById('twilight-sticky-footer-root');
	var chatButton = document.querySelector('.ScCoreButton-sc-ocjdkq-0.dulmVz.ScButtonIcon-sc-9yap0r-0.HduzH');
	var startWatchBtn = document.querySelector('.gRbxbd > button:nth-child(1)');
	var primeOffers = document.querySelector('.bZVrjx.prime-offers');
	if (chatButton) {
		chatButton.click();
		console.log('chatButton clicked');
	}
	if (startWatchBtn) {
		startWatchBtn.click();
		console.log('startWatchBtn clicked');
	}
	if (cookieBanner) {
		cookieBanner.remove();
		console.log('cookieBanner removed');
	}
	if (footerBanner) {
		footerBanner.remove();
		console.log('footerBanner removed');
	}
	if (primeOffers) {
		primeOffers.remove();
		console.log('primeOffers removed');
	}
}
setInterval(removeElements, 500);
