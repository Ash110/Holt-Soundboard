$(document).ready(function(){
    /*var canvas2ImagePlugin = window.plugins.canvas2ImagePlugin;
    var countDownDate = new Date("Jan 10, 2019 21:30:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    canvas.width = 300;
    canvas.height = 300;
    var background = new Image();
    background.src = "b99promo.jpg";
    // Make sure the image is loaded first otherwise nothing will draw.
    background.onload = function(){
        ctx.drawImage(background,0,0); 
        ctx.font = "25px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Brooklyn 99 returns in", canvas.width/2, 50); 
        ctx.font = "120px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText(days, canvas.width/2, 175); 
        ctx.font = "20px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("DAYS", canvas.width/2, 210); 
        ctx.font = "12px google";
        ctx.fillStyle = "#ffffff";
        ctx.textAlign = "center";
        ctx.fillText("Visit soundboards.xyz to use the Holt Soundboard", canvas.width/2, 280); 
    };
    function mySavingFunction() {
    canvas2ImagePlugin.saveImageDataToLibrary(
        function(msg){
            alert(msg);
        }, 
        function(err){
            alert(err);
        }, 
        document.getElementById("myCanvas")
    );
}*/
    
    var countDownDate = new Date("Jan 10, 2019 21:30:00").getTime();
    var now = new Date().getTime();
    var distance = countDownDate - now;
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    $(".countdown-days").text(days)
    $(".count-share").click(function(){
        alert("Sharing the excitement is coming very, very soon!");
    });
});