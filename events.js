// It grabs h1 tags and runs the function
$('h1').click(function(){
   console.log("There was a click") 
})

// To change element send "this" keyword
$('li').click(function(){
    $(this).text("I was changed")
})

//  KEYPRESS
$('input').eq(0).keypress(function(event){
    console.log(event);
})