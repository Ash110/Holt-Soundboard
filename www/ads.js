var isAppForeground = true;
    
function initAds() {
  if (admob) {
    var adPublisherIds = {
        android : {
            banner : "ca-app-pub-2417690953188275/9628729812",
            interstitial : "ca-app-pub-2417690953188275/2130896639"
          }
        };
    	  
        var admobid = (/(android)/i.test(navigator.userAgent)) ? adPublisherIds.android : adPublisherIds.ios;
            
        admob.setOptions({
          publisherId:      admobid.banner,
          interstitialAdId: admobid.interstitial,

          
        });
 
        registerAdEvents();
        
      } else {
        alert('AdMobAds plugin not ready');
      }
    }
    
    function onAdLoaded(e) {
      if (isAppForeground) {
        if (e.adType === admob.AD_TYPE.INTERSTITIAL) {
          alert("An interstitial has been loaded and autoshown. If you want to load the interstitial first and show it later, set 'autoShowInterstitial: false' in admob.setOptions() and call 'admob.showInterstitialAd();' here");
        } else if (e.adType === admob.AD_TYPE_BANNER) {
          alert("New banner received");
        }
      }
    }
    
    function onPause() {
      if (isAppForeground) {
        admob.destroyBannerView();
        isAppForeground = false;
      }
    }
    
    function onResume() {
      if (!isAppForeground) {
        setTimeout(admob.createBannerView, 1);
        setTimeout(admob.requestInterstitialAd, 1);
        isAppForeground = true;
      }
    }
    
    // optional, in case respond to events
    function registerAdEvents() {
      document.addEventListener(admob.events.onAdLoaded, onAdLoaded);
      document.addEventListener(admob.events.onAdFailedToLoad, function (e) {});
      document.addEventListener(admob.events.onAdOpened, function (e) {});
      document.addEventListener(admob.events.onAdClosed, function (e) {});
      document.addEventListener(admob.events.onAdLeftApplication, function (e) {});
      
      document.addEventListener("pause", onPause, false);
      document.addEventListener("resume", onResume, false);
    }
        
    function onDeviceReady() {
      document.removeEventListener('deviceready', onDeviceReady, false);
      initAds();
 
      // display a banner at startup
      admob.createBannerView();
        
      
    }
    
    document.addEventListener("deviceready", onDeviceReady, false);