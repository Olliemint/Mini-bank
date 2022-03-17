//  let button = document.getElementById("btn");
//  let form = document.getElementById("myform");

//  form.addEventListener("submit", (e) =>{

//  })
$(document).ready(function(){
    $("#myform").submit(function(event){

   event.preventDefault();



var initialDeposit = parseInt($("#initial").val());
var deposit = parseInt($("#deposit").val());
var withDraw = parseInt($("#withdraw").val());
var balance = [];

// var bal = "Ksh:"+initialDeposit;
//  $("#balance").html(bal);

// document.getElementById("balance").innerHTML = ("Ksh:"+initialDeposit);
balance = initialDeposit;
$("#balance").text("Ksh." +balance);


if (deposit > 0){
balance =deposit+initialDeposit;
$("#balance").text("Ksh." +balance);

}
 else{
alert("You have insufficient funds");
}


if(balance > withDraw){
balance =(balance-withDraw);
$("#balance").text("Ksh." +balance);

} else{
alert("you have insufficient funds");
}

});
});