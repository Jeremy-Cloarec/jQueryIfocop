
$(function () {


console.log("coucou");

//exo création nav

$('*').css({'margin':'0', 'padding':'0'})

$('#navi').css({'padding':'10px 20px', 'margin-top':'10px', 'font-family' : 'calibri'});

$('#liste').css({'list-style-type':'none', 'display':'flex', 'justify-content' : 'end'});

$('#liste a').css({'text-decoration':'none', 'color':'black', 'padding': '10px'})


$("#liste a").hover(function(){
    $(this).css("background-color","yellow").css("font-weight", "600");
    }, function(){
    $(this).css("background-color", "").css("font-weight", "300");
});



//Selection par l'ID'

    let paraH1 = $('#para-h1');
    console.log(paraH1);

    paraH1.text('<strong>Coucou</strong> ! Je change le texte')//juste texte
    paraH1.html('<strong>Coucou</strong> ! Je change le texte')//prend en compte le ID

//Selection par la classe

    $('.container').css('border','1px solid #3333').css('padding', '20px')

    //avec {} on peut cumuler les propriétés
    $('.container').css({background : '#DCDCDC', margin:'20px'})


    //Selection par le nom des balises

    $('p').css('color', '#535')

    //Selection multiple

    $('h1, h2, p').css('font-family', 'calibri')


})





