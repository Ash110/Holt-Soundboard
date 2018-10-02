$(document).ready(function() {
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $(".goback2").click(function(){
        window.location.href ="index.html";
    });
    var e = (window.localStorage.key(0), window.localStorage.getItem("Holt-update-02-10-18"));
    if ("done" === e);
    else {
        window.localStorage.setItem("Holt-update-02-10-18", "done");
        $('.modal').modal('open');
    }
    $("td").click(function(){
        var texto = $(this).text().trim();
        if(texto==="Hot Damn!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('class','holt-speak');
            audioElement.setAttribute('src', 'sounds/HOT%20DAMN%20.ogg');
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Get Some"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('class','holt-speak');
            audioElement.setAttribute('src', 'sounds/get%20some.ogg');
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Bone!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('class','holt-speak');
            audioElement.setAttribute('src', 'sounds/Bone.ogg');
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Boooone!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/Booooone!.ogg');
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Vindication!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/Vindication.ogg');
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Bingpot!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/Brooklyn%2099%20Bingpot.ogg');
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Velvet Thunder"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', 'sounds/Brooklyn%2099%20-%20VELVET%20THUNDER%20(mp3cut.net).ogg');
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Never been happier"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I've%20never%20been%20happier.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Marco Polo, Punk"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/marco%20polo.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Yabba Dabba Doo"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/yabba%20dabba%20doo.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Yas Queen"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/yas%20queen.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Boost my bottom"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Boost%20my%20bottom.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Funniest Story Ever"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/That%20is%20without%20question%20the%20funniest%20story%20i've%20ever%20heard.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Next Level"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Time%20for%20the%20nest%20level.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Logic against me"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/You've%20used%20my%20logic%20against%20me.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="BRB Time"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/brb%20time.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Wuntch Insult 1"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/But%20if%20you're%20here.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Wuntch Insult 2"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/derek%20jeter.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Wuntch Insult 3"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/birds%20stop%20singing.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Wuntch Insult 4"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/talking%20raisin.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Wuntch Insult 5"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/wuntch%20time%20is%20over.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="You're not Cheddar"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/you're%20not%20cheddar.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Holt's robot impression"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/robot.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Dismissed"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/dismissed.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Dirtbag!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/dirtbag.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="I'd like to play"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I'd%20like%20to%20play.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Oopsie Doodle"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Oppsie%20Doodle.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }
        else if(texto ==="Superior Officer"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I%20am%20your%20superior%20officer.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Holt Forced Laughing"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Holt%20laughing.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Zero interest in food"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I%20have%20zero%20interest.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="I'm"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I'm.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="This is"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/This%20is.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Raymond Holt"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Raymond%20Holt.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Is everything OK?"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Is%20everything%20OK.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Let's get that Punk"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Let's%20get%20that%20punk!.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Huh"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Huh.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Yes"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Yes.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Painnn"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/painnnn.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Everything is Garbage"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/everything%20is%20garbage.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Never. Love. Anything."){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/never%20love%20anything.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Peralta, you're a genius"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Peralta%20you're%20a%20genius.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Cowabunga, Mother"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/cowabunga.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="You call that, dancing?"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/you%20call%20that%20dancing.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="I'm diffusing a situation"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I'm%20diffusing%20a%20situation.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Situation diffused"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/situation%20diffused.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Let's unleash Hell"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/let's%20unleash%20hell.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Now put on a smile"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Now%20put%20on%20a%20smile.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Made? No,I birthed her"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/made%20no%20I%20birthed%20her.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Derek"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/derek.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Funky Cold Medina"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Funky%20Cold%20Medina.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Oh Damn!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/oh%20damn.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="The Full Bullpen!"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/the%20full%20bullpen.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Bold Personality"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Bold%20personality%20.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Cwazy Cupcakes"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Crazy%20Cupcakes.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Secret Weapon"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Cute%20little%20secret%20weapon.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Hello Sexarella"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Hello%20Sexarella.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Holt tries a Marshmallow"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Holt-Marshmallow.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="How dare you Detective Diaz"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/How%20dare%20you.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="I gained 3 pounds"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I%20gained%203%20pounds%20in%20Paris.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="I was Hula-Hooping"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I%20was%20hula%20hooping.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="I'm a curd-mudgeon"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/I'm%20a%20Curd-mudgeon.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Stop playing this inane garbage"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Stop%20playing%20this%20inane%20garbage.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="This is Balthazar"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/This%20is%20Balthaazar.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="Time to make Daddy proud"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/Time%20to%20make%20daddy%20proud.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }else if(texto ==="What are you doing?"){
            var audioElement = document.createElement('audio');
            audioElement.setAttribute('src', "sounds/What%20are%20you%20doing%20at%20Razzmataz.ogg");
            audioElement.setAttribute('autoplay', 'autoplay');
            $.get();
            audioElement.addEventListener("load", function() {
                audioElement.play();
            }, true);
        }        
    });
});
