var p1 = prompt("Enter player 1 name ");
var p2 = prompt("Enter player 2 name ");
document.querySelector("p.p1").textContent = p1;
document.querySelector("p.p2").textContent = p2;

function myfunc(){
  var ran1 =Math.ceil(Math.random() * 6);
  var ran2 =Math.ceil(Math.random() * 6);

  var newsrc = "images/dice"+ran1+".png";
  document.querySelector("img.img1").setAttribute("src", newsrc);

  var newsrc2 = "images/dice"+ran2+".png";
  document.querySelector("img.img2").setAttribute("src", newsrc2);

  if(ran1 > ran2){
    document.querySelector("h3").textContent = p1+" win 🥳";
  } else if(ran2 > ran1){
    document.querySelector("h3").textContent = p2+" win 🥳";
  } else {
    document.querySelector("h3").textContent = " Match Draw 😉";
  }

  document.querySelector("button").textContent = "Refresh Dice Again";

}
