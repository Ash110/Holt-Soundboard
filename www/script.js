function makeEverythingAppear(boxes)
{  
    for(var i=0;i<boxes.length;i++)
        boxes[i].style.display="block";
}
$(document).ready(function() {
    var options = {
  message: 'share this', // not supported on some apps (Facebook, Instagram)
  subject: 'the subject', // fi. for email
  files: ['', ''], // an array of filenames either locally or remotely
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title,
};

var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
};

var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
};
var options = {
  message: 'share this', // not supported on some apps (Facebook, Instagram)
  subject: 'the subject', // fi. for email
  files: ['', ''], // an array of filenames either locally or remotely
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title,
};

var onSuccess = function(result) {
  console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  console.log("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
};

var onError = function(msg) {
  console.log("Sharing failed with message: " + msg);
};

window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    $(".col-4").addClass("jackInTheBox");
	var search=0;
	var mywindow = $(window);
    var mypos = mywindow.scrollTop();
    var boxes=document.getElementsByClassName("col-4");
    var titles=[];
    var fav_sounds=new Array();
    var currentAudio=0;
	mywindow.scroll(function() {
    	if(mywindow.scrollTop() > mypos)
    	{
        	$(".scale-transition").removeClass("scale-in");
			$(".scale-transition").addClass("scale-out");
    	}
    	else
    	{
			$(".scale-transition").removeClass("scale-out");
			$(".scale-transition").addClass("scale-in");
    	}
    	mypos = mywindow.scrollTop();
 	});
    
	 $('.fixed-action-btn').floatingActionButton();
	setTimeout(function(){
		$(".scale-transition").removeClass("scale-out");
		$(".scale-transition").addClass("scale-in");
	},500);
	$(".fixed-action-btn").click(function(){
		if(search===0){
			$(".search-bar").css("bottom","0%");
			search = 1;
            $(".search-icon").text("close");
            $("#last_name").focus();
        }
        else{
            document.getElementById("last_name").value='';
            $(".search-bar").css("bottom","-50%");
			search = 0;
            $(".search-icon").text("search");
            makeEverythingAppear(boxes);
        }
	});
    for(var i=0;i<boxes.length;i++)
    {
        titles.push(boxes[i].innerHTML.toLowerCase());
    }
    $('.dropdown-trigger').dropdown();
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $(".goback2").click(function(){
        window.location.href ="index.html";
    });
    var e = (window.localStorage.key(0), window.localStorage.getItem("Holt-update-18-12-18"));
    if (e=="done");
    else {
        window.localStorage.setItem("Holt-update-18-12-18", "done");
        $('.modal').modal('open');
    }
    $(".col-4").click(function(){
        var texto = String($(this).text().trim());
        texto=texto.substring(0,texto.indexOf('?'))+texto.substring(texto.indexOf('?')+1,texto.len);
        if(currentAudio!==0)
            currentAudio.pause();
        currentAudio = document.createElement('audio');
        currentAudio.setAttribute('class','holt-speak');
        var fileName=String("newSounds/"+texto+".ogg");
        currentAudio.setAttribute('src', fileName);
        currentAudio.setAttribute('autoplay', 'autoplay');
        currentAudio.play();
        var options = {
  message: 'share this', // not supported on some apps (Facebook, Instagram)
  subject: 'the subject', // fi. for email
  files: [fileName], // an array of filenames either locally or remotely
  url: 'https://www.website.com/foo/#bar?a=b',
  chooserTitle: 'Pick an app' // Android only, you can override the default share sheet title,
};

var onSuccess = function(result) {
  alert("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  alert("Shared to app: " + result.app); // On Android result.app since plugin version 5.4.0 this is no longer empty. On iOS it's empty when sharing is cancelled (result.completed=false)
};

var onError = function(msg) {
  alert("Sharing failed with message: " + msg);
};

window.plugins.socialsharing.shareWithOptions(options, onSuccess, onError);
    });
    $(".holt-chat").click(function(){
        var url = "https://holt-chat.firebaseapp.com";
        var ref = window.open(url, "_blank");
    });
    $("#last_name").on('input', function(){
        var searchBar=document.getElementById("last_name");
        makeEverythingAppear(boxes);
        searchBar=String(searchBar.value);
        for(var i=0;i<titles.length;i++)
        {
            if(!(titles[i].includes(searchBar.toLowerCase(),0)))
                boxes[i].style.display="none";
        }
    });
    $(".paypal-btn").click(function(){
        window.open('https://paypal.me/Ash110', '_system', 'location=no');
    });
    
    /*                      THEMES                        */
    var theme = (window.localStorage.key(1), window.localStorage.getItem("Holt-theme"));
    if (theme=="dark"){
        $("body").css("background","#4e4e4e");
        $(".header").css("background","#1a1b1c");
        $(".header").css("box-shadow","none");
        $(".header").css("color","white");
        $(".sidenav").addClass("grey darken-2");
        $(".side-items").css("color","white");
        $(".support-info").css("color","white");
        $(".collapsible-header").css("background-color","#3e3e3e");
        $(".collapsible-header").css("color","white");
        $(".collapsible-header").css("border-bottom","none");
        $(".time-head").css("color","white");
    }
    else if (theme=="light"){
        $("body").css("background","#ffffff");
        $(".header").css("background","#ffffff");
        $(".header").css("box-shadow","#b9b9b9 0px 2px 15px");
        $(".header").css("color","black");
        $(".sidenav").addClass("white");
        $(".side-items").css("color","black");
        $(".support-info").css("color","black");
        $(".collapsible-header").css("background-color","#ffffff");
        $(".collapsible-header").css("color","black");
        $(".collapsible-header").css("border-bottom","none");
        $(".time-head").css("color","black");
    }
    else if (theme=="amoled"){
        $("body").css("background","#000000");
        $(".header").css("background","#000000");
        $(".header").css("box-shadow","none");
        $(".header").css("color","#ffffff");
        $(".sidenav").addClass("black");
        $(".side-items").css("color","white");
        $(".support-info").css("color","white");
        $(".collapsible-header").css("background-color","#000000");
        $(".collapsible-header").css("color","#ffffff");
        $(".collapsible-header").css("border-bottom","none");
        $(".time-head").css("color","white");  
    }
    $(".dark-mode").click(function(){
        window.localStorage.setItem("Holt-theme", "dark");
        location.reload();
    });
    $(".light-mode").click(function(){
        window.localStorage.setItem("Holt-theme", "light");
        location.reload();
    });
    $(".amoled-mode").click(function(){
        window.localStorage.setItem("Holt-theme", "amoled");
        location.reload();
    });
    var v = (window.localStorage.key(0), window.localStorage.getItem("Holt-fav"));
    console.log(v);
    setTimeout(function(){
        if (v===""){
            console.log("New Array");
            console.log(fav_sounds);
        }
        else {
            var hmm = window.localStorage.getItem("Holt-fav").split(",");
            fav_sounds = [];
            $.each(hmm, function(i, el){
                if($.inArray(el, fav_sounds) === -1) fav_sounds.push(el);
            });
            console.log(fav_sounds);
            window.localStorage.setItem("Holt-fav",fav_sounds);
        }
    },1000);
    $('.col-4').on('press', function(e) {
        $(this).removeClass("jackInTheBox");
        $(this).addClass("tada");
        var texto = String($(this).text());
        if(fav_sounds.includes(texto) === false){
            fav_sounds.push(texto);
            window.localStorage.setItem("Holt-fav", fav_sounds);
        }
        console.log(window.localStorage.getItem("Holt-fav"));
        setTimeout(function(){
            $(this).removeClass("tada");
        },1000);
    });
});
