
var player11=prompt("enter player 1 name");
var player22=prompt("enter  player 2 name");
document.getElementsByClassName('player1')[0].innerHTML=player11;
document.getElementsByClassName('player2')[0].innerHTML=player22;



var randomnumber=Math.floor(Math.random()*6)+1;
var randomimage= "dice"+randomnumber+".png";//dice1.png-dice6.png
var randomimagepath="images/"+randomimage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimagepath);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomimage2="dice"+randomnumber2+".png";
var randomimagepath2="images/"+randomimage2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimagepath2);

if(randomnumber>randomnumber2){
    document.querySelector("h1").innerHTML=player11+" wins!!!";
}
else{
    document.querySelector("h1").innerHTML=player22+" wins";
}

$(document).ready(function(){
    $(".btn1").click(function(){
        $(".slider").show(3000);
    });
});
$(document).ready(function(){
    $(".btn2").click(function(){
        $(".slider").hide(3000);
    });
});