var creaVita = function(x,y)
{
    for(var r=-1; r<1; r++)
    {
        for(var c=-1; c<1; c++)
        {
            nascita((x+r)+"-"+(y+c));
        }
    }
    nascita(x+2,y+2);
}

var nascita = function(id)
{
    $("#"+id).removeClass("colorata");
    $("#"+id).addClass("nuova");
}


