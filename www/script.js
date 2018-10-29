function makeEverythingAppear(boxes)
{
        for(var i=0;i<boxes.length;i++)
            boxes[i].style.display="block";
}
$(document).ready(function() {
    var boxes=document.getElementsByClassName("col-4");
    var titles=[];
    for(var i=0;i<boxes.length;i++)
    {
        titles.push(boxes[i].innerHTML.toLowerCase());
    }
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
    $(".col-4").click(function(){
        var texto = String($(this).text().trim());
        texto=texto.substring(0,texto.indexOf('?'))+texto.substring(texto.indexOf('?')+1,texto.len)
        var audioElement = document.createElement('audio');
        audioElement.setAttribute('class','holt-speak');
        var fileName=String("newSounds/"+texto+".ogg")
        audioElement.setAttribute('src', fileName);
        audioElement.setAttribute('autoplay', 'autoplay');
        $.get();
        audioElement.addEventListener("load", function() {
        audioElement.play();
        }, true);
    });
    $(".searchToggle").click(function(){
        searchBar=document.getElementById("searchBarContainer").style.display;
        if(searchBar=="table")
        {
            document.getElementById("searchBarContainer").style.display="none";
            document.getElementById("mainHeader").style.display="table";
            makeEverythingAppear(boxes);
        }
        else
        {
            document.getElementById("searchBarContainer").style.display="table";
            document.getElementById("mainHeader").style.display="none";
        }
    });
    $("#searchBar").on('input', function(){
        var searchBar=document.getElementById("searchBar");
        makeEverythingAppear(boxes);
        searchBar=String(searchBar.value);
        for(var i=0;i<titles.length;i++)
        {
            if(!(titles[i].includes(searchBar,0)))
                boxes[i].style.display="none";
        }

    });
});
