$(document).ready(function() {
    $('.modal').modal();
    $('.sidenav').sidenav();
    $('.collapsible').collapsible();
    $(".goback2").click(function(){
        window.location.href ="index.html";
    });
    var e = (window.localStorage.key(0), window.localStorage.getItem("Holt-update-02-10-18"));
    if (e=="done");
    else {
        window.localStorage.setItem("Holt-update-02-10-18", "done");
        $('.modal').modal('open');
    }
    $("td").click(function(){
        var texto = String($(this).text().trim());
        texto=texto.substring(0,texto.indexOf('?'))+texto.substring(texto.indexOf('?')+1,texto.len)
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('class','holt-speak');
        var fileName=String("sounds/"+texto+".ogg")
        audioElement.setAttribute('src', fileName);
        audioElement.setAttribute('autoplay', 'autoplay');
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);
    });
});
