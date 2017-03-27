var esl=[];
var ing=[];
var pala=0;
$(document).ready(function (){   
    $("#acordeon").accordion();
    $("#txtfec").datepicker();
    $(".botones").button(); 
    
    $("#procesar").click(function ()
    {
        esl.push($("#espa").val());
        ing.push($("#ingl").val());
        pala=pala+1;
        $("#espa").val("");
        $("#ingl").val("");
    });
    
    $("#actualizar").click(function ()
    {
       for(var i=0; i<pala; i++)
       {
           if($("#bus").val()===esl[i])
           {
               ing[i]=$("#nuv").val();
           }
       }
    });
    $("#borrar").click(function ()
    {
       for(var i=0; i<pala; i++)
       {
           if($("#bus").val()===esl[i])
           {
               esl.splice(i);
               ing.splice(i);
               pala=pala-1;
           }
       }
    });
    
    $("#buscar").click(function ()
    {
         for(var i=0; i<pala; i++)
       {
           if($("#busq").val()===esl[i])
           {
                alert("La traduccion es "+ ing[i]);
           }
       }
    });
});