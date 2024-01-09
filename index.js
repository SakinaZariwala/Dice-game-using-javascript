var randomnumber1= Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnumber1+".png";
var randomimgsource="images/"+ randomDiceImage;
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomimgsource);

var randomnumber2=Math.floor(Math.random()*6)+1;
var randomDiceImage="dice"+randomnumber2+".png";
var randomimgsource2="images/"+randomDiceImage;
var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomimgsource2);

if(randomnumber1>randomnumber2){
    document.querySelector("h1").innerHTML="🚩Player 1 wins!";

}
else if(randomnumber2>randomnumber1){
    document.querySelector("h1").innerHTML="Player 2 wins!🚩";

}
else{
    document.querySelector("h1").innerHTML="Draw!";
}