
// EXERCICE 1 - LORSQUE JE CLIC SUR LA ZONE1, LE TITRE H1 DOIT SE METTER EN VERT, AU CENTRE, ET AVOIR UNE TAILLE DE 80PX

$('.zone1').on('click', ()=>{
    $('h1').css({'color' : 'green', 'font-size':'80px', 'text-align':'center'});
});

// EXERCICE 2 - LORSQUE JE CLIC SUR LA ZONE2 LE BACKGROUND DE LA PAGE DOIT CHANGER DE COULEUR

$('.zone2').on('click', ()=>{
    $('body').css({'background':'pink' });
});

// EXERCICE 3 - JE CREE UN BOUTON (SUBMIT et NON BUTTON) DE FORMULAIRE ET LORSQUE JE CLIC DESSUS LE BACKGROUND DE LA PAGE CHANGE DE COULEUR

$('.zone3').on('click', (event)=>{
    event.preventDefault();
    $('body').css({'background':'pink' });
});

// EXERCICE 4 - JE CREE UN CHAMP DE FORMULAIRE AINSI QU'UN BOUTON (SUBMIT et NON BUTTON) DE FORMULAIRE ET LORSQUE JE CLIC DESSUS LE BACKGROUND DE LA PAGE CHANGE DE COULEUR AVEC LA COULEUR SAISIE DANS LE CHAMP

$('.zone5').on('click', (event)=>{
    event.preventDefault();
    let color = $('.zone4').val()
    $('body').css({'background-color':color})
});

// EXERCICE 5 - JE CREE UN SELECT/OPTION AVEC DES COULEURS AINSI QU'UN BOUTON SUBMIT, LORSQUE JE CLIC SUR LE BOUTON SUBMIT, LA COULEUR CHOISIE S'APPLIQUE

$('.zone7').on('click', (event)=>{
    event.preventDefault();
    let select = $('.zone6').val()
    console.log(select);

    $('body').css({'background-color':select})
});


//EXERCICE 6 - LORSQUE JE CLIC SUR LA ZONE 8, LE BACKGROUND PASSE EN JAUNE

$('.zone8').on('click', ()=>{
    $('.zone8').css({'background-color':'yellow'})
});


//EXERCICE 7 - LORSQUE JE CLIC SUR LA ZONE 9, LE BACKGROUND PASSE EN JAUNE, SAUF POUR L'ELEMENT CLIQUÉ QUI PASSE EN VERT

$('.zone9').on('click',function() {
    console.log("click z9")
    $('.zone9').css({'background-color':'yellow'});
    $(this).css("background","green");
});





