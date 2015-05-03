var isPlatform = { 
    Android: function() { return navigator.userAgent.match(/Android/i); }, 
    BlackBerry: function() { return navigator.userAgent.match(/BlackBerry/i); }, 
    iOS: function() { return navigator.userAgent.match(/iPhone|iPad|iPod/i); }, 
	slowiOS: function() { return navigator.userAgent.match(/iPad1|iPad2|iPod/i); }, 
    Opera: function() { return navigator.userAgent.match(/Opera Mini/i); }, 
    WindowsMobile: function() { return navigator.userAgent.match(/IEMobile/i); }, 
    mobile: function() { return (isPlatform.Android() || isPlatform.BlackBerry() || isPlatform.iOS() || isPlatform.Opera() || isPlatform.WindowsMobile()); },
    slowMobile:  function() { return navigator.userAgent.match(/iPhone1|iPhone2|iPhone3|iPad1|iPad2|iPod1|iPod2|iPod3/i); },
 //   IE8: function() { return $.browser.msie && $.browser.version == '8.0'; }
};  