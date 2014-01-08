
var AdMob = {
       callbackMap: {},

        callbackIdx: 0,

        createBanner: function(options){
            cordovaRef.exec(null, null, "AdMob", "createBanner", [options]);
        },

        loadBanner: function(options){
            cordovaRef.exec(null, null, "AdMob", "loadBanner", [options]);
        },

        moveBanner:function(options){
            cordovaRef.exec(null, null, "AdMob", "moveBanner", [options]);
        },

        deleteBanner: function(){
            cordovaRef.exec(null, null, "AdMob", "deleteBanner", []);
        },

        didFailToReceiveAdWithErrorCallback:function(){
            alert("Banner failed to receive ad with error");
        },

        adViewDidDismissScreenCallback: function(){
            alert("Banner was dismissed");
        },

        adViewDidReceiveAdCallback: function(){
            alert("Banner reveived ad");
        },

        adViewWillDismissScreenAdCallback:function(){
            alert("Banner will be dismissed");
        },

        adViewWillLeaveApplicationCallback:function(){
            alert("Will leave application");
        },

        adViewWillPresentScreenCallback:function(){
            alert("Will present screen");
        }
    };

module.exports = AdMob;
