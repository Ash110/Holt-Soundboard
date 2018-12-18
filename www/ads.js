 var admobid = {};
  if( /(android)/i.test(navigator.userAgent) ) { // for android & amazon-fireos
    admobid = {
      banner: 'ca-app-pub-2417690953188275/9628729812', // or DFP format "/6253334/dfp_example_ad"
      interstitial: 'ca-app-pub-2417690953188275/2130896639'
    };
  } else if(/(ipod|iphone|ipad)/i.test(navigator.userAgent)) { // for ios
    admobid = {
      banner: 'ca-app-pub-2417690953188275/9628729812', // or DFP format "/6253334/dfp_example_ad"
      interstitial: 'ca-app-pub-2417690953188275/2130896639'
    };
  }
if(AdMob) AdMob.createBanner({
    adId: admobid.banner,
    position: AdMob.AD_POSITION.TOP_CENTER,
    autoShow: true 
});