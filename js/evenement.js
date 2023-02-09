

$(()=>{

    //evenement mouse hover

    $('.zone1').on('mouseover', function (){
        $(this).css('background', 'IndianRed');
        $('#info').text('Je suis dans la zone 1');
        });

    //evenement mouse move

    $('.zone2').on('mousemove', (event)=>{
        //event.preventDefault();
        $('.zone2').text('pageX :' + event.pageX +', pageY : ' + event.pageY)
        $('#info').text('Je suis dans la zone 2');
    });

    //evenement mouse out

    $('.zone3').on('mouseout', ()=>{
        $('.zone3').css('background', 'IndianRed');
        $('#info').text('Je suis dans la zone 3');
    });

    //Mouse enter, mouse leave 
    
    $('.zone4').on('mouseenter', ()=>{
        $('.zone4').css('background', 'IndianRed');
        $('#info').text(`J'entre dans la zone 4`);
    });

    $('.zone4').on('mouseleave', ()=>{
        $('.zone4').css('background', '');
        $('#info').text(`Je sors de la zone 4`);
    });


    //mouseup 

    $('.zone5').on('mouseup', ()=>{
        $('.zone5').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 5`);
    });

     //mousedown

    $('.zone6').on('mousedown', function() {
        $('.zone6').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 6`);
    });

    //click

    $('.zone7').on('click', ()=>{
        $('.zone7').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 7`);
    });

    //DB click

    $('.zone8').on('dblclick', ()=>{
        $('.zone8').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 8`);
    });

    //Click droit

    $('.zone9').contextmenu (()=>{
        $('.zone9').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 9`);
    });

    //blur

    $('.zone10').on( `blur`, ()=>{
        $('.zone10').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 10`);
    });

    //change

    $('.zone11').on( `change`, ()=>{
        $('.zone11').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 10`);
    });

    //keydown

    $('.zone12').on( `keydown`, ()=>{
        $('.zone12').css('background', 'IndianRed');
        $('#info').text(`Je suis dans la zone 10`);
    });

    //key

    $('.zone12').on( `keyup`, ()=>{
        $('.zone12').css('background', 'green');
        $('#info').text(`Je suis dans la zone 10`);
    });

    //scroll

    $(window).on( `scroll`, ()=>{
        $('body').css('background', 'green');
        $('#info').text(`Je suis dans la zone 10`);
    });























});

