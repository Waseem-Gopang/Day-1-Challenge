
var randomNumber1=Math.random()*5;
randomNumber1=Math.round(randomNumber1)+1;
var randomImages1="dice"+randomNumber1+".png";
var randomImagesSrc1="images/"+randomImages1;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesSrc1);

var randomNumber2=Math.random()*5;
randomNumber2=Math.round(randomNumber2)+1;
var randomImages2="dice"+randomNumber2+".png";
var randomImagesSrc2="images/"+randomImages2;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImagesSrc2);

if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML="🚩Play 1 Wins!";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML="Play 2 Wins!🚩";
}
else{
    document.querySelector("h1").innerHTML="Draw!";
}