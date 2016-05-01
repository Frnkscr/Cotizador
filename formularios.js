$(function(){
    var t = $('.find').val();
    if (t.length == 0){
        console.log("body");
        $('.findEquipoTitulo').animate({"font-size":"1.5em"},500);
    }else{
        $('.findEquipoTitulo').animate({"font-size":"1em"},500);
    }
});



function cInput(id){
    var t = id;
    var p = $('#'+t).val();
    if (p.length == 0){
        console.log(t+"clic");
          $('.findEquipoTitulo').animate({"font-size":"1.5em"},500);
    }else{
        $('.findEquipoTitulo').animate({"font-size":"1em"},500);
    }
    
    /*var i = id;
    var opt = $("#"+i);
    console.log(opt);
    var inp = $("#"+i +"> .in").length;
    console.log(inp);
    if(inp == 0)
    {
        opt.append('<input type="text" class="in" name=""/>');
    }*/
}

/*
$("document").ready(function(){
    $("#in").html("<input type='text'>");
    });
    */